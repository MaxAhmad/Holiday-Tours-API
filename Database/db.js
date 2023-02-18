const mongoose = require("mongoose")

const config = require('../config/config')

mongoose.set('strictQuery', false)

exports.connectToDB = () => {
    mongoose.connect(config.MONGOURL)

    mongoose.connection.on('connected', () => {
        console.log('Connected to Database')
    })
}