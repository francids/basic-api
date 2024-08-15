import express from 'express';
import { getRoot } from '../controllers/mainController.js';
import { getPingPong } from '../controllers/pingPongController.js';

const router = express.Router();

router.get('/', getRoot);
router.get('/ping', getPingPong);

export default router;
