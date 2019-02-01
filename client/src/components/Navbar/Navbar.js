import React from "react";
//import clock from "./images/clock-text.png";
import "./Navbar.css";

function Navbar(props) {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{props.currentPage}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".\leisure.html">Leisure</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".\health-exercise.html">Health-Exercise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".\chat.html">Chat</a>
                    </li>
                </ul>
                <span className="navbar-text">

                </span>
            </div>
        </nav>
        
    );

}




export default Navbar;