const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  city: String,
  country: String,
  role: {
    type: String,
    enum: ["Customer", "Underwriter", "Agent", "Claims Adjuster", "Admin"],
    default: "Customer"
  },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "SUSPENDED"],
    default: "ACTIVE"
  }
});

module.exports = mongoose.model("User", userSchema);