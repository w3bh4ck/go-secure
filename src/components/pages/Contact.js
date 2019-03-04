import React from 'react'
import Navbar from '../navbar/Navbar'

export default function Contact() {
    return (
        <div className="landing">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-box text-white">
                        <h2 className="text-center">Contact</h2>
                        <p className="text-center about-text">
                            Phone: 416 875 3370.
                            Mail: truthfuladellapierre@gmail.com
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
