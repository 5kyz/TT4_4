import { Customer, CustomerLoan, Loan, Payment } from "../models/loans.js";
import mongoose from "mongoose";

export const updateBalance = async (req, res) => {
    try {
        // can get customer id by using auth token ???
        // const loans = await CustomerLoan.find({ 'customer_id': req.user.id });
        // res.status(200).json(loans);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}
