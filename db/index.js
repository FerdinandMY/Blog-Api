const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, })
    console.log("Mongoose connected")
}
module.exports = { connectDB }

