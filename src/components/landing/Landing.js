import React, { Component } from 'react'
import './Landing.css'
import Navbar from '../navbar/Navbar';
import Appointment from '../../appointment/Appointment';
import TextLoop from "react-text-loop";




class Landing extends Component {
    constructor(props) {
        super();
        this.state = {
            onAppointment: false
        }
    }

    openAppointment = e => {
        this.setState({
            onAppointment: !this.state.onAppointment
        })
    }

    render() {
        return (
            <div className="landing">
                <Navbar homePage={this.openAppointment} />
                {!this.state.onAppointment && <div className="container">
                    <div className="lead-text text-center">
                        <h1>Safer <span className="secure">
                            <TextLoop interval={1800}
                                springConfig={{ stiffness: 70, damping: 31 }}
                                adjustingSpeed={500}
                            >
                                <span>Zone</span>
                                <span>Date</span>
                                <span>Work</span>
                                <span>Friendship</span>
                            </TextLoop>
                        </span></h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 text-center">
                            <button onClick={this.openAppointment} className="btn btn-lg bt-block btn-make-entry text-white ">
                                Make Entry
                        </button>
                        </div>
                    </div>
                </div>}

                {this.state.onAppointment && <div className="appointment">
                    <Appointment />
                </div>}
            </div >
        )
    }
}

export default Landing;