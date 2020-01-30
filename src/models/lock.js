const mongoose = require('mongoose')

const lockSchema = new mongoose.Schema({
  number: {
    type : String,
    required: true
  },
  token: {
    type: String,
    required: true
  }
});

const Lock = mongoose.model('lock', lockSchema)

module.exports = Lock
