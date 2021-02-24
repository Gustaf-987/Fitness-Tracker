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

router.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
        .then(function(results) {
            console.log(results);
            res.json(results);
        }).catch(err => res.json(err))
})

router.post("/api/workouts", function(req, res) {
    db.Workout.create(req.body)
        .then(function(req, res) {
            res.json(results);
        }).catch(err => res.json(err))
})

router.put("/api/workouts/:id", function(req, res) {
    db.Workout.update({ id: req.params.id }, { $push: { exercises: req.body } })
        .then(function(results) {
            console.log(results);
            res.json(results);
        }).catch(err => res.json(err))
})

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})


module.exports = router;