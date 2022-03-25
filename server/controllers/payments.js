import { Customer, CustomerLoan, Loan, Payment } from "../models/loans.js";
import mongoose from "mongoose";

export const getPayments = async (req, res) => {
    try {
        console.log(req.user.id)
        // const id = req.user.id;
        // if (!id) throw ({
        //     code: 401,
        //     status: 'fail',
        //     message: 'Missing user ID.',
        // })
        // const allLoans = await CustomerLoan.find({ customer_id: id }).exec()
        
        // var results = []
        // for (var loan in allLoans) {
        //     var payment = await Payment.findById(loan.loan_id).exec()
        //     results.add(payment)
        // }

        // res.status(200)
        // res.json({
        //     status: 'success',
        //     data: results
        // })
    }
    catch (err) {
        if (err.status == 'fail') {
            res.status(err.code)
            res.json({
                status: err.status,
                message: err.message
            })
        } else {
            res.status(500)
            res.json({
                status: 'error',
                message: err
            })
        }
    }
}

export const createPayment = async (req, res) => {
    try {
        // can get customer id by using auth token ???
        // const loans = await CustomerLoan.find({ 'customer_id': req.user.id });
        // res.status(200).json(loans);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}