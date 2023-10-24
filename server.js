const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")
const cors = require("cors")
//express app
const app = express()

//logger
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//middleware
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

app.use("/api/workout", workoutRoutes)

//connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and listening on port", process.env.PORT)
    })
  })
  .catch((err) => console.log(err))
