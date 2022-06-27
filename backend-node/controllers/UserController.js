const { addUser } = require("../services/UserService");
require("dotenv").config();
const bcrypt = require(`bcryptjs`);

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

module.exports = {
  register,
};
