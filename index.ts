import express from 'express';
import router from './routes/router';
import config from './config/config';
import logger from './middlewares/logger';

const app = express();
const port = config.port;

// Middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use('/', router);

// Server listening
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app;
