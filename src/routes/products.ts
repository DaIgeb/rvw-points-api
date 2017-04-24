import * as express from 'express';

export const products = {

  getAll: function (req: express.Request, res: express.Response) {
    var allProducts = data; // Spoof a DB call
    res.json(allProducts);
  },

  getOne: function (req: express.Request, res: express.Response) {
    var id = req.params.id;
    var product = data[0]; // Spoof a DB call
    res.json(product);
  },

  create: function (req: express.Request, res: express.Response) {
    var newProduct = req.body;
    data.push(newProduct); // Spoof a DB call
    res.json(newProduct);
  },

  update: function (req: express.Request, res: express.Response) {
    var updateProduct = req.body;
    var id = req.params.id;
    data[id] = updateProduct // Spoof a DB call
    res.json(updateProduct);
  },

  delete: function (req: express.Request, res: express.Response) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
  name: 'product 1',
  id: '1'
}, {
  name: 'product 2',
  id: '2'
}, {
  name: 'product 3',
  id: '3'
}];