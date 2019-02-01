import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import API from "../../utils/API";

class Exercise extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            clockRunning: false,
            time: null,
            calories: null,
            converted: null,
            counterType: null,
            currentPage: "Health-Exercise"
        }
        //    this.addOne = this.addOne.bind(this)
        this.end = this.end.bind(this)
        this.timeConverter = this.timeConverter.bind(this)
        this.count = this.count.bind(this)
        this.calCount = this.calCount.bind(this)
        this.startCounter = this.startCounter.bind(this)

    }

    componentDidMount() {

        this.interval = setInterval(() => {
            if (this.state.counterType === 'start') {
                this.count();
            }
        }, 1000);

        this.interval1 = setInterval(() => {
            if (this.state.counterType === 'start') {
                this.calCount();
            }
        }, 15000);
    }

    startCounter() {
        if (this.state.counterType === 'end') {
            this.interval = setInterval(() => {
                this.count();
            }, 1000);

            this.interval1 = setInterval(() => {
                this.calCount();
            }, 15000);
        }
        this.setState({ counterType: 'start' })
    }
    componentDidUpdate(nextProps, nextState) {

    }

    timeConverter(t) {
        //    alert(t);
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

    count() {

        this.setState({ time: this.state.time + 1 });
        this.setState({ converted: this.timeConverter(this.state.time) });
    }

    calCount() {
       // alert("in count");
        this.setState({
            calories: this.state.calories + 1
        })
    }

    save(event) {
      //    event.preventDefault();
       // alert("I am in ");
         // if (this.state.calories && this.state.time) {
              API.addWorkout({
                  calories: this.state.calories,
                  totaltime: this.state.converted,
                 // synopsis: this.state.synopsis
              })
                  //.then(res => this.loadBooks())
                  .catch(err => console.log(err));
         // }
      }

    end() {
        //  alert("reset");
        this.setState({
            // counterType:null,  
            // time:0,
            // converted:'00:00',
            clockRunning: false,
            counterType: "end"
            //  calories:0

        })
        clearInterval(this.interval);
        clearInterval(this.interval1);

    }

    
    



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
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <button className="btn btn-primary" id="btn-start" onClick={this.startCounter}>Start
                                                    </button>
                                        </div>
                                        {/* <button onClick={() => this.setState({counter:'simplest'})}  >Simplest</button> */}
                                        <div className="col-sm-4">
                                            <button className="btn btn-danger" id="btn-end" onClick={this.end}> End</button>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn btn-success" id="btn-save" onClick={() => {this.save()}}> Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body text-primary">
                                    <h5 className="card-title">Time Elapsed: </h5>
                                    <p className="card-text" id="time">{this.state.converted}</p>
                                    <h5 className="card-title">Calories Burnt:</h5>
                                    <p className="card-text " id="calories">{this.state.calories}</p>
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
