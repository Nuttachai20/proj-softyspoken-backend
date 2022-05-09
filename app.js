const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





module.exports = app