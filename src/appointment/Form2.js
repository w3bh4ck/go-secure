import React from 'react'
import Fade from 'react-reveal/Fade'

function Form2(props) {
    return (
        <div>
            <Fade top>
                <form onSubmit={props.onSubmitEntry}>
                    <h3 className="text-center">Client Info</h3>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your info with anyone else.</small>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onChange={props.onClientNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone</label>
                        <input onChange={props.onClientPhoneChange} type="phone" className="form-control" id="exampleInputPassword1" placeholder="Phone number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input onChange={props.onClientAddressChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Address" required />
                    </div>
                    <div className="text-center">
                        <a onClick={props.previousForm} className="previous mr-2">Previous</a>
                        <button type="submit" className="btn btn-primary ml-2">Submit</button>
                    </div>
                </form>
            </Fade>
        </div>
    )
}


export default Form2;