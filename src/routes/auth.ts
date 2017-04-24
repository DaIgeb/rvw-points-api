import * as express from 'express';
import * as jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens
import { secret } from '../config/secret';

export const login = (req: express.Request, res: express.Response) => {
  const username = req.body.username || '';
  const password = req.body.password || '';

  if (username == '' || password == '') {
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid credentials"
    });
    return;
  }

  // Fire a query to your DB and check if the credentials are valid
  const dbUserObj = validate(username, password);

  if (!dbUserObj) { // If authentication fails, we send a 401 back
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid credentials"
    });
    return;
  }

  if (dbUserObj) {

    // If authentication is success, we will generate a token
    // and dispatch it to the client

    res.json(genToken(dbUserObj));
  }
};

export const validate = (username: string, password: string) => {
  // spoofing the DB response for simplicity
  var dbUserObj = { // spoofing a userobject from the DB. 
    name: 'arvind',
    role: 'admin',
    username: 'arvind@myapp.com'
  };

  return dbUserObj;
};

export const validateUser = (username: string) => {
  // spoofing the DB response for simplicity
  var dbUserObj = { // spoofing a userobject from the DB. 
    name: 'arvind',
    role: 'admin',
    username: 'arvind@myapp.com'
  };

  return dbUserObj.name === username ? dbUserObj : undefined;
};

// private method
function genToken(user: any) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.sign({
    exp: expires
  }, secret);

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays: number) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}
