import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/ping', (req: Request, res: Response) => {
  res.json({
    ping: 'pong',
  });
});

export default app
