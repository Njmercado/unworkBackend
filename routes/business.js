const express = require('express');
const router = express.Router();
const freelancer = require('../model/schemas/freelancer.js')
const business = require('../model/schemas/business.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("hola")
}).post('/', function(req, res, next){
  
  const name = req.query._id
  const email = req.query.email
  const description = req.query.description
  const password = req.query.password
  const credit_card = req.query.credit_card
  const contact = req.query.contact

  const busi = new business({
    _id: name,
    email: email, 
    description: description,
    password: password,
    credit_card: credit_card,
    contact: contact,
  })

  busi.save(function(error){
    if(error){

      console.log("error ", error)
      res.status(404).send("this enterprise already exist")
    }else{
      res.send("enterprise created succesfully")
    }
  })

});

module.exports = router;
