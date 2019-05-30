var mongoose = require('mongoose');
var Schema = mongoose.Schema

 var visitorSchema = new Schema({
   name: String,
   email: String,
   avatar: String,
   googleId: String,
   posts: [{
     type: Schema.Types.ObjectId,
     ref: "Cali"
   }]
 }, {
   timestamps: true
 });

module.exports = mongoose.model('Visitor', visitorSchema);