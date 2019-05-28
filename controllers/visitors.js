const Visitor = require('../models/visitor');

module.exports = {
	index
}

function index(res,req,next) {
	res.render('visitors/index')
}