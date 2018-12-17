import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'

class App extends Component {

  onToken(token){
    console.log("Clicked", token)
  }
  render() {
    return (
      <div className="App">
        <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_ruJP16BdItLFkRcf86KGQYvP"
        />
      </div>
    );
  }
}

export default App;
