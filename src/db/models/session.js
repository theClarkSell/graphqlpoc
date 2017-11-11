const mongoose = require("mongoose");

const { Schema } = mongoose;

const sessionSchema = new Schema({
  title: {
    type: String,
    unique: false,
    required: true
  },

  description: {
    type: String,
    unique: false,
    required: true
  },

  speakers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Speaker"
    }
  ]
});

module.exports = mongoose.model("Session", sessionSchema);
