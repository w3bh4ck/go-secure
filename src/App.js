import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Landing from './components/landing/Landing';
import Appointment from './appointment/Appointment';
import { ToastContainer } from 'react-toastify';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
