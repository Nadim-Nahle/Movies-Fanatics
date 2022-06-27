const { addUser, getByEmail } = require("../services/UserService");
require("dotenv").config();
const bcrypt = require(`bcryptjs`);
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;

//REGISTER CONTROLLER
async function register(req, res) {
  try {
    console.log(req.body);

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const addUserResult = await addUser(req.body, hashPassword);
    return res.send({ userId: addUserResult._id });
  } catch (error) {
    res.status(400).send({
      message: "Failed! Email is already in use!",
    });
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
      //return res.header('auth-token', token).send(token);
      
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

module.exports = {
  register,login
};
