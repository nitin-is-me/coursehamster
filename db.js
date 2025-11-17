const mongoose=require('mongoose');
// const dotenv=require('dotenv').config();

const connectDb=async()=>{
  try{
    await mongoose.connect(process.env.MONGOURL);
    console.log("hi there monogo is connected")
  }
  catch(err){
    console.error("error connecting ",err.message);
  }
}
module.exports=connectDb;

// 
// server.js me you're using it as connectDb(),to yaha bhi wahi spelling rakh, like thisaight