const express = require("express")
const router = express.Router()
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController")

const requireAuth = require("../middleware/requireAuth")

//requrie auth for all workout routes
router.use(requireAuth)
//Get All workout
router.get("/", getWorkouts)

//Get single workout
router.get("/:id", getWorkout)

//Post new workout
router.post("/", createWorkout)

//Delete new workout
router.delete("/:id", deleteWorkout)

//Update new workout
router.patch("/:id", updateWorkout)

module.exports = router
