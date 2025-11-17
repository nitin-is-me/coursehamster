// const express=require('express');
const Student = require("../Models/Student");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// student
exports.signup = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const userToSave = new Student({
    name,
    email,
    password: hashedPassword,
    isAdmin,
  });
  const savedUser = await userToSave.save();
  res.send(savedUser);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const userToFind = await Student.findOne({ email: email });
  if (!userToFind) {
    return res.send("User not found");
  }
  //lets test aight
  const isCorrect = bcryptjs.compareSync(password, userToFind.password);

  if (!isCorrect) {
    return res.send("Wrong password, try again");
  }

  const token = jwt.sign({ id: userToFind._id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
  if (userToFind.isAdmin) {
    return res.send({ token, message: "you're logged in as Admin" });
  }
  if (!userToFind.isAdmin) {
    return res.send({ token, message: "you're logged in as Student" });
  }

  res.send(savedUser);
};

exports.getUsers = async (req, res) => {
  const usersToFind = await Student.find();
  res.send(usersToFind);
};

// idhar to thi k hi hai sb h.. jo hoga routes me khela hoga,wha,noice ha pencho code yaad hai s letstart then

// yahi hona chahiye most probably, server run karke login karke dekh if it's giving jwt token or notwait
// ab routes ka are bhai jwt to kiya hi nahi bhencho token bhi to banan hai login pe han almost

// ruk login me change kar dete hai thoda
