import express from 'express';
import mainRoutes from './routes/mainRoutes.js';
import config from './config/config.js';
import logger from './middlewares/logger.js';

const app = express();
const port = config.port;

// Middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use('/', mainRoutes);

// Server listening
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app;
