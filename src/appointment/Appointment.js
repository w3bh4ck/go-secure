import React, { Component } from 'react'
import Form1 from './Form1';
import './Appointment.css'
import Form2 from './Form2';
import { toast } from 'react-toastify';
import firebase from 'firebase/app'
import 'firebase/firestore'
import axios from 'axios'


var config = {
    apiKey: "AIzaSyDpPXnOMOc3441RnDqiT7yj4Q4GesuoQl8",
    authDomain: "saferzone-pie.firebaseapp.com",
    databaseURL: "https://saferzone-pie.firebaseio.com",
    projectId: "saferzone-pie",
    storageBucket: "saferzone-pie.appspot.com",
    messagingSenderId: "190691065895"
};

firebase.initializeApp(config);


// Initialize Firebase
// TODO: Replace with your project's customized code snippet
//   var config = {
//     apiKey: "<API_KEY>",
//     authDomain: "<PROJECT_ID>.firebaseapp.com",
//     databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//     projectId: "<PROJECT_ID>",
//     storageBucket: "<BUCKET>.appspot.com",
//     messagingSenderId: "<SENDER_ID>",
//   };
//   firebase.initializeApp(config);


class Appointment extends Component {
    constructor() {
        super();
        this.state = {
            form: 1,
            yourName: "",
            yourPhone: "",
            clientName: "",
            clientPhone: "",
            clientAddress: ""
        }
        this.ref = firebase.firestore().collection('saferzone');
    }



    nextForm = e => {
        if (this.state.form < 2 && this.state.yourName.length > 1 && this.state.yourPhone.length > 6) {
            this.setState({
                form: 2
            })
        }
    }

    previousForm = e => {
        if (this.state.form > 1) {
            this.setState({
                form: 1
            })
        }
    }

    onYourNameChange = e => {
        this.setState({
            yourName: e.target.value
        })
    }

    onYourPhoneChange = e => {
        this.setState({
            yourPhone: e.target.value
        })
    }

    onClientNameChange = e => {
        this.setState({
            clientName: e.target.value
        })
    }

    onClientPhoneChange = e => {
        this.setState({
            clientPhone: e.target.value
        })
    }

    onClientAddressChange = e => {
        this.setState({
            clientAddress: e.target.value
        })
    }

    onSubmitEntry = e => {
        e.preventDefault();
        const { yourName, yourPhone, clientName, clientAddress, clientPhone } = this.state;
        // console.log(this.state);
        // this.ref.add({
        //     yourName,
        //     yourPhone,
        //     clientName,
        //     clientAddress,
        //     clientPhone
        // }).then((docRef) => {
        //     console.log(docRef);
        // })
        //     .catch((error) => {
        //         console.error("Error adding document: ", error);
        //     });

        axios.post('https://saferzone-pie.firebaseio.com/bookings.json', {
            name: yourName,
            phone: yourPhone,
            clientName: clientName,
            clientAddress: clientAddress,
            clientPhone: clientPhone
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="appointment">
                <div className="row">
                    <div className="col-md-4 offset-md-4 form-section">
                        {this.state.form === 1 &&
                            <Form1
                                nextForm={this.nextForm}
                                onYourNameChange={this.onYourNameChange}
                                onYourPhoneChange={this.onYourPhoneChange}
                            />}
                        {this.state.form === 2 &&
                            <Form2
                                previousForm={this.previousForm}
                                nextForm={this.nextForm}
                                onClientNameChange={this.onClientNameChange}
                                onClientPhoneChange={this.onClientPhoneChange}
                                onClientAddressChange={this.onClientAddressChange}
                                onSubmitEntry={this.onSubmitEntry}
                            />}
                    </div>
                </div>
            </div>
        )
    }
}


export default Appointment;