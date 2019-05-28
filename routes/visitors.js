var express = require('express');
var router = express.Router();
var visitorsCtrl = require('../controllers/visitors');

/* GET users listing. */
router.get('/', visitorsCtrl.index);
 

module.exports = router;
