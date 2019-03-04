import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'


const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " style={{ height: "5rem" }}>
                <Link onClick={props.homePage} className="navbar-brand logo" to="/">Safer <span className="secure">Zone</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fas fa-shield-alt secure-mobile-icon"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/appointment">About Us </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;