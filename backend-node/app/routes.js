const express = require('express');
const { register, login } = require('../controllers/UserController');
const { registerErrors } = require('../middlewares/ErrorsMiddleware')
const router =  express.Router();


//V1 ROUTES

//AUTH ROUTES

//REGISTER ROUTE
router.post('/v1/auth/register', registerErrors, register);

 //LOGIN ROUTE   
router.post('/v1/auth/login', login)


module.exports = router;