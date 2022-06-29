const express = require('express');
const { register, login } = require('../controllers/UserController');
const router =  express.Router();
const { check } = require('express-validator/check');


//V1 ROUTES

//AUTH ROUTES

//REGISTER ROUTE
router.post('/v1/auth/register', [
    check('name').not().isEmpty().isLength({min: 6}).withMessage('name must have at least 6 charcters'),
    check('password', 'Your password must be at least 6 characters').not().isEmpty().isLength({min: 6}),
    check('email', 'Your email is not valid').not().isEmpty().isEmail().normalizeEmail(),],
    register);

 //LOGIN ROUTE   
router.post('/v1/auth/login', login)


module.exports = router;