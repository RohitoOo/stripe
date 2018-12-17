import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route ,Switch } from 'react-router-dom'

import Stripe from './components/Stripe.js'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
        <Switch>
          <Route path="/" component={Stripe}/>
        </Switch>
        </div>
      </BrowserRouter>
    
    );
  }
}

export default App;
