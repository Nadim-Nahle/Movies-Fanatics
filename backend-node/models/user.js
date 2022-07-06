
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
    min: [6, 'please choose a stronger password'],
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  roles: {
    type: [{
        type: String,
        enum: ['user', 'admin']
    }],
    default: ['user']
},

isPremium:{
  type: Boolean,
  default: false
},

photo:{
  type: String,
}
  

});


//EXPORTING SCHEMA
module.exports = mongoose.model('user', userSchema);
