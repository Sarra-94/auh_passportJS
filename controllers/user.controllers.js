const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user = require("../models/User");
exports.register = async (req, res) => {
  // get the body
  const { name, lastName, email, password } = req.body;
  // instance of the schema
  const newUser = new User({ name, lastName, email, password });

  try {
    // check if the email exist
    const searchUser = await User.findOne({ email });
    if (searchUser) {
      return res.status(401).json({ message: "user already exist" });
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    // then save the user
    await newUser.save();
    const payload = {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
    const token = jwt.sign(payload, "mySecretKey", { expiresIn: 10000000 });

    res.status(201).json({ newUser, token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ message: "error server", errors: error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find the email if exist
    const searchedUser = await User.findOne({ email });
    if (!searchedUser) {
      return res.status(404).json({ message: "email not found check again" });
    }
    // check if the passwords is equals
    // using the compare method of bcrypt
    const isMatch = await bcrypt.compare(password, searchedUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "wrong password" });
    }
    // if user mutched we should return the token TO ACCESS to the system
    // but the token is limit
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
      email: searchedUser.email,
    };

    const token = jwt.sign(payload, "mySecretKey", { expiresIn: 10000000 });
    // send the access to the application
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).json({ message: "error server", errors: error });
  }
};
