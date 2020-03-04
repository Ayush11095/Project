const db  = require('./db'); 
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * ProductSchema
 */
var schema = db.Schema({
  p_name: {type:String,require:true,trim:true},
  p_desc: {type:String,require:true,trim:true},
  p_image:{type:String,require:true},
  // obj_id: {type:Schema.Types.ObjectId,ref:'user'},
  reviews:{ type: Array}
});
module.exports = db.model('product', schema);