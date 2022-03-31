import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { api } from './routes/api';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
api(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
