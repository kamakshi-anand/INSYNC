import React from "react";
import clock from "./images/clock-text.png";
import "./Home.css";


const Home = () => (
    <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">InSync</h1>
                <p className="lead">Your connection to family on earth!!!!!</p>
            </div>
        </div>

        <div className="container clockhome">

            <img alt="clock" src={clock} usemap="#image-map" />

            <map name="image-map">


                <area shape="rect" coords="420,80,490,130" alt="Morning" href="/exercise" />
                <area shape="rect" coords="460,290,540,330" alt="Chat" href="./chat.html" />
                <area shape="rect" coords="130,390,180,440" alt="Sun" href="./leisure.html" />
                <area shape="circle" coords="60,120,130,150" alt="Sun" href="./goodnight.html"/>

        </map>
    </div>
    </React.Fragment>

        );
        
export default Home;