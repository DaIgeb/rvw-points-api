import * as express from 'express';

export const users = {
  getAll: function (req: express.Request, res: express.Response) {
    var allusers = data; // Spoof a DB call
    res.json(allusers);
  },

  getOne: function (req: express.Request, res: express.Response) {
    var id = req.params.id;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },

  create: function (req: express.Request, res: express.Response) {
    var newuser = req.body;
    data.push(newuser); // Spoof a DB call
    res.json(newuser);
  },

  update: function (req: express.Request, res: express.Response) {
    var updateuser = req.body;
    var id = req.params.id;
    data[id] = updateuser // Spoof a DB call
    res.json(updateuser);
  },

  delete: function (req: express.Request, res: express.Response) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{
  name: 'user 1',
  id: '1'
}, {
  name: 'user 2',
  id: '2'
}, {
  name: 'user 3',
  id: '3'
}];
