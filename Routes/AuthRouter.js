const express=require('express');
const { signup, login, getUsers } = require('../controller/authController');


const router=express.Router();
// student
router.post('/signup',signup);
router.post('/login',login);
router.get("/getUsers", getUsers);

// router.post('/logout',logout); adding apis in controller file abe signup and login alag alag kyu banyega jaise signup krega no matter student to admin wahi form me ouchega is admin then uill type yes or no uss hisab se saare routes define ho jayenge not need to create two seperate signup or login, how will you do it then, jaise pichla tha isAdmin field in Student model?
// ha kuchh aisa hi, Admin delete kar  collection change kar diya tha, we'll have to signup first
module.exports = router;

// bhencho jwt secret to dal .env me 
// bhai user kyu ayega yaha signup likh de seedha, which we will import later from controller, logout ab kya sahi h ab kya.. now make controllers folder ban gaya cum there