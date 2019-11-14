const mongoose = require("mongoose")

const uri = "mongodb://localhost/unwork"

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', console.log.bind("ha ocurrido un error con la conección"))
db.once('open', function(){
  console.log("db connection has been succesfull")
})

module.exports = mongoose
