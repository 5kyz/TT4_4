import jwt from 'jsonwebtoken';
import { Customer } from '../models/loans.js';

const authenticateToken = (req, res, next) => {
    try {
        const cookies = req.cookies
        const token = cookies.token && cookies.token.split(' ')[1]
        if (!token) throw ({
            code: 401,
            status: 'fail',
            message: 'Missing authentication token.',
        })
        const refreshToken = cookies.refreshToken
        if (!refreshToken) throw ({
            code: 401,
            status: 'fail',
            message: 'Missing refresh token.',
        })

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
            if (err) {
                const userPayload = await verifyRefreshToken(refreshToken)
                if (!userPayload) throw ({
                    code: 403,
                    status: 'fail',
                    message: 'Unauthorized.',
                })
                req.user = userPayload
                const authTokenNew = generateAuthToken(userPayload)
                res.cookie('token', 'Bearer ' + authTokenNew, { httpOnly: true })
            } else {
                req.user = user
            }
            next()
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

const generateAuthToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })
}

const verifyRefreshToken = (refreshToken) => new Promise((resolve) => {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
        if (err) resolve(null)
        const userInDB = await Customer.findById(user.id)
        if (!userInDB || userInDB.refreshToken != refreshToken) resolve(null)
        const userPayload = {
            id: user.id
        }
        return resolve(userPayload)
    })
})

export default authenticateToken