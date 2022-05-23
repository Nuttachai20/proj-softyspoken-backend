const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require("cors")

//// routes
const userRoute = require("./Route/userRoute")

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"),
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requestd-With, Content-Type, Accept, Authorization"
        ),
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE"),
        next()
})

app.get("/", (req, res) => {
    console.log("hello world");
    res.status(200).send("hello world")
})

app.use("/user", userRoute)


module.exports = app