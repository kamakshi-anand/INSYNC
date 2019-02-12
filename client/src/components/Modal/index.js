import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
    state = {

        modal7: false,
        modal8: false

    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return (
            <React.Fragment>
                <MDBContainer>

                    <MDBBtn color="secondary" onClick={this.toggle(7)}>Vitals</MDBBtn>
                    <MDBModal isOpen={this.state.modal7} toggle={this.toggle(7)} side position="bottom-left">
                        <MDBModalHeader toggle={this.toggle(7)}>VITALS</MDBModalHeader>
                        <MDBModalBody>
                            {/* <div class="card-body text-primary">
                                <h5 class="card-title text-muted">Heart Rate / Pulse:</h5>
                             
                                <p class="card-text blinking text-light">71 BPM</p>
                                <h5 class="card-title text-muted">Stress Level:</h5>
                                <p class="card-text blinking text-light">Low</p>
                                <h5 class="card-title text-muted">Weight:</h5>
                                <p class="card-text blinking text-light">150 lbs</p>
                                <h5 class="card-title text-muted">Emotion Level:</h5>
                                <p class="card-text blinking text-light">Over Excited</p>
                            </div> */}
                            <p>Test</p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(7)}>Close</MDBBtn>

                        </MDBModalFooter>
                    </MDBModal>

                    <MDBBtn color="secondary" onClick={this.toggle(8)}>Nutrition</MDBBtn>
                    <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} side position="bottom-left">
                        <MDBModalHeader toggle={this.toggle(8)}>NUTRITION</MDBModalHeader>
                        <MDBModalBody>
                            {/* <div class="card-body text-primary">
                                <h5 class="card-title text-white">Food:</h5>
                                <p class="card-text blinking text-light"><b>1000</b>/2350 Cal</p>
                                <h5 class="card-title text-white">Water:</h5>
                                <p class="card-text blinking text-light"><b>2</b> Glasses</p>
                                <h5 class="card-title text-light">You are on track for you nutritional goals</h5>
                            </div> */}
                            <p>Test</p>

                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>

                        </MDBModalFooter>
                    </MDBModal>


                </MDBContainer>




            </React.Fragment>
        );
    }
}

export default ModalPage;