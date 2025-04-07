"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
      url: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Utsav Kumar",
      field: "React Development",
      location: "Below 5km",
      qualification: {
        degree: "B.Tech",

        "Passing year": "2024",
        grade: "8.7 CGPA",
      },
      experience: "Fresher",
      opportunity: "Yes",
      mobile: "9876543210",
      email: "utsav@example.com",
      linkedin: "https://linkedin.com/in/utsavkumar",
      github: "https://github.com/utsavdev",
      projects: ["Portfolio Website", "Internship Management Portal"],
      internships: ["Frontend Intern at XYZ Pvt Ltd"],
    },
    {
      url: "https://randomuser.me/api/portraits/men/33.jpg",
      name: "Anil Bhatiya",
      field: "Web Development",
      qualification: {
        degree: "MCA",

        "Passing year": "2024",
        grade: "8.7 CGPA",
      },
      location: "Pan India",
      experience: "1-2 years",
      opportunity: "No",
      mobile: "9123456780",
      email: "anilb@example.com",
      linkedin: "https://linkedin.com/in/anilbhatiya",
      github: "",
      projects: ["E-commerce Site", "Blog Engine"],
      internships: ["Web Developer Intern at ABC Corp"],
    },
    {
      url: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "Amit Singh",
      field: "Database",
      qualification: {
        degree: "M.Tech",

        "Passing year": "2024",
        grade: "8.7 CGPA",
      },
      location: "Between 15-20km",
      experience: "3+ years",
      opportunity: "Yes",
      mobile: "9988776655",
      email: "amit@example.com",
      linkedin: "https://linkedin.com/in/amitsingh",
      github: "https://github.com/amitcoder",
      projects: ["Inventory System", "Database Migration Tool"],
      internships: ["DB Analyst at DataWorks"],
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
    <div className="mt-5 body_bg">
      {/* Filters Section */}
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 p-4 bg-white shadow rounded-4 mx-auto"
        style={{ maxWidth: "850px" }}
      >
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
            style={{
              backgroundColor: "#ffede8",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <h5 className="text-danger">Applied Filters:</h5>
            <div className="d-flex flex-wrap gap-2">
              {Object.entries(filters)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, value]) => (
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
                <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                  <div
                    className="badge text-white text-center px-4 py-2 mb-3 mx-auto mx-md-0"
                    style={{
                      backgroundColor: "#3AA0FA",
                      maxWidth: "90%", 
                      fontSize: "0.95rem",
                      borderRadius: "999px", 
                      wordBreak: "break-word",
                    }}
                  >
                    {student.field}
                  </div>

                  <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-1 gap-lg-4">
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
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
                      <p className="fw-bold text-light mt-2 text-nowrap">
                        {student.name}
                      </p>
                    </div>

                    <div className="d-flex w-100 justify-content-center flex-column">
                      <div
                        className="badge px-3 py-1 mb-2 text-white"
                        style={{ backgroundColor: "#3AA0FA" }}
                      >
                        Qualification
                      </div>
                      <ul className="list-unstyled text-nowrap text-start small mb-3">
                        {student.qualification &&
                          Object.entries(student.qualification).map(
                            ([degree, score], index) => (
                              <li key={index}>
                                <strong>{degree.toUpperCase()}:</strong>&nbsp;{" "}
                                {score}
                              </li>
                            )
                          )}
                      </ul>
                    </div>

                    <div className="d-flex w-100 justify-content-center flex-column">
                      <div
                        className="badge px-3 py-1 mb-2 text-white"
                        style={{ backgroundColor: "#F9A826" }}
                      >
                        Projects
                      </div>
                      <ul className="list-unstyled text-start text-nowrap small mb-3 ">
                        {student.projects.map((proj, i) => (
                          <li key={i}> {proj}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="d-flex justify-content-center flex-column">
                      <div className="badge px-3 py-1 mb-2 bg-success text-white">
                        Internships
                      </div>
                      <ul className="list-unstyled text-start small mb-3">
                        {student.internships.map((intern, i) => (
                          <li key={i}> {intern}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center text-center mt-3 mt-md-0">
                      <div className="mb-2 fw-semibold">
                        <span className="text-success text-nowrap">
                          Open For Opportunity
                        </span>
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
                  <div
                    className="container-fluid p-3 w-100 rounded-3 shadow-sm text-center"
                    style={{
                      backgroundColor: "#1c2b3a",
                      color: "#ffffff",
                    }}
                  >
                    <div
                      className="badge px-3 w-100 py-1 mb-2  text-white text-center"
                      style={{ backgroundColor: "#6366F1" }}
                    >
                      Communication Details
                    </div>
                    <div className="d-flex  gap-lg-5 flex-wrap gap-3  flex-lg-row  small text-light align-content-center justify-content-center">
                      <span>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="me-2 text-warning"
                        />
                        <Link
                          href={`mailto:${student.email}`}
                          className="text-light"
                        >
                          {student.email}
                        </Link>
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="me-2 text-info"
                        />
                        <Link
                          href={`tel:${student.mobile}`}
                          className="text-light"
                        >
                          {student.mobile}
                        </Link>
                      </span>
                      {student.linkedin && (
                        <span>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="me-2 text-primary"
                          />
                          <a
                            href={student.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-light"
                          >
                            LinkedIn Profile
                          </a>
                        </span>
                      )}
                      {student.github && (
                        <span>
                          <FontAwesomeIcon
                            icon={faGithub}
                            className="me-2 text-white"
                          />
                          <a
                            href={student.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light"
                          >
                            GitHub Profile
                          </a>
                        </span>
                      )}
                      {student.portfolio && (
                        <span>
                          <FontAwesomeIcon
                            icon={faGlobe}
                            className="me-2 text-success"
                          />
                          <a
                            href={student.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none text-light"
                          >
                            Portfolio
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
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
