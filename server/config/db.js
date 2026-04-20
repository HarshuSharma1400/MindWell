const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            family: 4
        })

        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.log("Mongo Error:", error)
        process.exit(1)
    }
}

module.exports = connectDB;