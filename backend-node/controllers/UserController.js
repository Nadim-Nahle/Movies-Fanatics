const { addUser, getByEmail } = require("../services/UserService");
require("dotenv").config();
const bcrypt = require(`bcryptjs`);
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const { validationResult } = require("express-validator/check");

//REGISTER CONTROLLER
//REGISTER CONTROLLER
async function register(req, res) {
    try {
        const errors = validationResult(req);
        //console.log(req.body);

        if (!errors.isEmpty()) {

        return res.status(422).jsonp(errors.array());

      } else {

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const addUserResult = await addUser(req.body, hashPassword);

        return res.send({ userId: addUserResult._id });
      }
    } catch (error) {

      res.status(409).send(error);

    }
  }


//LOGIN CONTROLLER
async function login(req, res) {
    try {

      const user = await getByEmail(req.body.email);
      if (!user) return res.status(400).send('invalid credentials');
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(400).send('invalid credentials');
  
      const token = jwt.sign(
        {_id: user._id, name: user.name, email: user.email},
        TOKEN_SECRET

      );

      return res.send({ id: user._id,
                        secret_token : token });
      
       } catch (error) {

      //console.log(error);
      res.status(500).send(error);

    }
  }


//EXPORTING MODULES
module.exports = {
  register,login
};
