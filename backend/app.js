const express = require("express");
const cors = require("cors");

// app config
const app = express();
const port = process.env.PORT || 4000;
app.listen(port);

// middleware
app.use(cors());
app.use(express.json());

const doctors = [
  {
    id: 1,
    name: "Dr. Ayesha Khan",
    specialization: "Cardiologist",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754229206/ChatGPT_Image_Aug_3_2025_07_08_56_PM_jjeybp.png",
    availability: "Available Today",
    schedule: "Mon-Fri: 9 AM - 5 PM",
    description:
      "Expert in heart-related conditions with 12+ years of experience.",
    rating: 4.9,
    study: "MD, Cardiology – AIIMS Delhi",
  },
  {
    id: 2,
    name: "Dr. Rahul Mehra",
    specialization: "Dermatologist",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754229206/ChatGPT_Image_Aug_3_2025_07_01_42_PM_apabga.png",
    availability: "Fully Booked",
    schedule: "Mon-Fri: 10 AM - 4 PM",
    description:
      "Specialist in skin disorders, cosmetic dermatology, and laser treatments.",
    rating: 4.7,
    study: "MBBS, MD Dermatology – Kasturba Medical College",
  },
  {
    id: 3,
    name: "Dr. Sneha Verma",
    specialization: "Pediatrician",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754229394/ChatGPT_Image_Aug_3_2025_07_07_21_PM_xourwi.png",
    availability: "Available Today",
    schedule: "Tue-Sat: 11 AM - 6 PM",
    description:
      "Passionate about child care with a focus on nutrition and immunity.",
    rating: 4.8,
    study: "MBBS, DCH – PGI Chandigarh",
  },
  {
    id: 4,
    name: "Dr. Arjun Patel",
    specialization: "Orthopedic Surgeon",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754228980/ChatGPT_Image_Aug_3_2025_06_59_50_PM_jevyk6.png",
    availability: "On Leave",
    schedule: "Mon, Wed, Fri: 9 AM - 1 PM",
    description:
      "Experienced in joint replacements, fractures, and spine surgery.",
    rating: 4.6,
    study: "MS Orthopedics – CMC Vellore",
  },
  {
    id: 5,
    name: "Dr. Meera Joshi",
    specialization: "Neurologist",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754229206/ChatGPT_Image_Aug_3_2025_07_01_42_PM_apabga.png",
    availability: "Available Today",
    schedule: "Mon-Fri: 8 AM - 2 PM",
    description:
      "Skilled in treating epilepsy, migraine, and neurodegenerative diseases.",
    rating: 4.9,
    study: "DM Neurology – NIMHANS Bengaluru",
  },
  {
    id: 6,
    name: "Dr. Karan Bhatt",
    specialization: "General Physician",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754229206/ChatGPT_Image_Aug_3_2025_07_08_56_PM_jjeybp.png",
    availability: "Available Today",
    schedule: "All Days: 10 AM - 8 PM",
    description:
      "Family doctor known for precise diagnosis and patient-centered care.",
    rating: 4.5,
    study: "MBBS – BJMC Pune",
  },
  {
    id: 7,
    name: "Dr. Nisha Reddy",
    specialization: "Gynecologist",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754228980/ChatGPT_Image_Aug_3_2025_06_59_50_PM_jevyk6.png",
    availability: "Fully Booked",
    schedule: "Tue-Thu: 12 PM - 6 PM",
    description:
      "Experienced in obstetrics, infertility treatment, and women's wellness.",
    rating: 4.8,
    study: "MS Obstetrics & Gynecology – JIPMER Puducherry",
  },
  {
    id: 8,
    name: "Dr. Aman Kapoor",
    specialization: "Psychiatrist",
    profileImg:
      "https://res.cloudinary.com/dzqfuqpu4/image/upload/v1754229048/ChatGPT_Image_Aug_3_2025_07_05_59_PM_h5jo6w.png",
    availability: "Available Today",
    schedule: "Mon-Sat: 10 AM - 5 PM",
    description: "Specialist in mood disorders, anxiety, and psychotherapy.",
    rating: 4.7,
    study: "MD Psychiatry – Maulana Azad Medical College",
  },
];

//api to get list of doctors
app.get("/", (request, response) => {
  response.send(doctors);
});

//specific doctor about api
app.get("/doctor/:id", (request, response) => {
  const { id } = request.params;

  const doctor = doctors.find((each) => each.id === parseInt(id));
  if (doctor) {
    response.send([doctor]);
  } else {
    response.status(404).send({ error: "Doctor not found" });
  }
});

//form api data
app.get("/book/:id", (request, response) => {
  const { id } = request.params;

  const doctor = doctors.find((each) => each.id === parseInt(id));
  if (doctor) {
    response.send([doctor]);
  } else {
    response.status(404).send({ error: "Doctor not found" });
  }
});
