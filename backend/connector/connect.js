const mongoose = require("mongoose")
require('dotenv').config()
const url = process.env.url
const connect = () => {
    return mongoose.connect(url)
}

module.exports = connect