var router = require('express').Router();
var californiaCtrl = require('../controllers/california');


router.get('/california', californiaCtrl.index);
 
router.post('/california', californiaCtrl.create)
router.post('/california/:id', californiaCtrl.deleteOne);
router.post('/california/:id/comment', californiaCtrl.addComment);

router.post('/californina/:id/edit', californiaCtrl.edit);

router.post('/california',)





module.exports = router;