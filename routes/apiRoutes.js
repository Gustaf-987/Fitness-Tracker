const path = require("path");
const db = require("../models");
const router = require("express").Router();


router.get("/api/workouts", function(req, res) {
    db.Workout.find({})
        .then(function(results) {
            res.json(results);
        })
})






module.exports = router;