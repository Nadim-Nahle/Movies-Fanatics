const express = require('express');

const router =  express.Router();

//V1 ROUTES

//AUTH ROUTES
router.post('/v1/auth/register', register);