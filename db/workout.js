const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: "Date is Required"
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
});

// const workoutSchema = new Schema({
//     day: {
//         type: Date,
//         default: Date.now,
//         // required: true,
//     },
//     exercises: [{
//         type: { type: String },
//         name: String,
//         duration: Number,
//         weight: Number,
//         reps: Number,
//         sets: Number,
//         distance: Number,
//         // trim: true,
//         // required: "Exercise is required"
//     }],
// })

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;