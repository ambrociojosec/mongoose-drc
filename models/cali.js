var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var commentSchema = new Schema({
// 	comment: String
// })

var californiaSchema = new Schema({
	title: String,
	content: String,
	user: {
		type: Schema.Types.ObjectId,
		ref: "Visitor"
	}
})

module.exports = mongoose.model('Cali', californiaSchema);


