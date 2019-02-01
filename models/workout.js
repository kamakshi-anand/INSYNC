const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  totaltime  : { type: String, required: true },
  calories: { type: Number, required: true },
   date: { type: Date, default: Date.now },

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
