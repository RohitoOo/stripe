const stripe = require("stripe")('pk_test_ruJP16BdItLFkRcf86KGQYvP')

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

var cors = require('cors');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// Cors Middleware 

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.get('/api/stripe', (req,res) => {

//     const token = req.body.token
//     res.send({
//         message : token
//     })
// })

app.post('/api/stripe', (req,res) => {

    console.log("Token", req.body.stripeToken)
    const token = req.body.stripeToken
 
    res.send({
        message : "Success"
    })
})

// const token = request.body.stripeToken; // Using Express

// const charge = stripe.charges.create({
//     amount: 100,
//     currency: 'usd',
//     description: 'Example charge',
//     source: token,
//     metadata: {order_id: 6735},
//   });

const port = 2018

app.listen(port, () => {
    console.log("We are Live on Port ", port)
})