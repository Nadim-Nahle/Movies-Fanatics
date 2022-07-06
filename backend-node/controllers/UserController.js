const { addUser, getByEmail } = require("../services/UserService");
const User = require("../models/user")
const { all } = require('../app/routes')
require("dotenv").config();
const bcrypt = require(`bcryptjs`);
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const { validationResult } = require("express-validator/check");

//REGISTER CONTROLLER
async function register(req, res) {
    try {
        //VALIDATING NAME,EMAIL,PASSWORD
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

        return res.status(422).jsonp(errors.array());

      } else {

        //ENCRYPT THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        //STORE THE NEW USER
        const addUserResult = await addUser(req.body, hashPassword);
        return res.send({ userId: addUserResult._id });
      }
      //CATCHING ERRORS
    } catch (error) {

      res.status(409).send(error);

    }
  }


//LOGIN CONTROLLER
async function login(req, res) {
    try {

        const user = await getByEmail(req.body.email);
        if (!user) return res.status(401).send('invalid email');
  
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('invalid password');
        
        //CRETAE USER AND JWT TOKEN
        const token = jwt.sign(
        {_id: user._id, name: user.name, email: user.email},
        TOKEN_SECRET

        );

        return res.send({ id: user._id, secret_token: token, role: user.roles });
        
        //CATCHING ERRORS
       } catch (error) {

      //console.log(error);
      res.status(500).send(error);

    }
  }


//UPDATE USER CONTROLLER
async function updateUser(req, res) {
  try{
      const user = await User.findById(req.params.id)
      if(!user){
          return res.status(404).send()
      }
      Object.assign(user, req.body);
      user.save();
      res.send({data:user})
  }
  catch(error){
      res.status(400).send(error.message);
  }
          
}

//GET USER CONTROLLER
async function getUsers(req, res) {
  try{
      const user = await User.find(all)
      if(!user){
          return res.status(404).send()
      }
      res.status(200).send(user)
  }
  catch(error){
      res.status(400).send(error.message);
  }
       
}



//EXPORTING MODULES
module.exports = {
  register,login, updateUser, getUsers
};
