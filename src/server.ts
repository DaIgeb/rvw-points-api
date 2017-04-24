import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken'; // used to create, sign, and verify tokens

import { middleware as validateRequest } from './middlewares/validateRequest';
import { router } from './routes';
import { User } from './models/user'; // get our mongoose model

// =======================
// configuration =========
// =======================
// mongoose.connect(config.database); // connect to database

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.all('/*', function (req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed
app.all('/api/v1/*', validateRequest);

app.use('/', router);

// If no route is matched by now, it must be a 404
app.use(function (req, res, next) {
  res.sendStatus(404).end();
});

// Start the server
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});