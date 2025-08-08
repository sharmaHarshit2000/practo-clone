const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true, index: true },
    clinicName: { type: String, required: true },
    fees: { type: Number, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    availableToday: { type: Boolean, default: false },
    profileImage: { type: String }, 
    batch: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
