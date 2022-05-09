const configJson = require('./util/config')
const env = process.env.ENV ? process.env.ENV : 'dev'
const mongoose = require('./util/database')

const app = require('./app')

const config = configJson[env]

app.listen(config.port, () => {
    console.log(`Server is running on Port:${config.port}`);
})

