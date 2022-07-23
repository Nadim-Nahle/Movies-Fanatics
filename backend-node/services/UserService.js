const User = require("../models/user");

//REGISTER SERVICE
async function addUser(body, hashPassword) {
  const { name, email, username, url } = body;

  const user = new User({
    name,
    email,
    username,
    url,
    password: hashPassword,
  });

  return await user.save();
}
//GOOGLE REGISTER SERVICE
async function addGoogleUser(body, hashPassword) {
  const { name, email, username, url } = body;

  const user = new User({
    name,
    email,
    username,
    url,
    password: hashPassword,
  });

  return await user.save();
}

//LOGIN SERVICE
async function getByEmail(email) {
  return await User.findOne({
    email,
  });
}

module.exports = {
  addUser,
  getByEmail,
  addGoogleUser,
};
