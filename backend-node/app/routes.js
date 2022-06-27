const express = require('express');
const { register } = require('../controllers/UserController');
const router =  express.Router();


//V1 ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register);



module.exports = router;