
const db = require('./db');
/**
 * UserRegisterSchema
 */
const RegiterSchema= db.Schema({
    firstname:{type:String,trim:true},
    lastname:{type:String, trim:true},
    email:{type:String, trim:true},
    password:{type:String, trim:true}
});
/**
 * Validations
 */
RegiterSchema.path('firstname').required(true,'firstname can not be blank.');
RegiterSchema.path('lastname').required(true,'lastname can not be blank.');
RegiterSchema.path('email').required(true,'email can not be blank.');
RegiterSchema.path('password').required(true,'password can not be blank.');
/**
 * Save the Schema
 */
module.exports = db.model('user',RegiterSchema);