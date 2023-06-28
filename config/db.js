const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URL);
    await mongoose.connect("mongodb://127.0.0.1:27017/doctorapp");
    // console.log(`mongodb connected ${mongoose.connection.host}`.bgGreen.white);
    console.log("Database connected".bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issues ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
