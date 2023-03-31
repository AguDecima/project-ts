import express, { Express, Request, Response } from 'express';

const app: Express = express();

// routes
app.get('/user', (req: Request, res: Response) => {
  res.send({
    id: 38652010,
    name: 'Agustin',
    surname: 'Decima'
  }).json();
});

// run server
app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});