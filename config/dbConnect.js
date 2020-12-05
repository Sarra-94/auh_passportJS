const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("dbConnected successfully");
  } catch (error) {
    console.error("database is not connected");
  }
};
module.exports = dbConnect;
