const { addUser, getByEmail, addGoogleUser } = require("../services/UserService");
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

      return res.status(422).jsonp(errors);

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
//GOOGLE REGISTER CONTROLLER
async function googleRegister(req, res) {
  try {
    //ENCRYPT THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.email + TOKEN_SECRET, salt);

    //STORE THE NEW USER
    const addUserResult = await addGoogleUser(req.body, hashPassword);
    return res.send({ userId: addUserResult._id });
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
      { _id: user._id, name: user.name, email: user.email },
      TOKEN_SECRET

    );

    return res.send({
      user: {
        name: user.name,
        email: user.email, _id: user._id,
        roles: user.roles,
        username: user.username,
        followings: user.followings
      },
      secret_token: token,
      url: user.url
    },
    );

    //CATCHING ERRORS
  } catch (error) {

    //console.log(error);
    res.status(500).send(error);

  }
}

//ADMIN LOGIN
async function adminLogin(req, res) {
  const email = 'admin@gmail.com';
  try {
    const user = await getByEmail(email);
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      TOKEN_SECRET

    );

    return res.send({
      user: {
        name: user.name,
        email: user.email, _id: user._id,
        roles: user.roles,
        username: user.username,
        followings: user.followings
      },
      secret_token: token,
      url: user.url
    },
    );

  } catch (error) {
    res.status(400).send('error');
  }
}
//GOOGLE LOGIN CONTROLLER
async function googleLogin(req, res) {
  try {

    const user = await getByEmail(req.body.email);
    if (!user) return res.status(401).send('invalid email');

    const validPassword = await bcrypt.compare(req.body.email + TOKEN_SECRET, user.password);
    if (!validPassword) return res.status(400).send('invalid password');

    //CRETAE USER AND JWT TOKEN
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      TOKEN_SECRET

    );

    return res.send({
      user: {
        name: user.name,
        email: user.email,
        _id: user._id,
        roles: user.roles,
        username: user.username,
        followings: user.followings
      },
      secret_token: token,
      url: user.url
    });

    //CATCHING ERRORS
  } catch (error) {

    //console.log(error);
    res.status(500).send(error);

  }
}


//UPDATE USER CONTROLLER
async function updateUser(req, res) {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).send()
    }
    Object.assign(user, req.body);
    user.save();
    return res.send({
      user:
      {
        name: user.name,
        email: user.email,
        _id: user._id,
        roles: user.roles,
        username: user.username,
        followings: user.followings
      },
      url: user.url
    },
    );
  }
  catch (error) {
    res.status(400).send(error.message);
  }

}
//UPDATE USER CONTROLLER
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).send()
    }
    res.send({ data: user })
  }
  catch (error) {
    res.status(400).send(error.message);
  }

}

//GET USERS CONTROLLER
async function getUsers(req, res) {
  try {
    const user = await User.find(all)
    if (!user) {
      return res.status(405).send()
    }
    res.status(200).send(user)
  }
  catch (error) {
    res.status(400).send(error.message);
  }

}

//GET A USER
async function getUser(req, res) {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};


//GET FOLLOWINGS
async function getFriends(req, res) {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })

    );

    res.status(200).json(friends)


  } catch (err) {
    res.status(505).json(err);
  }
};

//FOLLOW
async function followUser(req, res) {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
};


//UNFOLLOW USER
async function unfollowUser(req, res) {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
};

//PROFILE
async function updateProfile(req, res) {
  const user = await User.findById(req.user._id)
  try {
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.pic = req.body.pic || user.pic
    }
    const updatedUser = await user.save();
    res.json({
      id: updateUser._id, name: updateUser.name, pic: updateUser.pic
    })
  } catch (err) {
    res.status(404).json("user not found");
  }

}

//PREMIUM USER
async function premiumUser(req, res) {
  const user = await User.findById(req.user._id)
  try {
    if (user) {
      user.roles = 'premium';
    }
    const updatedUser = await user.save();
    res.json({
      user: user
    })

  } catch (err) {
    res.status(404).json("user not found");
  }
}
//PREMIUM USER
async function userFavMovie(req, res) {
  const user = await User.findById(req.user._id)
  try {
    if (user) {
      user.favMovie = req.body.favMovie || user.favMovie;
      user.favMovieUrl = req.body.favMovieUrl || user.favMovieUrl;
    }
    const updatedUser = await user.save();
    res.json({
      favMovie: user.favMovie, favMovieUrl: user.favMovieUrl
    })

  } catch (err) {
    res.status(404).json("user not found");
  }
}

//DELETE User CONTROLLER
async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send()
    }
    await user.remove();
    res.status(200).send({ data: true })
  }
  catch (error) {
    res.status(400).send(error.message);
  }


}



//EXPORTING MODULES
module.exports = {
  register,
  login,
  updateUser,
  getUsers,
  getUser,
  getFriends,
  followUser,
  unfollowUser,
  updateProfile,
  premiumUser,
  getUserById,
  userFavMovie,
  googleRegister,
  googleLogin,
  adminLogin,
  deleteUser
};
