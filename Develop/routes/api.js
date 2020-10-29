const router = require("express").Router();
const { query } = require("express");
///Workout is a mongoose Schema which originates from models/index.js
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", ({ query }, res) => {
  Workout.find({ day: { $gte: query.start, $lte: query.end } })
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});
router.post("/api/workouts/", (req, res) => {
  Workout.create({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;
