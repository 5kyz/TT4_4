import express from 'express';

import { updateBalance } from '../controllers/balance.js';

const router = express.Router();

router.patch('/', updateBalance);               // update balance (deposit mooney into customer account)

export default router;