import express from 'express';
import { addSubscriber, getSubscribers } from '../controller/subscribe';

const router = express.Router();

router.post('/subscribe', addSubscriber);
router.get('/', getSubscribers);

export default router;