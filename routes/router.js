import express from 'express';
import { getRoot, getPong } from '../controllers/main-controller.js';
import { getUsers } from '../controllers/users-controller.js';

const router = express.Router();

router.get('/', getRoot);
router.get('/ping', getPong);
router.get("/users", getUsers);

export default router;
