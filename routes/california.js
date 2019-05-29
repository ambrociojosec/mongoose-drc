//requivar express = require('express');
var router = require('express').Router();
var californiaCtrl = require('../controllers/california');
//mount blogs

/* GET users listing. */
router.get('/california', californiaCtrl.index);
 
// Insert this middleware for routes that require a logged in user
 

module.exports = router;