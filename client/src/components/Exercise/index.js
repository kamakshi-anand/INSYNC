import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import API from "../../utils/API";
//import { List, ListItem } from "../List";
import "./style.css";
import video from "../Exercise/images/workout1.mp4";
//import ModalPage from "../Modal/index";

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
            today: null,
            formattedDate: null,
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
        //   this.getToday = this.getToday.bind(this)
        this.formatDate = this.formatDate.bind(this)
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
        //   this.getToday();
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

    // getToday() {
    //     var today = new Date();
    //     var dd = today.getDate();
    //     var mm = today.getMonth() + 1; //January is 0!
    //     var yyyy = today.getFullYear();
    //     //   alert(today);

    //     if (dd < 10) {
    //         dd = '0' + dd;
    //     }

    //     if (mm < 10) {
    //         mm = '0' + mm;
    //     }

    //     today = mm + '/' + dd + '/' + yyyy;
    //     //alert(today);
    //     this.setState({ today: today });
    // }

    formatDate(inputDate) {

        var savedDate = new Date(inputDate.date);

        var dd = savedDate.getDate();
        var mm = savedDate.getMonth() + 1; //January is 0!
        // alert("date is " + dd);
        var yyyy = savedDate.getFullYear();
        //   alert(today);

        // if (inputDate < 10) {
        //     inputDate = '0' + inputDate;
        // }

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        savedDate = mm + '/' + dd + '/' + yyyy;
        //alert(today);
        return savedDate;
        //  this.setState({ formattedDate: savedDate });
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
         //   date: this.state.today
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
                        <div className="col-md-4"></div>
                        
                    </div>
                    <br />
                    <br />
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


                                <div className="card-body text-danger">
                                    <h5 className="card-title">Time Elapsed: </h5>
                                    <p className="card-text" id="time">{this.state.converted}</p>
                                    <h5 className="card-title">Calories Burnt:</h5>
                                    <p className="card-text " id="calories">{this.state.calories}</p>
                                    <h5 className="card-title">Great going!!!!Keep it up!!!</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <h3 className="title">Fun run with kids :-)</h3>
                            <div className="embed-responsive embed-responsive-21by9">
                                <video ref="vidRef" controls width="620" height="240" id="myVideo">
                                    <source src={video} type="video/mp4" autoplay="false" />
                                </video>


                            </div>
                        </div>
                    </div>

                    <br></br>
                    <h4 className= "title">Workout History:</h4>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <div className="card-body text-primary"> */}

                            {this.state.workouts.length ? (
                                <table>
                                    <tr className= "text">
                                        <th className="heading">Calories Burnt</th>&nbsp;
                                        <th className="heading">Total Time </th>&nbsp;
                                        <th className="heading">Date</th>&nbsp;
                                    </tr>
                                    {/* <List> */}
                                    {this.state.workouts.map(workout => (
                                        <tr className="text">
                                            <td>{workout.calories}</td> &nbsp;
                                        {/* {this.renderDate({workout.totaltime})} */}
                                            {/* { this.formatDate(workout)} */}
                                            {/* {this.formatDate({workout.totaltime})} */}
                                            <td>{workout.totaltime}</td> &nbsp;
                                            <td>{this.formatDate(workout)}</td> &nbsp;
                                    </tr>


                                    ))}

                                </table>

                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                            {/* </div> */}
                        </div>

                        {/* <div className="col-md-8">
                            <h3>Vitals and Nutrition!!!!</h3>
                            <ModalPage> </ModalPage>
                        </div> */}
                    </div>



                    <br />
                    <br />

                </div>
            </div>
        );
    }
}

export default Exercise;
