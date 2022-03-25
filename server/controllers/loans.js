// import { Customer, CustomerLoan, Loan, Payment } from "../models/loans.js";
// import mongoose from "mongoose";

export const getAccountDetails = async (req, res) => {
    try {
        res.send('api working')
        // can get customer id by using auth token ???
        // const customer_details = await Customer.findById(req.user.id);
        // just display partial cusomter details, don't want token and password
        // res.status(200).json(customer_details);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// export const getLoans = async (req, res) => {
//     try {
//         // can get customer id by using auth token ???
//         const loans = await CustomerLoan.find({ 'customer_id': req.user.id });
//         res.status(200).json(loans);
//     }
//     catch (err) {
//         res.status(404).json({ message: err.message });
//     }
// }

