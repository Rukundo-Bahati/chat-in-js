const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("Connected to Database Successfully..");
  } catch (error) {
    console.log('Cannot Connect to database',error)
  }
};
