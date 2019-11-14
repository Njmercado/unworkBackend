const express = require('express');
const router = express.Router();

const freelancer = require('../model/schemas/freelancer.js')
const business = require('../model/schemas/business.js')
const work = require('../model/schemas/work.js')

router.get('/', function(req, res, next) {

  const tags =  req.query.tags

  work.find().then(result => {

    if (tags.length == 0) res.send(result) 

    filterResults(tags, result).then(finalResults => {
      res.send(finalResults)
    })
  })
}).post('/', function(req, res, next){

  const price = req.query.price
  const long = req.query.long
  const description = req.query.description
  const enterprise = req.query.enterprise
  const workExperience = req.query.work_experience

  const job = new work({
    description: description,
    price: price,
    long: long,
    work_experience: workExperience
  })

  job.save(function(error){
    if(error){

      console.log("error ", error)
      res.status(404).send("work not created")
    }else{
      res.status(200).send("work created succesfully")
      addWork(enterprise, job._id)
    }
  })
});

const addWork = (enterprise, work_id) => {

  business.findById(enterprise).then(result => {

    result.works.push(work_id)

    result.save(function(err){
      if (err) console.log("error: ", error) 
      else console.log("succesfull")
    })
  })
}

const filterResults =  (tagsToComparte, works) => {

  return Promise((response, reject) => {

    filteredWorks = []

    try {

      works.forEach(element => {

        if (areEqual(tagsToComparte, element.tags)) {

          filteredWorks.push(element) 
        }
      })

    } catch (e) {
      reject("no result found")
    }
  })
}

const areEqual = (subArray, completeArray) => {

  subArray.forEach(element => {

    isElemenInto = false
    
    for (var i = 0; i < completeArray.length; i++) {

      if (element == completeArray[i]) {

        completeArray = completeArray.slice(i,i+1)
        isElementInto = true
        break  
      }
    }

    if (!isElementInto) {
      return false  
    }
  })

  return true 
}

module.exports = router;
