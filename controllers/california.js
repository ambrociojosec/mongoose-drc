const Cali = require('../models/cali');
const Visitor = require('../models/visitor');

module.exports = {
	index,
	create,
	deleteOne,
	edit,
	addComment
}

function addComment(req,res){
	Cali.findById({ _id: req.params.id },function(err, california){
		console.log(req.body);
		california.comments.push(req.body)
		if(err) res.redirect('/california');
		california.save();
		res.redirect('back');
	})
}
 
function edit (req, res) {
	Cali.findById({ _id: req.params.id },function(err, california){
		california.content = req.body.Econtent;
		console.log(req.body);
		if(err) res.redirect('/california');
		california.save();
		res.redirect('back');
	})
}
function deleteOne(req, res){
	Cali.findByIdAndDelete({_id:req.params.id},function(err,california){
		california.save();
		res.redirect('back');2
	})

}

function create(req, res) {
	california = new Cali(req.body);
	california.user = req.user.id;
	console.log('req.user.id=>>>',req.user.id);
	Visitor.findById(req.user.id, function(err,visitor){
		visitor.posts.push(california.id);
		visitor.save();
	})

	california.save();
	console.log(california)
	res.redirect('/california')
}

function index(req, res){
	Cali.find({}).populate('user').exec((err,california)=>{
		res.render('visitors/california',
		{california, user:req.user});
	});	
}





