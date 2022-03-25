    import bcrypt from 'bcrypt'
    import express from 'express'
    import jwt from 'jsonwebtoken'

    import { Customer } from '../models/loans.js'

    const router = express.Router()

    export const signUp = async (req, res) => {
        try {
            const customer_name = req.body.customer_name
            if (!customer_name) throw ({
                code: 400,
                status: 'fail',
                message: '`customer_name` is required.'
            })
            const customer_phone = req.body.customer_phone
            if (!customer_phone) throw ({
                code: 400,
                status: 'fail',
                message: '`customer_phone` is required.'
            })
            const customer_address = req.body.customer_address
            if (!customer_address) throw ({
                code: 400,
                status: 'fail',
                message: '`customer_address` is required.'
            })
            const password = req.body.password
            if (!password) throw ({
                code: 400,
                status: 'fail',
                message: '`password` is required.'
            })

            const duplicateCustomer = await Customer.findOne({ customer_phone }).exec()
            if (duplicateCustomer) throw ({
                code: 400,
                status: 'fail',
                message: 'An account with the same phone number already exist.'
            })
            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(password, salt)
            const customer = new Customer({
                customer_name,
                customer_phone,
                customer_address,
                password: hashedPassword,
            })

            const result = await customer.save()
            res.status(200)
            res.json({
                status: 'success',
                data: result._id
            })
        } catch (err) {
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

    export const login = async (req, res) => {
        try {
            const customer_phone = req.body.customer_phone
            if (!customer_phone) throw ({
                code: 400,
                status: 'fail',
                message: '`customer_phone` is required.'
            })
            const password = req.body.password
            if (!password) throw ({
                code: 400,
                status: 'fail',
                message: '`password` is required.',
            })

            const customer = await Customer.findOne({ customer_phone }).exec()
            if (!customer) throw ({
                code: 401,
                status: 'fail',
                message: 'Customer does not exist.',
            })

            const isLoginSuccessful = await bcrypt.compare(password, customer.password)
            if (isLoginSuccessful) {
                const accessToken = jwt.sign({
                    id: customer._id,
                }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })
                const refreshToken = jwt.sign({
                    id: customer._id
                }, process.env.REFRESH_TOKEN_SECRET)

                await Customer.findByIdAndUpdate(customer._id, { token: refreshToken })

                res.status(200)
                res.cookie('token', 'Bearer ' + accessToken, { httpOnly: true })
                res.cookie('refreshToken', refreshToken)
                res.json({
                    status: 'success',
                    data: {
                        customer_id: customer._id,
                        token: 'Bearer ' + accessToken
                    },
                }) 
            } else {
                throw ({
                    code: 401,
                    status: 'fail',
                    message: 'Incorrect password.',
                })
            }
        } catch (err) {
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