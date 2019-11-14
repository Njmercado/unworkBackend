const mongoose = require('../db.js')
const schema = mongoose.Schema

const freelancerSchema = new schema({
  name: 'string',
  email: 'string',
  works: [],
  description: 'string',
  credit_card: 'string',
  contact: 'string',
  _id: 'string'
},{_id: false})

const freelancer = mongoose.model('freelancer', freelancerSchema, 'freelancer')

module.exports = freelancer
