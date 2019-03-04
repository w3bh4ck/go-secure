import React from 'react'
import Fade from 'react-reveal/Fade'


export default function Form1(props) {
    return (
        <div>
            <Fade bottom>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    props.nextForm();
                }}>
                    <h3 className="text-center">Your Info</h3>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your info with anyone else.</small>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onChange={props.onYourNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input onChange={props.onYourPhoneChange} type="phone" className="form-control" id="exampleInputPassword1" placeholder="Your phone number" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Continue</button>
                    </div>
                </form>
            </Fade>
        </div>
    )
}
