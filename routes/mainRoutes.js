import express from 'express';
import { getRoot, getPong } from '../controllers/mainController.js';
import { getUsers } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getRoot);
router.get('/ping', getPong);
router.get("/users", getUsers);

export default router;
