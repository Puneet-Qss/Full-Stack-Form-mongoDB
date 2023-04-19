const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Punit111:Punit222@cluster0.so6kzwc.mongodb.net/demoDB?retryWrites=true&w=majority"  )
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

module.exports = mongoose;
