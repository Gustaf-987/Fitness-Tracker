const path = require("path");
const db = require("../models");
const router = require("express").Router();


router.get("/api/workouts", function(req, res) {
    db.Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
})

router.get("/api/workouts/range", function(req, res) {
    db.Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .sort({
            __id: -1
        })
        .limit(7)
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })

})

router.post("/api/workouts", function(req, res) {
    db.Workout.create(req.body)
        .then(function(results) {
            res.json(results);
        }).catch(err => res.json(err))
})

router.put("/api/workouts/:id", function(req, res) {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(function(results) {
            console.log(results);
            res.json(results);
        }).catch(err => res.json(err))
})

//html Routes
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