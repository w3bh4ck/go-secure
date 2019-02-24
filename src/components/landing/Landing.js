import React from 'react'
import './Landing.css'
import Navbar from '../navbar/Navbar';

const Landing = () => {
    return (
        <div className="landing">
            <Navbar />
            <div className="container">
                <div className="lead-text text-center">
                    <h1>Go <span className="secure">Secure</span></h1>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-md-4 text-center btn-make-entry">
                        <button className="btn btn-lg bt-block text-white ">
                            Make Entry
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Landing;