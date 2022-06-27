const express = require('express');
const { register, login } = require('../controllers/UserController');
const router =  express.Router();


//V1 ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register);
router.post('/v1/auth/login', login)


module.exports = router;