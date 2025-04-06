"use client";
import React, { useState } from "react";
import "@/app/globals.css";

function SearchIntern() {
  const [filters, setFilters] = useState({});
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const filterOptions = {
    opportunity: ["Yes", "No"],
    location: ["Below 5km", "Between 15-20km", "Pan India"],
    company: ["All", "MNC", "Startups"],
    field: [
      "Web Development",
      "React Development",
      "Angular Development",
      "Database",
    ],
    duration: ["1 month", "3 months", "6 months", "1 year"],
    stipend: [
      "Unpaid",
      "Up to 10,000",
      "Up to 15,000",
      "Up to 20,000",
      "20,000 or above",
    ],
    remote: ["Yes", "No"],
    skills: [],
    experience: ["Fresher", "1-2 years", "3+ years"],
    availability: ["Immediate", "Within 1 month", "Flexible"],
    qualification: ["12th Pass", "Bachelor's", "Master's", "PhD"],
  };

  const students = [
    {
      url: "https://media.licdn.com/dms/image/v2/D5603AQERaA-5SXyIYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727749661989?e=1748476800&v=beta&t=IbS5jNk2Zdpyt29N3cpTu5qRRavp6HUDfXm8VvssQ4Y",
      name: "Utsav Kumar",
      field: "React Development",
      location: "Below 5km",
      qualification: "MCA",
      experience: "Fresher",
      opportunity: "Yes",
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D5603AQERaA-5SXyIYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727749661989?e=1748476800&v=beta&t=IbS5jNk2Zdpyt29N3cpTu5qRRavp6HUDfXm8VvssQ4Y",
      name: "Anil Bhatiya",
      field: "Web Development",
      qualification: "B SC. IT",
      location: "Pan India",
      experience: "1-2 years",
      opportunity: "No",
    },
    {
      url: "https://media.licdn.com/dms/image/v2/D5603AQERaA-5SXyIYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727749661989?e=1748476800&v=beta&t=IbS5jNk2Zdpyt29N3cpTu5qRRavp6HUDfXm8VvssQ4Y",
      name: "Amit Singh",
      field: "Database",
      qualification: "BCA",
      location: "Between 15-20km",
      experience: "3+ years",
      opportunity: "Yes",
    },
  ];

  const filteredStudents = students.filter((student) =>
    Object.entries(filters).every(
      ([key, value]) => student[key.toLowerCase()] === value
    )
  );

  const handleApplyFilter = () => {
    if (selectedValue && inputValue.trim()) {
      setFilters((prev) => ({ ...prev, [selectedValue]: inputValue }));
      setInputValue("");
    }
  };

  const handleResetFilters = () => {
    setFilters({});
    setSelectedValue("");
    setInputValue("");
  };

  const handleRemoveFilter = (key) => {
    setFilters((prev) => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  return (
    <div className="mt-5 body_bg" >
      {/* Filter Controls */}
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-4 bg-white shadow rounded-4 mx-auto"
        style={{ maxWidth: "850px" }}
      >
        {/* Filter Option Selection */}
        <div className="d-flex flex-column flex-md-row align-items-center gap-2 w-100">
          <label className="fw-bold text-dark text-nowrap mb-1 mb-md-0">
            Apply Filter:
          </label>
          <select
            className="form-select flex-grow-1"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option disabled value="">
              Select Filter Option
            </option>
            {Object.keys(filterOptions).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Value Input */}
        {selectedValue && (
          <div className="w-100">
            {filterOptions[selectedValue].length > 0 ? (
              <select
                className="form-select"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              >
                <option disabled value="">
                  Select {selectedValue}
                </option>
                {filterOptions[selectedValue].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder={`Enter ${selectedValue}...`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            )}
          </div>
        )}

        {/* Apply & Reset Buttons */}
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-success px-4 rounded-3"
            onClick={handleApplyFilter}
          >
            Apply
          </button>
          <button
            className="btn btn-outline-danger px-4 rounded-3"
            onClick={handleResetFilters}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Applied Filters */}
      <div className="mt-3 px-4">
        {Object.keys(filters).length > 0 ? (
          <div
            className="p-3 rounded-3 shadow-sm"
            style={{ backgroundColor: "#ffede8", marginLeft: "20%", marginRight: "20%"}}
          >
            <h5 className="text-danger">Applied Filters:</h5>
            <div className="d-flex flex-wrap gap-2" >
              {Object.entries(filters).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white p-2 rounded-3 d-flex align-items-center shadow-sm"
                >
                  <span className="text-dark">
                    {key}: {value}
                  </span>
                  <button
                    className="btn-close ms-2"
                    onClick={() => handleRemoveFilter(key)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="bg-white text-black p-3 rounded-3 shadow-sm text-start"
            style={{ marginLeft: "20%", marginRight: "20%" }}
          >
            No filters applied
          </div>
        )}
      </div>

      {/* Student Cards */}
      <div className="mt-4 ms-2 me-2">
        <h3 className="text-center pt-4 fw-bold text-light">
          Student Profiles
        </h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 pt-2 pb-5">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <div
                key={index}
                className="transition-card d-flex align-items-center justify-content-between flex-column flex-md-row rounded-4 px-sm-3 px-lg-5 py-3 shadow-lg"
                style={{
                  width: "100%",
                  maxWidth: "850px",
                  background: "linear-gradient(to right, #0d1b2a, #1b263b)",
                  color: "#f1f1f1",
                  borderLeft: "10px solid #3AA0FA",
                }}
              >
                <div className="d-flex justify-content-center align-items-center flex-column text-center mb-3 mb-md-0">
                  <img
                    src={student.url}
                    alt=""
                    className="rounded-circle border border-3"
                    style={{
                      width: "85px",
                      height: "85px",
                      objectFit: "cover",
                      borderColor: "#3AA0FA",
                    }}
                  />
                  <h5 className="fw-bold text-light mt-2">{student.name}</h5>
                </div>

                <div className="text-center text-md-start px-3">
                  <span className="badge px-3 py-1 mb-2 bg-success text-white">
                    {student.field}
                  </span>
                  <ul className="list-unstyled text-start small mb-3">
                    <li>
                      <strong>Qualification:</strong> {student.qualification}
                    </li>
                    <li>
                      <strong>Location:</strong> {student.location}
                    </li>
                    <li>
                      <strong>Experience:</strong>{" "}
                      {student.experience || "Fresher"}
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-column align-items-center justify-content-center text-center mt-3 mt-md-0">
                  <div className="mb-2 fw-semibold">
                    <span className="text-success">Open For Opportunity</span>
                  </div>
                  <button
                    className={`btn px-4 py-2 fw-semibold ${
                      student.opportunity === "Yes"
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                    onClick={() => alert(`Mailed to ${student.name}`)}
                    style={{ borderRadius: "20px" }}
                  >
                    {student.opportunity}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">
              No matching profiles found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchIntern;
