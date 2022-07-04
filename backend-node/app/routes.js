const express = require('express');
const { register, login } = require('../controllers/UserController');
const { registerErrors } = require('../middlewares/ErrorsMiddleware')
const router =  express.Router();
const auth = require('../middlewares/AuthMiddleware')
const { addMovie, getMovie, deleteMovies } = require('../controllers/MovieController');

//V1 ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', registerErrors, register);   
router.post('/v1/auth/login', login);

//MOVIES ROUTES
router.post('/v1/auth/admin/addmovie', auth, addMovie);
router.get('/v1/auth/movies', getMovie);
router.delete('/v1/auth/delete/:id', auth, deleteMovies);




module.exports = router;