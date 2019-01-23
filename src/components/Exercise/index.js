import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

class Exercise extends Component {
    state = {
        currentPage: "Health-Exercise",
        calaroies: 0
        //  page:"Health-Exercise"
        //results: []
    };

    // When this component mounts, search the Giphy API for pictures of kittens
    //componentDidMount is similar to document.getready function.******************************
    //   componentDidMount() {
    //   //  this.searchGiphy("kittens");
    //   }


    //   handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //       [name]: value
    //     });
    //   };
//  Variable that will hold our setInterval that runs the stopwatch
intervalId;
intervalId1;

// prevents the clock from being sped up unnecessarily
 clockRunning = false;

// Our stopwatch object
 stopwatch = {

    time: 0,
    calories: 0,

    reset: function () {

        this.time = 0;
        this.calories = 0;

        // DONE: Change the "display" div to "00:00."
    //    $("#time").text("00:00");

        // DONE: Empty the "laps" div.

    },
    start: function () {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!this.clockRunning) {
            this.intervalId = setInterval(this.stopwatch.count, 1000);
            this.intervalId1 = setInterval(this.stopwatch.calCount, 10000);
            this.clockRunning = true;
        }
        var vid = document.getElementById("myVideo");

        //function playVid() { 
        vid.play();
        // } 
        //   if (!clockRunning) {
        //     intervalId1 = setInterval(stopwatch.calCount, 1000);
        //     clockRunning = true;
        //   }
    },

    stop: function () {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        this.clearInterval(this.intervalId);
        this.clearInterval(this.intervalId1);
        this.clockRunning = false;
    },

    calCount: function () {
        // alert("in cal");
        // DONE: increment time by 1, remember we cant use "this" here.
        this.stopwatch.calories++;

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        //  var converted = stopwatch.timeConverter(stopwatch.time);
        //  console.log(converted);
        // alert(stopwatch.calories);
        // DONE: Use the variable we just created to show the converted time in the "display" div.
    //    $("#calories").text(stopwatch.calories);
    },

    count: function () {

        // DONE: increment time by 1, remember we cant use "this" here.
        this.stopwatch.time++;

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = this.stopwatch.timeConverter(this.stopwatch.time);
        console.log(converted);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
     //   $("#time").text(converted);
    },
    timeConverter: function (t) {
        //alert(t);
        var minutes = Math.floor(t / 60);
        // alert(minutes);
        var seconds = t - (minutes * 60);
        //  alert(seconds);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};


render() {
    return (
        <div>

            <Navbar
                currentPage={this.state.currentPage}
            />

            {/* //call the healthcheck component
//write code to have the treadmill  */}
            <div className="container">
                <h1>Let us sweat it out!!!</h1>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border-primary time mb-3 timeElapsed">
                            <div className="card-header"><button className="btn btn-primary" id="btn-start" onClick={this.stopwatch.start}>Start</button>
                                <button className="btn btn-primary" id="btn-end" onClick={this.stopwatch.start}>End</button>
                            </div>
                            <div className="card-body text-primary">
                                <h5 className="card-title">Time Elapsed: </h5>
                                <p className="card-text" id="time">{this.time}</p>
                                <h5 className="card-title">Calories Burnt:</h5>
                                <p className="card-text " id="calories"></p>
                                <h5 className="card-title">Great going!!!!Keep it up!!!</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h3>Fun run with your son :-)</h3>
                        <div className="embed-responsive embed-responsive-21by9">
                            <video controls width="620" height="240" id="myVideo">
                                <source src="./images/workout1.mp4" type="video/mp4" autoplay="false" />
                            </video>


                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        <h3>Yoga with friend!!!!</h3>
                        <div className="embed-responsive embed-responsive-21by9">
                            <video controls>
                                <source src="./images/workout2.mp4" type="video/mp4" autoplay="false" />
                            </video>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
}

export default Exercise;
