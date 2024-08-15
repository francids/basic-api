import express from 'express';
import { getRoot } from '../controllers/mainController.js';
import { getPingPong } from '../controllers/pingPongController.js';
import { getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getRoot);
router.get('/ping', getPingPong);
router.get("/users", getUsers);

export default router;
