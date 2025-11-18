const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    
  },
  password:{
    type:String,
    required:true,
    minLength:6
  },
  isAdmin:{
    type:Boolean,
    required:true,
    default:false
  }
})
const User=mongoose.model('User',userSchema);
module.exports=User;

 
// now here abe default false kar, be default it should not create admin account now come in authcontroller