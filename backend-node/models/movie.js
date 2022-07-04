
const mongoose = require('mongoose');

//MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255,
    unique: true,
  },

  description: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  img: {
    type: String,
  },

  video: {
    type: String,
  },

  year: {
    type: String,
  },

  genre: {
    type: String,
  },

  isSeries: {
    type: Boolean,
    default: false,
  },
  

  
  

});


//EXPORTING SCHEMA
module.exports = mongoose.model('movie', movieSchema);
