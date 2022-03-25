const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const { Customer } = require('../models')