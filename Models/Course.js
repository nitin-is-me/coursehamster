const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  teacher:{
    type:String,
    required:true
  },
  studentsEnrolled:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }
  ]
  
})
const Course=mongoose.model('Course',courseSchema);
module.exports=Course;


// ruk bro mai tab tak model ka naam User se Student kar de raha hu, sahi h ha done
// bro one will be for admin? i mean 

// ha student model se isAdmin hata dete hai, let's create a separate model