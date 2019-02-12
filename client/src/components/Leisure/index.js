import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
//import API from "../../utils/API";
//import "./style.css";
//import Leisure from "../Leisure";
import cartoon from "./images/cartoonfamily.png";
import family from "./images/family.jpg";
import withson from "./images/withson.jpg";
//import Carousel from 'react-bootstrap/Carousel';
import CarouselPage from "../Carousel/Carousel";
//import ModalPage from "../Modal/index";


class Leisure extends Component {
    state = {
        currentPage: "Leisure",
        
    };

    render() {
        return (
            <React.Fragment>
                <Navbar currentPage={this.state.currentPage}/>
                  
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {/* style="max-width: 18rem; */}
                            <div class="card border-primary mb-3">
                                <CarouselPage></CarouselPage>
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-primary mb-3">
                                <div className="card-header blinking chessGame"><b>Chess Game</b></div>
                                <div className="card-body text-primary">

                                    <iframe src='https://chess-db.com/tactics/embedtactics.jsp' scrolling='no' width='220' height='270'
                                        frameborder='0'></iframe>
                                    <div id="comments">
                                        <p>Rishi says: Hi Dad</p>

                                        <p>Dad says: Your turn!!!</p>

                                        <p>Rishi Says: How about that?</p>

                                    </div>
                                    <label for="comment">Comment:</label>
                                    <input type="text " className="form-control " id="comment" />
                                    <button class="btn-go btn-primary">Go</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-primary mb-3">
                                <div class="card-header blinking worldNews"><b>Family Blog</b></div>
                                <div class="card-body text-primary">
                                    <ul>
                                        <li>Sunday</li>
                                        {/* <ul><a href="#" class="blog"><b>Blog of the day</b></a></ul> */}
                                        <ul><a href="https://docs.google.com/document/d/12UElI2nIPzj6J1eJKDbtdPk6x75TQ43dASTDX66jh74/edit?usp=sharing" target="_blank" class="blog" ><b>Blog of the day</b></a></ul>
                                        <li>Monday</li>
                                        <ul><a href="#" class="blog"><b>Blog of the day</b></a></ul>
                                        <li>Tuesday</li>
                                        <ul><a href="#" class="blog"><b>Recipe of the day</b></a></ul>
                                        <li>Wednesday</li>
                                        <ul><a href="#" class="blog"><b>Blog of the day</b></a></ul>
                                        <li>Thursday</li>
                                        <ul><a href="#" class="blog"><b>Blog of the day</b></a></ul>
                                        <li>Friday</li>
                                        <ul><a href="#" class="blog"><b>Blog of the day</b></a></ul>
                                        <li>Saturday</li>
                                        <ul><a href="#" class="blog"><b>Blog of the day</b></a></ul>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </React.Fragment >
        );
    }
}

export default Leisure;