

console.log("Starting server...");
require('dotenv').config();
console.log("PORT:", process.env.PORT);
console.log("MONGO URI:", process.env.MONGO_URI);
const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')
const port = process.env.PORT
const phq9Routes = require('./routes/phq9Routes')
const userRoutes = require('./routes/userRoute')



connectDB()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.use('/phq9', phq9Routes);
app.use('/user', userRoutes)

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(res.statusCode || 500).json({
    message: err.message,
  });
});

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})
