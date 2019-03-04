import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ height: "5rem" }}>
                <Link onClick={props.homePage} className="navbar-brand logo" to="/">Go <span className="secure">Secure</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars secure-mobile-icon"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/about">About Us </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;