import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const LandingPage = () => {
  const [doctors, setDoctorsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getDoctorsList = async () => {
      try {
        const response = await fetch("https://bookappointment-89cu.onrender.com");
        const data = await response.json();
        if (response.ok) {
          setDoctorsList(data);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    getDoctorsList();
  }, []);

  // Filter doctors based on search input
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-main-container">
      <div className="home-sub-container">
        <div className="left-container">{/* Optional quote or banner */}</div>
        <div className="right-container">
          <div className="input-search-container">
            <input
              placeholder="Search by Name, Specialization."
              type="text"
              className="home-input-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="doctors-list-container">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((eachDoctor) => (
                <div className="each-doctor-list-container" key={eachDoctor.id}>
                  <div className="profile-img-and-name-spec-container">
                    <div className="image-container">
                      <img src={eachDoctor.profileImg} alt={eachDoctor.name} />
                    </div>
                    <div className="name-and-spec-container">
                      <p className="doctor-name">{eachDoctor.name}</p>
                      <p className="doctor-spec">
                        {eachDoctor.specialization}
                        {" | "}
                        <span
                          className={
                            eachDoctor.availability === "Available Today"
                              ? "home-available-para"
                              : "home-available-para-red"
                          }
                        >
                          {eachDoctor.availability}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="doctor-profile-button-container">
                    <Link to={`/doctor/${eachDoctor.id}`}>
                      <button type="button">Book Now</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-doctor-found-para">
                No doctors found for your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
