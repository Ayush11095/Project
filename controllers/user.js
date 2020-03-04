// var config = require('../config/config.json');
var db_user = require('../models/user');
var bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// User insertion
var msg = require('../msg');
var statusCode=msg.statusCode;
var message=msg.message;
exports.register = (req,res)=>{
    //recieving body
    var content = JSON.parse(req.body);
    var email = content.email;
    var firstname = content.firstname;
    var lastname = content.lastname;
    var password = content.password;
    console.log(email);
    try{
db_user.findOne({email:content.email}).exec().then(result => {
    if (result) {
        console.log(result);
        if (result.email === email) {
            res.json({
                success:false,
                statusCode:statusCode.USER_ALREADY_EXIST,
                message:message.EMAIL_EXISTED
            });
        }
    }else{
        var obj = new db_user({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: bcrypt.hashSync(password,10)
        })
        //saving details of user in user collection
        obj.save((err,data)=>{
            if(!err){
                res.json({
                success:true,
                statusCode:statusCode.OK,
                message: message.REVIEW_ADD_SUCC,
                data :{
                firstname: obj.firstname,
                lastname: obj.lastname,
                email: obj.email
                }
                })
            }
            else{res.json({
                success:false,
                statusCode:statusCode.FORBIDDEN,
                message:'invalid format'
            });
        }
        });
    }
})
    }catch(err){   
        throw err;
    }
    //calling user schema for value insertion
    
}

exports.get_user = (req,res)=>{
    // var user_id = req.params.user_id;
    try{
        db_user.find({},function(req,result){
            let data=[];
            result.forEach(element => {
            data.push({firstname:element.firstname,
            lastname:element.lastname,
            email:element.email
        })
        });
            res.json({
                success:true,
                statusCode:statusCode.OK,
                message:'Users List',
                data
            })
        })
        }catch(err){
           throw err;
        }
}
//deleting user details from user db
exports.delete_user = (req,res)=>{
    var user_id = req.params.id;
    try{
    db_user.deleteOne({_id: user_id},function (err, data) {
           if (data.deletedCount === 0) {
            res.json({
                success:false,
                statusCode:statusCode.FORBIDDEN,
                message:'email dose not exist'
            });
    } else {
        res.json({
            success:true,
            statusCode:statusCode.OK,
            message:'user deleted'
        });
    }
});
}catch(err){
    throw err;
}
}
//updating user details from user db
exports.update_user = (req,res)=>{
    var user_id = req.params.id;
    var content = JSON.parse(req.body)
    try{
    db_user.findOneAndUpdate({_id: user_id},content,{new: true},function (err, data) {
           if (data === null || typeof data === 'undefined') {
        res.send("user does not exist");
    } else {
        db_user.find({_id:user_id},function(req,result){
            let data=[];
            result.forEach(element => {
            data.push({firstname:element.firstname,
            lastname:element.lastname,
            email:element.email
        })
        });
            res.json({
                success:true,
                statusCode:statusCode.OK,
                message:'User Updated',
                data
            })
        })
    //    res.send("user updated");
    }
      });
   }catch(err){
       throw err;
   }
}