import express from 'express';

import { getPayments, createPayment } from '../controllers/payments.js';

router.get('/payments', getPayments);                  // get all payments
router.post('/payment', createPayment)                  // create payment for cusomer

export default router;