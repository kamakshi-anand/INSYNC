import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";



class Chat extends Component {
    state = {
        currentPage: "Chat",

    };


    render() {
        return (
            <React.Fragment>

                <Navbar currentPage={this.state.currentPage} />



                <div className="container">
                <br></br>
                    <div className="row">
                    <br></br>
                        <div className="col-md-6">
                            {/* <div className="card border-primary mb-3" style="max-width: 48rem;"> */}
                            <div className="card border-primary mb-3">
                                <div className="card-header"><b>Chat-Box</b></div>
                                <div className="card-body text-primary">


                                    <div id="comments">
                                        <p>Kid says: Hi Dad</p>

                                        <p>Dad says: Your turn!!!</p>

                                        <p>Kid Says: How about that?</p>

                                    </div>
                                    <label for="comment">Comment:</label>
                                    <input type="text " className="form-control " id="comment" />
                                    <button className="btn-dad btn-primary">Dad</button>
                                    <button className="btn-kid btn-primary">Kid</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}


export default Chat;