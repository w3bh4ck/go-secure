import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Layout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
