import express from 'express';

import { getLoans, getLoanById, createLoan } from '../controllers/loans.js';

const router = express.Router();

router.get('/', getLoans);                              // get all loans from customer
router.get('/:id', getLoanById);                        // get specific loan via id
router.post('/', createLoan);                           // create loan for customer

export default router;