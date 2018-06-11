var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new Schema({
  title:
  {
    type:String,
  required:true
  },
  firstName:
  {
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:Number,
    required:true
  }
});

let user = mongoose.model('User',userSchema);

module.exports=user;