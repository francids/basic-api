import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { router } from './routes/router';
import { serve } from '@hono/node-server';
import config from './config/config';

const app = new Hono();

app.use(logger());

app.route('/', router);

serve({
  fetch: app.fetch,
  port: config.port,
});

export default app;
