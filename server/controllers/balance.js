import { Customer, CustomerLoan, Loan, Payment } from "../models/loans.js";
import mongoose from "mongoose";

export const updateBalance = async (req, res) => {
    const customer_id = req.user.id;
    try {
        // can get customer id by using auth token ???
        // const loans = await CustomerLoan.find({ 'customer_id': req.user.id });
        // res.status(200).json(loans);
        const new_balance = parseFloat(req.body.balance);
        console.log(new_balance)
        const updatedBalance = await Customer.findByIdAndUpdate(customer_id, { "balance": new_balance }, { new: true });
        res.status(201).json(updatedBalance);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}
