import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';
import Landing from '../landing/Landing';

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Landing />
            </div>
        )
    }
}


export default Layout;