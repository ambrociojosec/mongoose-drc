//requivar express = require('express');
var router = require('express').Router();
var californiaCtrl = require('../controllers/california');
//mount blogs

/* GET users listing. */
router.get('/california', californiaCtrl.index);
 
// Insert this middleware for routes that require a logged in user
router.post('/california', californiaCtrl.create)

router.get('/california', californiaCtrl.show);

router.post('/california/:id', californiaCtrl.deleteOne);

router.put('/california/:id', californiaCtrl.edit);

// router.post('/california/:id', )





module.exports = router;