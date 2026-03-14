const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

dotenv.config()

const app = express()

// connect database
connectDB()

// middlewares
app.use(cors())
app.use(express.json())

// routes
app.use("/api/notes", require("./routes/noteRoutes"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`)
})