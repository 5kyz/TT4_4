import { Customer, CustomerLoan, Loan, Payment } from "../models/loans.js";
import mongoose from "mongoose";

export const getLoans = async (req, res) => {
    const customer_id = req.user.id
    try {
        const loans = await CustomerLoan.find({ 'customer_id': customer_id });
        res.status(200).json(loans);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getLoanById = async (req, res) => {
    const loan_id = req.params.id
    try {
        const loan = await Loan.findById(loan_id)
        res.status(200).json(loan);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createLoan = async (req, res) => {
    const customer_id = req.user.id
    const loan_amount = parseFloat(req.body.loan_amount);
    const newLoan = new Loan({ "loan_amount": loan_amount })
    console.log(newLoan)
    try {
        await newLoan.save();
        const loan_id = newLoan._id;
        const newCustomerLoan = new CustomerLoan({ "customer_id": customer_id, "loan_id": loan_id })
        try {
            await newCustomerLoan.save();
            res.status(201).json(newCustomerLoan);
        }
        catch (err) {
            res.status(409).json({ message: err });
        }
    }
    catch (err) {
        res.status(404).json({ message: err });
    }
}




