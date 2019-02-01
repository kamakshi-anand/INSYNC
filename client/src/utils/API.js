import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getWorkouts: function(query) {
   // console.log("i am in get books"+query);
    return axios.get("/api/workouts", { params: { q: query } });
  },

  // getBooksFromDB: function(query) {
  //    console.log("i am in get All books");
  //    return axios.get("/api/allbooks", { params: { q: query } });
  //  },

  addWorkout: function(workoutData) {
     console.log("i am in add woorkout in API.js "+workoutData);
     return axios.post("/api/workouts", workoutData);
   },

  //  deleteBook: function(id){
  //    console.log("check delete book "+id);
  //    return axios.delete("/api/books/"+id )
  //  }
   
}; 
