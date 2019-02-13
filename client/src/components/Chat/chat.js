import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";



class Chat extends Component {
    // state = {
    //     currentPage: "Chat",

    // };

    constructor(props) {
        super(props)
        this.state = {
            currentPage: "Chat",
            comments: ["Hi Dad", "Hi Son"],
            comment:""

        }
        this.updateComment = this.updateComment.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }


    updateComment() {
        // this.setState({ counterType: 'start' })
        this.setState({ comments: this.state.comments.concat(this.state.comment) });

    }

    handleInputChange = event => {
     //   alert("Calling");
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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

                                        {this.state.comments.map(comment => (
                                            <p><b>{comment}</b></p>
                                        ))}

                                    </div>
                                    <label for="comment">Message:</label>
                                    <input type="text " className="form-control " name="comment" onChange={this.handleInputChange} />
                                    <button className="btn-dad btn-primary" onClick={this.updateComment}>Send</button>
                                    {/* <button className="btn-kid btn-primary">Kid</button> */}

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