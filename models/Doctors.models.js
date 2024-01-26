const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  Experience: Number,
  Degree: String,
  speciality: String,
  city: String,
});

const doctor = mongoose.model("doctor", doctorSchema);

module.exports = { doctor };
