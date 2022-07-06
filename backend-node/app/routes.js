const express = require('express');
const { register, login, updateUser, getUsers, getUser } = require('../controllers/UserController');
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
router.get('/auth/users',  getUsers);
router.get('/auth/user/:id',  getUser);


module.exports = router;