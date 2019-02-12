//import React from "react";
import React, { Component } from "react";
import goodnight from "./images/goodnight.jpg";
import music from "./images/gn.mp3"



class Goodnight extends Component {
    // state = {
    //     currentPage: "Goodnight",

    // };

    render() {
        return (
            <React.Fragment>

                {/* currentPage={this.state.currentPage} */}

                <div className="container">
                    <br></br>

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-8">

                            <img alt="goodnight" src={goodnight} usemap="#image-map" />
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <audio controls>
                                <source src={music} type="audio/mpeg" />
                                Your browser does not support the audio element.
    
                            </audio>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                    </div>

                </div>
            </React.Fragment>

        );
    }

}

export default Goodnight;