const mongoose = require('../db.js')
const schema = mongoose.Schema

const workSchema = new schema({
  price: 'number',
  long: 'string',
  description: 'string',
  work_experience: 'string',
  freelancers:[
    {type: mongoose.Types.ObjectId, ref: 'freelancer'}
  ],
  tags: [
    {type: String}
  ]
})

const work = mongoose.model('work', workSchema, 'work')

module.exports = work
