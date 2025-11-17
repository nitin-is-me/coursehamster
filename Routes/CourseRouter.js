const express = require("express");
const router=express.Router();
const {addCourse, removeCourse, getCourse}=require('../controller/courseController');

router.post('/addCourse',addCourse);
router.delete('/removeCourse/:id',removeCourse);
router.get("/getCourse", getCourse);

module.exports=router;

// server.js me import karna hai is router ko below authrouter  
// ye controller me nhi baneyega? jayada strucktured rhega aight
// bana, course create and delete ka router me sif api define karenge na, controller me full code yaha 3-4 line se jyada ka code nahi hoga
// cum in courseController