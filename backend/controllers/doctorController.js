const Doctor = require("../models/Doctor");

const getDoctors = async (req, res) => {
  const { search = "", location = "" } = req.query;

  try {
    const doctors = await Doctor.find({
      specialization: { $regex: search, $options: "i" },
      location: { $regex: location, $options: "i" },
    });

    res.json({ doctors });
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors" });
  }
};

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      specialization,
      experience,
      location,
      clinicName,
      fees,
      rating,
      reviews,
      batch
    } = req.body;

    if (
      !name ||
      !specialization ||
      !experience ||
      !location ||
      !clinicName ||
      !fees ||
      !rating ||
      !reviews ||
      !batch
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const doctor = new Doctor(req.body);
    const savedDoctor = await doctor.save();

    res.status(201).json({ success: true, doctor: savedDoctor });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getDoctors, addDoctor };
