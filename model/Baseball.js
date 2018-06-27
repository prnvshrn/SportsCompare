var mongoose = require('mongoose');
var baseballSchema = mongoose.Schema({
	name:{type: String},
	position:{type:String},
	AB:{type:String},
	R:{type:String},
	H:{type:String},
	HR:{type:String},
	RBI:{type: String},
	SB:{type: String},
	AVG:{type: String},
	OBP:{type: String},
	OPS:{type: String}
})

var Baseball = module.exports = mongoose.model('Baseball', baseballSchema);