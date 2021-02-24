var db = require("../models");
var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
}


// app.get("/api/workouts", function(req, res) {
//     db.Workout.find({}, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//             res.json(data)
//         }
//     })
// });

// app.put("/api/workouts/:id", function({body}, res){
//     db.Workout.create(body)
// })