const db = require("../models");

// Defining methods for the booksController
module.exports = { 
  create: function(req, res) {
  // console.log("I am in Books controller "+req.body.pageCount);
    db.Workout.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   remove: function(req, res) {
//     console.log("**** Remove Bookd "+req.params.id);
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

   findAll: function(req, res) {
    console.log(" I am in Controller FindAll"+req.query);
    db.Workout
      .find(req.query)
      .sort({ date: 'descending' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  

  //loadWorkouts();

};
