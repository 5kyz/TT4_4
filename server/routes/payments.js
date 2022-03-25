import express from 'express';

import { getPayments, createPayment } from '../controllers/payments.js';

const router = express.Router();

router.get('/', getPayments);                  // get all payments
router.post('/', createPayment)                  // create payment for cusomer

export default router;