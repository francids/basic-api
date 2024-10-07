import { Hono } from 'hono';
import { users } from '../controllers/users';

export const router = new Hono();

router.get('/', (c) => c.json({ msg: 'Hi!' }));
router.get('/ping', (c) => c.json({ msg: 'pong' }));
router.route("/", users);
