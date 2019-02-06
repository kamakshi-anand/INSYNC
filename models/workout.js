const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var DateOnly = require('mongoose-dateonly')(mongoose);

const workoutSchema = new Schema({
  totaltime  : { type: String, required: true },
  calories: { type: Number, required: true },
   date: { type: Date, default:new DateOnly() },

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
