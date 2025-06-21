import express from 'express';
import { addSubscriber, getSubscribers } from '../controller/subscribe';

const router = express.Router();

router.post('/api/v1/subscribe', addSubscriber);
router.get('/api/v1', getSubscribers);

export default router;