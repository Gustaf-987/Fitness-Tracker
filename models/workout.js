const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: true,
    },
    exercises: {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
        trim: true,
        required: "Exercise is required"
    },
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;