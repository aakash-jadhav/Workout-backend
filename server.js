const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")
const userRoutes = require("./routes/user")
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
app.use(cors())

app.use("/api/workout", workoutRoutes)
app.use("/api/user", userRoutes)

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
