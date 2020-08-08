var router = require("express").Router();
var Workout = require("../models/workout.js");

router.post("/api/workouts", function(req, res){
    Workout.create(req.body)
    .then(function(workout){
        res.send(workout) 
    })
})

router.get("/api/workouts", function(req, res){
    Workout.find({})
    .then(function(workout){
        res.send(workout)
    })
})

router.put("/api/workouts/:id", function(req, res){
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})
    .then(function(workout){
        res.send(workout)
    })
})

router.get("/api/workouts/range", function(req, res){
    Workout.find({}).limit(7)
    .then(function(workout){
        res.send(workout)
    })
})

module.exports = router;

