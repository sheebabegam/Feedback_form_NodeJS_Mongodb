const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  des: {
    type: String,
    required: true,
    lowercase: true,
  },
  det: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("feedback", feedbackSchema);
