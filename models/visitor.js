var mongoose = require('mongoose');
//var Schema = mongoose.Schema
 var visitorSchema = new mongoose.Schema({
   name: String,
   email: String,
   avatar: String,
   googleId: String
 }, {
   timestamps: true
 });

module.exports = mongoose.model('Visitor', visitorSchema);