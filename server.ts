import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as compression from 'compression';

import * as express from 'express';

import { MongoClient, Db } from 'mongodb';

import { json } from 'body-parser';

import { join } from 'path';

const MESSAGES_COLLECTION = 'messages';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

let port = process.env.PORT;
if (port == null || port === '') {
  port = '8000';
}
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

app.use(compression());
app.use(json());

let db: Db;



// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);


MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', (error, result) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  db = result.db();
  console.log('Database connection ready');

  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
});
// Start up the Node server

app.get('/api/messages', (req, res) => {
  db.collection(MESSAGES_COLLECTION).find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, 'Failed to get messages');
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post('/api/messages', (req, res) => {
  const newMessage = {
    ...req.body,
    createDate: new Date()
  };

  if (!req.body.message && req.body.meessage.messagetext) {
    handleError(res, 'Invalid user input', 'Must provide a message text.', 400);
  } else {
    db.collection(MESSAGES_COLLECTION).insertOne(newMessage, (err, doc) => {
      if (err) {
        handleError(res, err.message, 'Failed to create new contact.');
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

function handleError(res: express.Response, reason: string, message: string, code: number = 500) {
  console.log(`ERROR: ${reason}`);
  res.status(code).json({ 'error': message });
}
