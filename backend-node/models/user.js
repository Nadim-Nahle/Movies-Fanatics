
const mongoose = require('mongoose');

//USER SCHEMA
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  Role:{
    type: Number,
    default: 0,
    required: true,
  }
  

});



module.exports = mongoose.model('user', userSchema);
