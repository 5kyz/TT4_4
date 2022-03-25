import express from 'express';

import { getAccountDetails } from '../controllers/loans.js';

const router = express.Router();


router.get('/account/', getAccountDetails);             //get customer account details
// router.get('/', getLoans);                              // get all loans from customer
// router.get('/:id', getLoanById);                        // get specific loan via id
// router.get('/payments/', getPayments);                  // get all payments

// router.post('/', createLoan);                           // create loan for customer
// router.post('/payment', createPayment)                  // create payment for cusomer

// router.patch('/balance/', updateBalance);               // update balance (deposit mooney into customer account)
// router.patch('/loan/:id', updateLoan)                   // update loan amount when payment is created to partially/fully pay off loan

export default router;