const express = require("express");
const {
  googleLogin,
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
  adminLogin,
  deleteUser,
} = require("../controllers/UserController");
const {
  getConv,
  getConvs,
  newConv,
} = require("../controllers/ConversationController");
const { newMsg, getMsg } = require("../controllers/MessageController");
const { registerErrors } = require("../middlewares/ErrorsMiddleware");
const router = express.Router();
const auth = require("../middlewares/AuthMiddleware");
const getAdmin = require("../middlewares/AdminMidlleware");
const {
  addMovie,
  getMovie,
  deleteMovies,
  updateMovie,
} = require("../controllers/MovieController");

// ROUTES

//AUTH ROUTES
router.post("/auth/register", registerErrors, register);
router.post("/auth/register/google", googleRegister);
router.post("/auth/login", login);
router.post("/auth/login/google", googleLogin);

//MOVIES ROUTES
router.post("/auth/addmovie", auth, addMovie);
router.get("/auth/movies", auth, getMovie);
router.delete("/auth/delete/:id", auth, deleteMovies);
router.patch("/auth/movie/update/:id", auth, updateMovie);


//USER ROUTES
router.patch("/auth/user/update/:id", updateUser);
router.get("/auth/user/id/:id", getUserById);
router.get("/auth/users", getUsers);
router.get("/auth/user", getUser);
router.get("/auth/user/friends/:userId", getFriends);
router.put("/auth/user/:id/follow", followUser);
router.put("/auth/user/:id/unfollow", unfollowUser);
router.post("/auth/user/profile", auth, updateProfile);
router.get("/auth/user/premium", auth, premiumUser);
router.post("/auth/user/fav", auth, userFavMovie);
router.delete("/auth/user/delete/:id", auth, deleteUser);

//CONV ROUTES
router.post("/auth/newconv", newConv);
router.get("/auth/conv/:userId", getConv);
router.get("/auth/convs/:firstUserId/:secondUserId", getConvs);

//MESSAGES ROUTES
router.post("/auth/newmsg", newMsg);
router.get("/auth/msg/:conversationId", getMsg);

//ADMIN
router.post("/auth/login/admin", getAdmin, adminLogin)

module.exports = router;
