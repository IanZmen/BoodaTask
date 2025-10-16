import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';

import portafolio from './routes/portafolio.js';

const app = new Koa();
const router = new Router();


app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(portafolio.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT);