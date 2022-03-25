import { Customer, CustomerLoan, Loan, Payment } from "../models/loans.js";
import mongoose from "mongoose";

export const getPayments = async (req, res) => {
    try {
        const id = req.user.id
        if (!id) throw ({
            code: 401,
            status: 'fail',
            message: 'Missing user ID.',
        })
        const allLoans = await CustomerLoan.find({ customer_id: id }).exec()

        var results = []
        for (let i = 0; i < allLoans.length; i++) {
            const payment = await Payment.findOne({ loan_id: allLoans[i].loan_id }).exec()
            if (payment) {
                results.push(payment)
            }
        }

        res.status(200)
        res.json({
            status: 'success',
            data: results
        })
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
        const id = req.user.id
        if (!id) throw ({
            code: 401,
            status: 'fail',
            message: 'Missing user ID.',
        })
        const loan_id = req.body.loan_id
        if (!loan_id) throw ({
            code: 400,
            status: 'fail',
            message: '`loan_id` is required.'
        })
        const payment_amount = req.body.payment_amount
        if (!loan_id) throw ({
            code: 400,
            status: 'fail',
            message: '`loan_id` is required.'
        })

        const loan = await Loan.findById(loan_id).exec()
        let loanRemaining = 0
        if (loan.loan_amount > payment_amount) {
            loanRemaining = loan.loan_amount - payment_amount
        }
        // console.log(loanRemaining)
        await Loan.findByIdAndUpdate(loan_id, { loan_amount: loanRemaining })

        const newPayment = new Payment({
            loan_id: loan_id,
            payment_amount: payment_amount,
        })
        await newPayment.save()

        res.status(200)
        res.json({
            status: 'success',
            data: newPayment
        })
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