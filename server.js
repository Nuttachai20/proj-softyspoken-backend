const express = require("express")

const configJson = require('./util/config')
const env = process.env.ENV ? process.env.ENV : 'dev'

const config = configJson[env]

const app = express()

app.listen(config.port, () => {
    console.log(`run on port:${config.port}`);
})

