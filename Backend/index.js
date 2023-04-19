const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./connection");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// userModel({
//   username: "Punit Sharma",
//   password: "Punit2123",
// }).save();

const UserSchema = new mongoose.Schema({
  username : String ,
  password : String
});

const User = mongoose.model('User' , UserSchema)

app.post("/demo", async (req, res) => {

  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  const doc = await user.save();
  
  console.log(doc);
  console.log(req.body);
  
  res.json(doc);
});

app.get("/demo" , async(req,res)=>{
      const docs = await User.find({});
      res.json(docs);
});

app.listen(8080, () => {
  console.log("Server is Listening on the PORT.");
});
