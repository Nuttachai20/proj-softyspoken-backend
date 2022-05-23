require('dotenv').config()

module.exports = {
    dev: {
        env: process.env.NODE_ENV || "dev",
        port: process.env.PORT || 8080
    }
}


