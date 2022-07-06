const express = require('express');
const { register, login, updateUser, getUsers } = require('../controllers/UserController');
const { registerErrors } = require('../middlewares/ErrorsMiddleware')
const router =  express.Router();
const auth = require('../middlewares/AuthMiddleware')
const { addMovie, getMovie, deleteMovies, updateMovie } = require('../controllers/MovieController');

//V1 ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', registerErrors, register);   
router.post('/v1/auth/login', login);

//MOVIES ROUTES
router.post('/v1/auth/admin/addmovie', auth, addMovie);
router.get('/v1/auth/movies', getMovie);
router.delete('/v1/auth/delete/:id', auth, deleteMovies);
router.patch('/v1/auth/movie/update/:id', auth, updateMovie);

//USER ROUTES
router.patch('/v1/auth/user/update/:id', auth, updateUser);
router.get('/v1/auth/users',  getUsers);



module.exports = router;