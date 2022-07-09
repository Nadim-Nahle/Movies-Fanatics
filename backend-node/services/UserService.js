const User = require('../models/user')

//REGISTER SERVICE
async function addUser(body, hashPassword){
    const {
        name,
        email,
        username,

    } = body;

    const user = new User({
        name,
        email,
        username,
        password: hashPassword
    })
    
    return await user.save();
}

//LOGIN SERVICE
async function getByEmail(email) {
    return await User.findOne({
      email
    });
  }

module.exports = {
    addUser,getByEmail
}

