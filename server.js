console.clear();
const express = require("express");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();
// create an app data instance of express methods
const app = express();
// connect to data base atlas
dbConnect();

// parsing json data types
app.use(express.json());

// end points
app.use("/user", require("./router/user"));

// server PORT
const PORT = process.env.PORT;
// create the server using listen method
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
