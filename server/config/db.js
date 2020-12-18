const mongoose = require('mongoose')
require('dotenv').config()

module.exports = Connect = async () => {
    try {
        const response = await mongoose.connect(process.env.mongo_url)
        console.log('DB connected')
    } catch (error) {
        console.log(error)
    }
}
