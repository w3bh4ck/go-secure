import React from 'react'
import './Pages.css'
import Navbar from '../navbar/Navbar';
import Fade from 'react-reveal/Fade'

const About = () => {
    return (
        <div className="landing">
            <Navbar />
            <div className="container">
                <div className="row">
                    <Fade bottom>
                        <div className="col-md-6 offset-md-3 text-box text-white">
                            <h2 className="text-center">ABOUT</h2>
                            <p className="text-center about-text">
                                If you are meeting a stranger for the first time or anytime you may feel a need to be more secure. We have done this before for each other and will do for you.                        </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}


export default About;