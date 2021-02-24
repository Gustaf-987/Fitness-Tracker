const path = require("path");
const db = require("../models");
const router = require("express").Router();


router.get("/api/workouts", function(req, res) {
    db.Workout.find({})
        .then(function(results) {
            console.log(results);
            res.json(results);
        }).catch(err => res.json(err))
})

router.post("/api/workouts", function(req, res) {
    db.Workout.create({})
        .then(function(results) {
            res.json(results);
        }).catch(err => res.json(err))
})






module.exports = router;