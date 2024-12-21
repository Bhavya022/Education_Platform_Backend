const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url || 'mongodb+srv://bhavya:bhavya@cluster0.kin5ecd.mongodb.net/EducationPlatformdb?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
