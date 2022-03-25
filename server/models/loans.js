import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
    customer_name: { type: String, required: true },
    customer_phone: { type: String, unique: true, required: true },
    customer_address: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    token: { type: String },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const customerLoanSchema = mongoose.Schema({
    customer_id: { type: String, required: true },
    loan_id: { type: String, unique: true, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const loanSchema = mongoose.Schema({
    loan_amount: { type: Number, required: true },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PaymentSchema = mongoose.Schema({
    loan_id: { type: String, required: true },
    payment_amount: { type: Number, required: true },
    payment_date: {
        type: Date,
        default: new Date()
    },
});

const Customer = mongoose.model('Customer', customerSchema);
const CustomerLoan = mongoose.model('CustomerLoan', customerLoanSchema);
const Loan = mongoose.model('Loan', loanSchema);
const Payment = mongoose.model('Payment', PaymentSchema);