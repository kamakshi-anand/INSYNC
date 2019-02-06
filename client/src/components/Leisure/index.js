import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
//import API from "../../utils/API";
//import "./style.css";
//import Leisure from "../Leisure";
import cartoon from "./images/cartoonfamily.png";
import family from "./images/family.jpg";
import withson from "./images/withson.jpg";

class Leisure extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        {/* style="max-width: 18rem; */}
                        <div className="card border-primary mb-3">
                            <div className="card-header blinking home"><b>What's happening @Home :-)</b></div>
                            <div className="card-body text-primary">

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={cartoon} alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={family} alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={withson} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"
                                        onclick="$('#myCarousel').carousel('prev')"></a>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>

                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"
                                        onclick="$('#myCarousel').carousel('next')">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <p className="card-text">Hey dad, look what we made for dinner!!!!</p>
                                <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src="images/activity1.jpg" alt="First slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="images/activity2.jpg" alt="Second slide" />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="images/activity3.jpg" alt="Third slide" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button"
                                        data-slide="prev" onclick="$('#myCarousel').carousel('prev')"></a>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>

                                    <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button"
                                        data-slide="next" onclick="$('#myCarousel').carousel('next')">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <p className="card-text">Hey dad, we ran around the park!!!!</p>




                            </div>
                        </div>
                    </div>
                </div>
              
            </React.Fragment >
        );
    }
}

export default Leisure;