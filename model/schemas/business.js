const mongoose = require('../db.js')
const schema = mongoose.Schema

const businessSchema = new schema({
  _id: {type: String},
  email: 'string',
  works: [{
    type: mongoose.Types.ObjectId, ref:'work'
  }],
  description: 'string',
  credit_card: 'string',
  contact: 'string',
  password: 'string',
}, {_id: false})

const business = mongoose.model('business', businessSchema, 'business')

module.exports = business
