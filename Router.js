const express = require("express");
const Route = express.Router();
const feedbackSchema = require("./feedbackSchema");

Route.post("/addfeedback", async (req, res) => {
  try {
    var email = await feedbackSchema.findOne({
      email: req.body.email,
    });
    if (email) {
      return res.status(400).json("Email already exists");
    }

    var countryData = await new feedbackSchema({
      email: req.body.email,
      des: req.body.des,
      det: req.body.det,
    });

    var data = await countryData.save();
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = Route;
