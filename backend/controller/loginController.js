var express = require("express")
var router = express.Router()
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: String,
    lastname: String,
    email: String ,
    username:{ type: String, unique: true },
    password: String,
    confirmpassword:String,

});

const User = mongoose.model('registration', UserSchema);
router.post('/register', async (req, res, next) => {
  const { fullname, lastname, email, username, password, confirmpassword } = req.body;
  const oldUser = User.findOne({ username })
  console.log(oldUser)
  
  try {
      if (oldUser) {
    res.send({ message: "user exist" })
  } 
    const user = await User.create({
      fullname,
      lastname,
      email,
      username,
      password,
      confirmpassword
    });
     await user.save();
    res.status(201).json({ message: 'Success' });
    console.log(user);
  } catch (error) {
    console.error('Error saving result:', error);
    res.status(500).json({ message: 'Server error' });
  }
   
})
module.exports= router