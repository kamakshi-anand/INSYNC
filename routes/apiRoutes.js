const axios = require("axios");
const path = require("path");
const router = require("express").Router();
const key="AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U";
const workoutController = require("../controllers/workoutController");
const User = require('../models/User.js');

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// router.get("/books", (req, res) => {  
//   const URL = "https://www.googleapis.com/books/v1/volumes?q="+req.query.q+"&key=AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U"
// //const URL = "https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U"
//   console.log("I am in Node" + URL);
//   axios
//   .get(URL)
//   .then(({ data: { items } }) => res.json(items))
//   .catch(err => res.status(422).json(err));
// });

// // router.get("/api/allbooks", (req, res) => {   
// //   booksController.findAll
// //   .then(({ data: { items } }) => res.json(items))
// //   .catch(err => res.status(422).json(err));
// // });

router.route("/workouts") 
  .get(workoutController.findAll);
  console.log("i am in api routes");

router.route("/workouts") 
  .post(workoutController.create);

  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      password
    } = body;
    let {
      email
    } = body;
    
    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }
    email = email.toLowerCase();
    email = email.trim();
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.'
        });
      }
      // Save the new user
      const newUser = new User();
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        });
      });
    });
  });

  
  // router
  // .route("/books/:id")
  // .delete(booksController.remove);

module.exports = router;
