import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import API from "../../utils/API";
//import { List, ListItem } from "../List";
import "./style.css";
import video from "../Exercise/images/20180329_185910.mp4";

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
            currentPage: "Health-Exercise",
            workoutEnded: false,
            workouts: []
        }
        //    this.addOne = this.addOne.bind(this)
        this.end = this.end.bind(this)
        this.timeConverter = this.timeConverter.bind(this)
        this.count = this.count.bind(this)
        this.calCount = this.calCount.bind(this)
        this.startCounter = this.startCounter.bind(this)
        this.save = this.save.bind(this)
        this.loadWorkouts = this.loadWorkouts.bind(this)
    }

    loadWorkouts() {
        API.getWorkouts()
            .then(res =>
                this.setState({ workouts: res.data })
            )
            .catch(err => console.log(err));
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
        //*************************************** */
        this.loadWorkouts();
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
        this.refs.vidRef.play()

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
        this.setState({
            calories: 0,
        });
        this.setState({
            converted: "00:00",
            time: 0
        });
        this.setState({
            workoutEnded: false,
        });
        this.loadWorkouts();

        alert("Workout successfully Saved");
        // alert("Flag is "+ this.state.converted);
    }

    end() {
        //  alert("reset");
        // alert("Flag is "+ this.state.workoutEnded);
        this.setState({
            workoutEnded: true,
        });
        this.setState({
            clockRunning: false,
        });
        this.setState({
            counterType: "end"
        });

        clearInterval(this.interval);
        clearInterval(this.interval1);
        //   alert("Flag is "+ this.state.workoutEnded);
        alert("Flag is " + this.state.workoutEnded);
        this.refs.vidRef.pause();

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
                        <div className="col-md-8"></div>
                        <div className="col-md-4">
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-primary time mb-3 timeElapsed">
                                <div className="card-header">
                                    <div className="row">


                                        {this.state.workoutEnded === true ? (
                                            <div className="col-sm-4">
                                                <button className="btn btn-success" id="btn-save" onClick={() => { this.save() }}> Save</button>
                                            </div>
                                        ) : (
                                                <React.Fragment>
                                                    <div className="col-sm-4">
                                                        <button className="btn btn-primary" id="btn-start" onClick={this.startCounter}>Start
                                                    </button>
                                                    </div>

                                                    <div className="col-sm-4">
                                                        <button className="btn btn-danger" id="btn-end" onClick={this.end}> End</button>
                                                    </div>
                                                </React.Fragment>
                                            )}

                                    </div>
                                </div>
                                {/* include list */}


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
                                <video ref="vidRef" controls width="620" height="240" id="myVideo">
                                    <source src={video} type="video/mp4" autoplay="false" />
                                </video>


                            </div>
                        </div>
                    </div>

                    <br></br>
                    <h4>Saved workouts:</h4>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <div className="card-body text-primary"> */}

                            {this.state.workouts.length ? (
                                <table>
                                    <tr>
                                        <th className="heading">Calories</th>&nbsp;
                                        <th className="heading">Time </th>&nbsp;
                                        <th className="heading">Date</th>&nbsp;
                                    </tr>
                                    {/* <List> */}
                                    {this.state.workouts.map(workout => (
                                        <tr>
                                            <td>{workout.calories}</td>     &nbsp;
                                        <td>{workout.totaltime}</td>    &nbsp;
                                        <td>{workout.date}}</td>     &nbsp;
                                    </tr>


                                    ))}

                                </table>

                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                            {/* </div> */}
                        </div>

                        {/* <div className="col-md-8">
                            <h3>Yoga with friend!!!!</h3>
                            <div className="embed-responsive embed-responsive-21by9">
                                <video controls>
                                    <source src="./images/workout2.mp4" type="video/mp4" autoplay="false" />
                                </video>
                            </div>
                        </div> */}
                    </div>



                    <br />
                    <br />
                    <div className="modal fade" id="vitalModal" role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <h5 className="modal-title">Vitals<i className="fa fa-heart"></i></h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        {/* style="max-width: 28rem;" */}
                                        <div className="card border-primary vitals mb-3" >
                                            <div className="card-header text-light "><b>Vitals</b></div>
                                            <div className="card-body text-primary">
                                                <h5 className="card-title text-muted">Heart Rate / Pulse:</h5>

                                                <p className="card-text blinking text-light">71 BPM</p>
                                                <h5 className="card-title text-muted">Stress Level:</h5>
                                                <p className="card-text blinking text-light">Low</p>
                                                <h5 className="card-title text-muted">Weight:</h5>
                                                <p className="card-text blinking text-light">150 lbs</p>
                                                <h5 className="card-title text-muted">Emotion Level:</h5>
                                                <p className="card-text blinking text-light">Over Excited</p>
                                            </div>
                                        </div>

                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" id="vitalclose" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Exercise;
