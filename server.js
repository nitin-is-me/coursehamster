const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const authRouter = require("./Routes/AuthRouter");
const courseRouter = require("./Routes/CourseRouter");
// lets test fuck, commentkarke aa bro use kiskko wait lemme oh test

const port = process.env.PORT;
const connectdb = require("./db");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/auth", authRouter);
app.use("/course", courseRouter);
connectdb();

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});

// test line
// yohaaa biro yahi h nhi 2 ,min hello yahu hai abe wo dhoodh kiyha aakash ne order country delight se wahi bakchodi kr rha tha bola pair me chot laga hai nhi ayunga to mereko jana pada nhi raat me kiya tha..,,ha continue krna h be uthe hai itne mehnat se

// course model banate hai ha..shuru kar
// tu start kar kya kya models banane hai abhi to sirf course
