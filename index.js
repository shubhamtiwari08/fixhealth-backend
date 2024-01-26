const express = require("express");
const app = express();
const cors = require("cors");
 

const { initializeDatabase } = require("./db/db.connection.js");
const { doctor } = require("./models/Doctors.models.js");

app.use(express.json());
app.use(cors());

initializeDatabase();

app.get("/", (req, res) => {
  res.json("working");
});

app.get("/doctors/:city", async (req, res) => {
  const { city } = req.params;
  console.log(city);
  const doctors = await doctor.find({
    city: { $regex: new RegExp(city, "i") },
  });
  res.json(doctors);
});

app.post("/doctors/add", async (req, res) => {
  const { name, Experience, Degree, speciality, city } = req.body;
  const newDoctor = await doctor({
    name,
    Experience,
    Degree,
    speciality,
    city,
  });
  await newDoctor.save();
  res.json(newDoctor);
});

app.listen(3001, () => {
  console.log("listening to port 3001");
});
