const Cali = require('../models/cali');

module.exports = {
	index,
	create,
	show,
	deleteOne,
	edit
}
function edit (req, res) {
	Cali.findByIdAndUpdate({ _id: req.params.id },function(err,california){
		california.content = req.body.Econtent;
		console.log(req.body);
		if(err) res.redirect('/california');
		california.save();
		// res.redirect('/california');
	})
}
function deleteOne (req, res) {
	Cali.findByIdAndDelete({_id:req.params.id},function(err,california){
		if(err) res.render('/california');
		california.save();
		res.redirect('/california');
	});
}
function show(req, res) {
	// console.log('loaded')
	// Cali.find({}, function(err, california){
	// 	if(err) res.redirect('/california')
	// 	console.log(california)
	// 	res.render('visitors/california',
	// 	{california:california});
	// });	
}

function create(req, res) {
	california = new Cali(req.body);
	california.save();
	// console.log(california)
	res.redirect('/california')
}

function index(req, res){
	// res.render('visitors/california')
	// console.log('loaded')
	Cali.find({}, function(err, california){
		if(err) res.redirect('/california')
		// console.log(california)
		res.render('visitors/california',
		{california:california});
	});	
}