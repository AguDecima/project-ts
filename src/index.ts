import express, { Express } from 'express';
import { router } from './routes/user';
import bodyParser from 'body-parser';

const app: Express = express();

// body parser
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// routes
app.use('/v1', router);

// run server
app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});
