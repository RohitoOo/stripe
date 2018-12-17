import React from "react";
import StripeCheckout from "react-stripe-checkout";
const axios = require ('axios')
class Stripe extends React.Component {
    onToken(token){
        console.log("Clicked", token.id)
       fetch('http://localhost:2018/api/stripe', {
         method: 'POST',
         headers: {
           Accept: "application/json",
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           stripeToken: token.id,
         })
        }).then(res =>  res.json())
         .then(json => {
           console.log({json})
         })

      
   
      }
  render() {
    return (
      <div>
          <button onClick={this.onToken}></button>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_ruJP16BdItLFkRcf86KGQYvP"
        />
      </div>
    );
  }
}

export default Stripe;
