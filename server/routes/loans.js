import express from 'express';

import { getLoans, getLoanById, createLoan } from '../controllers/loans.js';

const router = express.Router();


// router.get('/account', getAccountDetails);             //get customer account details
router.get('/', getLoans);                              // get all loans from customer
router.get('/:id', getLoanById);                        // get specific loan via id
router.post('/', createLoan);                           // create loan for customer
// router.patch('/loan/:id', updateLoan)                   // update loan amount when payment is created to partially/fully pay off loan

export default router;