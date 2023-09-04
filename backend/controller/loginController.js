var express = require("express")
var router = express.Router()
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullname: String,
    lastname: String,
    email: { type: String, unique: true },
    username:{ type: String, unique: true },
    password: String,
    confirmpassword:String,

});

const User = mongoose.model('registration', UserSchema);
router.post('/register', async (req, res, next) => {
  const { fullname, lastname, email, username, password, confirmpassword } = req.body;
  const oldUser = User.findOne({email,username})
  if (oldUser) {
    res.send({error:"user exist"})
  }
    const user = await User.create({
        fullname,
        lastname,
        email,
        username,
        password,
        confirmpassword
    });
     try {
    await user.save();
       res.status(201).json({ message: 'Success' });
       console.log(user)
  } catch (error) {
    console.error('Error saving result:', error);
  }
})
module.exports= router