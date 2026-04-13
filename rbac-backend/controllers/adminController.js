const User = require("../models/User");
const bcrypt = require("bcryptjs");

// CREATE USER
exports.createUser = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      ...req.body,
      password: hashed
    });

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET USERS
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE USER
exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// CHANGE STATUS
exports.changeStatus = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(user);
};

// ASSIGN ROLE
exports.assignRole = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role: req.body.role },
    { new: true }
  );
  res.json(user);
};