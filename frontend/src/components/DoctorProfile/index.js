import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "./index.css";

const DoctorProfile = () => {
  const { id } = useParams();
  const [doctorAbout, setDoctorAbout] = useState([]);
  // const { id } = useParams();
  // const doctor = doctors.find((d) => d.id === parseInt(id));

  // if (!doctor) return <div>Doctor not found.</div>;

  const navigate = useNavigate();

  const getSingleDoctorInfo = async () => {
    const url = `http://localhost:4000/doctor/${id}`;
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setDoctorAbout(data);
    }
  };

  useEffect(() => {
    getSingleDoctorInfo();
  }, [id]);

  return (
    <div className="profile-main-container">
      {doctorAbout.map((each) => (
        <div key={each.id} className="profile-sub-container">
          <div className="profile-doctor-image-container">
            <img src={each.profileImg} alt="profileImage" />
          </div>
          <div className="profile-doctor-info-container">
            <h2>About</h2>
            <hr className="horizontal-line" />
            <p className="profile-doctor-name">{each.name}</p>
            <p className="spec-para">{each.specialization}</p>
            <p className="study-para">{each.study}</p>
            <hr className="horizontal-line" />
            <p
              className={
                each.availability === "Available Today"
                  ? "available-para"
                  : "available-para-red"
              }
            >
              {each.availability}
            </p>
            <p className="time-para">{each.schedule}</p>
            <hr className="horizontal-line" />
            <p className="desc-para">{each.description}</p>
            <div className="profile-book-appointment-button-container">
              <button
                className="back-button-to-home"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
              <Link to={`/book/${each.id}`}>
                <button className="profile-book-appointment">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorProfile;
