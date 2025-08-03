import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./index.css";

const BookAppointment = () => {
  const { id } = useParams();
  const [doctors, setDoctor] = useState([]);
  const doctor = doctors.find((d) => d.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const getData = async () => {
    const url = `https://bookappointment-89cu.onrender.com/book/${id}`;
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setDoctor(data);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Your appointment has been booked successfully.");
  };

  if (!doctor) return <div>Doctor not found.</div>;

  return (
    <div className="appointment-container">
      <h1 className="appointment-title">
        Book an Appointment with {doctor.name}
      </h1>
      {!submitted ? (
        <>
          <form onSubmit={handleSubmit} className="appointment-form">
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              className="form-input"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              onChange={handleChange}
              required
            />
            <input
              type="datetime-local"
              name="datetime"
              className="form-input"
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Confirm Appointment
            </button>
          </form>
          <div className="home-and-profile-back-buttons-container">
            <button className="home-back-button" onClick={() => navigate("/")}>
              Home
            </button>
            <Link to={`/doctor/${doctor.id}`}>
              <button className="profile-back-button">About Doctor</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="confirmation-msg">
          Appointment booked successfully for {formData.datetime}!
          <div className="home-and-profile-back-buttons-container">
            <button className="home-back-button" onClick={() => navigate("/")}>
              Home
            </button>
            <Link to={`/doctor/${doctor.id}`}>
              <button className="profile-back-button">About Doctor</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
