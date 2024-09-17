import express from 'express';
import { getRoot, getPong } from '../controllers/main-controller.js';
import { getUsers, getUserById } from '../controllers/users-controller.js';

const router = express.Router();

router.get('/', getRoot);
router.get('/ping', getPong);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);

export default router;
