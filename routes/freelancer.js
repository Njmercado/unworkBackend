const express = require('express');
const router = express.Router();

const freelancer = require('../model/schemas/freelancer.js')
const business = require('../model/schemas/business.js')

/* GET users listing. */
router.get('/one', function(req, res, next) {
  
  const worker = req.query.freelancer

  freelancer.findById(worker).then(result => {
    
    if (result) {
      res.send(result) 
    }else{
      res.status(404).send("user do not exist")
    }
  })
}).get('/', (req, res, next) => {

  freelancer.find().then(freelancer => {
    if (freelancer) res.send(freelancer) 
    else res.send("error: ")
  })
}).post('/', (req, res, next) => {
   
  const name = req.query.name
  const email = req.query.email
  const description = req.query.description
  const password = req.query.password
  const credit_card = req.query.credit_card
  const contact = req.query.contact
  const id = req.query.id

  const freelance = new freelancer({
    _id: id,
    name: name,
    email: email, 
    description: description,
    password: password,
    credit_card: credit_card,
    contact: contact,
  })

  freelance.save(function(error){
    if(error){
      console.log("error ", error)
    }else{
      res.send("freelancer created succesfully")
    }
  })
});

module.exports = router;
