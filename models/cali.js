var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var californiaSchema = new Schema({
	title: String,
	content: String
})

module.exports = mongoose.model('Cali', californiaSchema);


