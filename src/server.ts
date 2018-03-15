import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import bootstrapDatabase from './db/bootstrapDatabase';

require('dotenv').load();

bootstrapDatabase();

const app = express();
const port = process.env.DEV_PORT || process.env.PORT || process.getuid();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Welcome!' });
});

app.listen(1337, () =>
  console.log('Server running on 1337 with auto restart!')
);
