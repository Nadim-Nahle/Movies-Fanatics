const express = require('express');
const { register, login, updateUser, getUsers, getUser, getFriends, followUser, unfollowUser, updateProfile, premiumUser} = require('../controllers/UserController');
const { getConv, getConvs, newConv} = require('../controllers/ConversationController')
const { newMsg, getMsg } = require('../controllers/MessageController')
const { registerErrors } = require('../middlewares/ErrorsMiddleware')
const router =  express.Router();
const auth = require('../middlewares/AuthMiddleware')
const { addMovie, getMovie, deleteMovies, updateMovie } = require('../controllers/MovieController');

// ROUTES

//AUTH ROUTES
router.post('/auth/register', registerErrors, register);   
router.post('/auth/login', login);

//MOVIES ROUTES
router.post('/auth/addmovie', auth, addMovie);
router.get('/auth/movies', auth, getMovie);
router.delete('/auth/delete/:id', auth, deleteMovies);
router.patch('/auth/movie/update/:id', auth, updateMovie);

//USER ROUTES
router.patch('/auth/user/update/:id', auth, updateUser);
router.get('/auth/users', getUsers);
router.get('/auth/user', getUser);
router.get('/auth/user/friends/:userId', getFriends);
router.put('/auth/user/:id/follow', followUser);
router.put('/auth/user/:id/unfollow', unfollowUser);
router.post('/auth/user/profile', auth, updateProfile);
router.post('/auth/user/premium', auth, premiumUser);



//CONV ROUTES
router.post('/auth/newconv' , newConv);
router.get('/auth/conv/:userId' , getConv);
router.get('/auth/convs/:firstUserId/:secondUserId' , getConvs);

//MESSAGES ROUTES
router.post('/auth/newmsg', newMsg);
router.get('/auth/msg/:conversationId', getMsg);


module.exports = router;