const db = require("../db");
const router = require("express").Router()
    //Display all workouts on workout page
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
//Display all workouts on range page
router.get("/api/workouts/range", ({}, res) => {
    db.Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .sort({ _id: -1 }).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
//Add completed workout to Workout db
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// Edit workout by id (adding more exercise to workout)
router.put("/api/workouts/:id", (req, res) => {
    // console.log(req.params)
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});
module.exports = router;

// const path = require("path");
// const db = require("../db");
// const router = require("express").Router();


// router.get("/api/workouts", function(req, res) {
//     db.Workout.aggregate([{
//             $addFields: {
//                 totalDuration: {
//                     $sum: "$exercises.duration"
//                 }
//             }
//         }])
//         .then(function(data) {
//             res.json(data);
//         })
//         .catch(function(err) {
//             res.json(err);
//         })
// })

// router.get("/api/workouts/range", function(req, res) {
//     db.Workout.aggregate([{
//             $addFields: {
//                 totalDuration: {
//                     $sum: "$exercises.duration"
//                 }
//             }
//         }])
//         .sort({
//             __id: -1
//         })
//         .limit(7)
//         .then(function(data) {
//             res.json(data);
//         })
//         .catch(function(err) {
//             res.json(err);
//         })

// })

// router.post("/api/workouts", function(req, res) {
//     db.Workout.create(req.body)
//         .then(function(results) {
//             res.json(results);
//         }).catch(err => res.json(err))
// })

// router.put("/api/workouts/:id", function(req, res) {
//     db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
//         .then(function(results) {
//             // console.log(results);
//             res.json(results);
//         }).catch(err => res.json(err))
// })

// //html Routes
// // router.get("/", function(req, res) {
// //     res.sendFile(path.join(__dirname, "../public/index.html"))
// // });

// // router.get("/stats", function(req, res) {
// //     res.sendFile(path.join(__dirname, "../public/stats.html"))
// // });

// // router.get("/exercise", function(req, res) {
// //     res.sendFile(path.join(__dirname, "../public/exercise.html"))
// // })


// module.exports = router;