import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import clock from "./images/clock-text.png";
import "./Navbar.css";
//require("react-bootstrap/ModalHeader");


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
                        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".\leisure">Leisure</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".\exercise">Health-Exercise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href=".\chat">Chat</a>
                    </li>
                </ul>
                <span className="navbar-text">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#vitalModal">Vitals<i
                        className="fa fa-heart"></i></button>
                </span>
                
            </div>
        </nav>
        
    );

}




export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/exercise"
//           className={window.location.pathname === "/exercise" ? "nav-link active" : "nav-link"}
//         >
//           Health and Exercise
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/leisure"
//           className={window.location.pathname === "/leisure" ? "nav-link active" : "nav-link"}
//         >
//           Leisure
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/chat"
//           className={window.location.pathname === "/chat" ? "nav-link active" : "nav-link"}
//         >
//           Chat
//         </Link>
//       </li>
//       {/* <li className="nav-item">
//         <Link
//           to="/learn"
//           className={window.location.pathname === "/learn" ? "nav-link active" : "nav-link"}
//         >
//           Learn
//         </Link>
//       </li> */}
//     </ul>
//   );
// }

// export default Navbar;
