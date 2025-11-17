const jwt = require("jsonwebtoken");
const Student = require("../Models/Student");
const Course = require("../Models/Course");

exports.addCourse = async (req, res) => {
  const { name, teacher, studentsEnrolled } = req.body;
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.send("User is unauthorized");
  }

  const decoded = jwt.decode(token, process.env.JWT_SECRET);
  const id = decoded.id;
  const userToFind = await Student.findById(id);

  if (!userToFind.isAdmin) {
    return res.send("User is not admin");
  }

  const courseToCreate = new Course({ name, teacher, studentsEnrolled });
  const savedCourse = await courseToCreate.save();
  res.send(savedCourse);
};



//delete done
exports.removeCourse = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.send("User is unauthorized");
  }

  const decoded = jwt.decode(token, process.env.JWT_SECRET);
  const userId = decoded.id;
  const userToFind = await Student.findById(userId);
  const adminName = userToFind.name;
  if (!userToFind.isAdmin) {
    return res.send("User is not admin");
  }
  // bro code nhi yad id find krke delte krna h n hn
  const removedCourse = await Course.findByIdAndDelete(id);
  res.send({ message: `Course is deleted by ${adminName}`, removedCourse });
};
// bro again we only want to delete if the user is admin
exports.getCourse = async (req, res) => {
  const coursesToGet = await Course.find();
  res.send(coursesToGet);
};

// continue, mai tab tak router me import kar deta hu
//nigga u there or not ysa biro courseRouter me import kar add course ko

// we only want it to allow course creation if the logged in user is an admin ha how will u do that how's thatgood so fsar
