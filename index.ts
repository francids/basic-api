import express from 'express';
import router from './routes/router.js';
import config from './config/config.js';
import logger from './middlewares/logger.js';

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
