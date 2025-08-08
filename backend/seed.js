const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Doctor = require('./models/Doctor'); 
const connectDB = require('./config/db'); 

dotenv.config();
connectDB();

const seedDoctors = async () => {
  try {
    // Clear existing data
    await Doctor.deleteMany();
    console.log("Existing doctor data cleared.");

    const sampleDoctors = [
      {
        name: "Dr. Sheelavathi Natraj",
        specialization: "Dermatologist",
        experience: 21,
        location: "JP Nagar, Bangalore",
        clinicName: "Sapphire Skin And Aesthetics Clinic",
        fees: 800,
        rating: 94,
        reviews: 1506,
        availableToday: true,
        profileImage: "https://images.apollo247.in/doctors/a6925264-b5ca-4b7c-9316-503f2f4407da-1715671867591.jpeg",
        batch: "Dermo",
      },
      {
        name: "Dr. Natraj Shetty",
        specialization: "Dermatologist",
        experience: 12,
        location: "Jayanagar, Bangalore",
        clinicName: "Aesthetic Heart Dermatology & Cardiology Clinic",
        fees: 800,
        rating: 97,
        reviews: 159,
        availableToday: false,
        profileImage: "https://images.jdmagicbox.com/v2/comp/bangalore/m8/080pxx80.xx80.150803173110.s5m8/catalogue/dr-natraj-shetty-sapphire-skin-and-aesthetic-clinic-jp-nagar-bangalore-4h05jcu.jpg",
        batch: "Cardiac"
      },
      {
        name: "Dr. Anjali Sharma",
        specialization: "Pediatrician",
        experience: 15,
        location: "Koramangala, Bangalore",
        clinicName: "Little Stars Clinic",
        fees: 650,
        rating: 98,
        reviews: 870,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/beautiful-young-doctor-posing-with-arms-crossed_1262-1282.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Pedia"
      },
      {
        name: "Dr. Rajesh Kumar",
        specialization: "Orthopedic Surgeon",
        experience: 18,
        location: "Indiranagar, Bangalore",
        clinicName: "Bone & Joint Care Center",
        fees: 1000,
        rating: 92,
        reviews: 1200,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-clinic_1303-21073.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Ortho"
      },
      {
        name: "Dr. Priya Singh",
        specialization: "Gynecologist",
        experience: 10,
        location: "Whitefield, Bangalore",
        clinicName: "Women's Health Clinic",
        fees: 750,
        rating: 96,
        reviews: 600,
        availableToday: false,
        profileImage: "https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-arms-crossed_1262-12939.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Gyno"
      },
      {
        name: "Dr. Amit Verma",
        specialization: "Cardiologist",
        experience: 25,
        location: "Marathahalli, Bangalore",
        clinicName: "Heartbeat Clinic",
        fees: 1200,
        rating: 95,
        reviews: 1800,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/doctor-presenting-something_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Cardiac"
      },
      {
        name: "Dr. Kavita Rao",
        specialization: "Ophthalmologist",
        experience: 14,
        location: "Basavanagudi, Bangalore",
        clinicName: "Vision Care Center",
        fees: 700,
        rating: 93,
        reviews: 750,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/portrait-female-doctor_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Ophtha"
      },
      {
        name: "Dr. Sanjay Gupta",
        specialization: "Neurologist",
        experience: 20,
        location: "Electronic City, Bangalore",
        clinicName: "Brain & Nerve Clinic",
        fees: 1100,
        rating: 90,
        reviews: 950,
        availableToday: false,
        profileImage: "https://img.freepik.com/free-photo/young-male-doctor-standing-with-arms-crossed_1262-12941.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Neuro"
      },
      {
        name: "Dr. Lisa Fernandes",
        specialization: "Dentist",
        experience: 9,
        location: "Jayanagar, Bangalore",
        clinicName: "Smile Dental Clinic",
        fees: 500,
        rating: 99,
        reviews: 400,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/portrait-smiling-doctor-with-stethoscope_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Dental"
      },
      {
        name: "Dr. Rohan Mehta",
        specialization: "General Physician",
        experience: 7,
        location: "HSR Layout, Bangalore",
        clinicName: "Family Care Clinic",
        fees: 400,
        rating: 91,
        reviews: 300,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/doctor-standing-with-arms-crossed-hospital-corridor_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "General"
      },
      {
        name: "Dr. Pooja Reddy",
        specialization: "Physiotherapist",
        experience: 8,
        location: "Bannerghatta Road, Bangalore",
        clinicName: "Active Life Physio",
        fees: 550,
        rating: 95,
        reviews: 250,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/female-doctor-with-stethoscope-isolated-white-background_1303-21073.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Physio"
      },
      {
        name: "Dr. Vikram Singh",
        specialization: "ENT Specialist",
        experience: 16,
        location: "Jayanagar, Bangalore",
        clinicName: "Hear & Breathe Clinic",
        fees: 900,
        rating: 93,
        reviews: 700,
        availableToday: false,
        profileImage: "https://img.freepik.com/free-photo/portrait-male-doctor-with-stethoscope_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "ENT"
      },
      {
        name: "Dr. Shweta Desai",
        specialization: "Dietitian/Nutritionist",
        experience: 6,
        location: "Koramangala, Bangalore",
        clinicName: "Healthy Bites Nutrition",
        fees: 600,
        rating: 97,
        reviews: 180,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/doctor-with-stethoscope-isolated-white-background_1303-21073.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Nutrition"
      },
      {
        name: "Dr. Sameer Khan",
        specialization: "Pulmonologist",
        experience: 13,
        location: "Connaught Place, Delhi",
        clinicName: "Delhi Lung Care",
        fees: 950,
        rating: 94,
        reviews: 550,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/doctor-with-stethoscope-standing-clinic_1303-21073.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Pulmo"
      },
      {
        name: "Dr. Rina Shah",
        specialization: "Endocrinologist",
        experience: 17,
        location: "Bandra, Mumbai",
        clinicName: "Mumbai Endocrine Center",
        fees: 1100,
        rating: 96,
        reviews: 720,
        availableToday: false,
        profileImage: "https://img.freepik.com/free-photo/portrait-successful-mid-adult-doctor-with-arms-crossed_1262-12939.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Endo"
      },
      {
        name: "Dr. Alok Singh",
        specialization: "Urologist",
        experience: 11,
        location: "Kothrud, Pune",
        clinicName: "Pune Urology Clinic",
        fees: 850,
        rating: 92,
        reviews: 380,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/male-doctor-with-stethoscope-standing-clinic_1303-21073.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Uro"
      },
      {
        name: "Dr. Neha Gupta",
        specialization: "Psychiatrist",
        experience: 10,
        location: "Dwarka, Delhi",
        clinicName: "Mind Wellness Clinic",
        fees: 1000,
        rating: 95,
        reviews: 450,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/beautiful-young-doctor-posing-with-arms-crossed_1262-1282.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Psych"
      },
      {
        name: "Dr. Arjun Reddy",
        specialization: "Gastroenterologist",
        experience: 19,
        location: "Andheri, Mumbai",
        clinicName: "Digestive Health Center",
        fees: 1300,
        rating: 93,
        reviews: 800,
        availableToday: true,
        profileImage: "https://img.freepik.com/free-photo/doctor-presenting-something_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Gastro"
      },
      {
        name: "Dr. Smita Joshi",
        specialization: "Nephrologist",
        experience: 14,
        location: "Shivaji Nagar, Pune",
        clinicName: "Pune Kidney Care",
        fees: 900,
        rating: 90,
        reviews: 320,
        availableToday: false,
        profileImage: "https://img.freepik.com/free-photo/portrait-female-doctor_1142-3200.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1715671867&semt=sph",
        batch: "Nephro"
      }
    ];

    // Insert new data
    await Doctor.insertMany(sampleDoctors);
    console.log("Sample doctors added successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding doctors:", error);
    process.exit(1);
  }
};

seedDoctors();