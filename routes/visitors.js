var express = require('express');
var router = express.Router();
var visitorsCtrl = require('../controllers/visitors');

/* GET users listing. */
router.get('/', visitorsCtrl.index);
 
// Insert this middleware for routes that require a logged in user
 

module.exports = router;
