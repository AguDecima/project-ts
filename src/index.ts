import express, { Express } from 'express';
import { router } from './routes/user';

const app: Express = express();

// routes
app.use('/v1', router);

// run server
app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});