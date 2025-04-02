"use client"
import React, { useState } from "react";

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
      name: "Anil bhatiya",
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
      setFilters((prev) => ({
        ...prev,
        [selectedValue]: inputValue,
      }));
      setInputValue("");
    }
  };

  const handleResetFilters = () => {
    setFilters({});
    setSelectedValue("");
    setInputValue("");
  };

  const handleRemoveFilter = (key) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[key];
      return updatedFilters;
    });
  };

  return (
    <div className="py-4" style={{ backgroundColor: "#f5f5f5" }}>
      <div
  className="d-flex flex-column flex-md-row justify-content-evenly align-items-center m-auto w-100 p-3 rounded-3 shadow-sm"
  style={{ backgroundColor: "#f0f9ff", maxWidth: "800px" }}
>
  {/* Apply Filter Label and First Select Dropdown */}
  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-4 mb-3 mb-md-0 w-100">
    <b className="text-dark text-nowrap">Apply Filter</b>
    <select
      className="form-select w-100 w-md-auto"
      aria-label="Internship filter options"
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option disabled value="">
        Select Filter Option
      </option>
      {Object.keys(filterOptions).map((option) => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  </div>

  {/* Conditional Second Select Dropdown or Input Field */}
  {selectedValue && (
    <div className="d-flex justify-content-center align-items-center w-100 mb-3 mb-md-0">
      {filterOptions[selectedValue].length > 0 ? (
        <select
          className="form-select w-100 w-md-auto"
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
          className="form-control w-100 w-md-auto"
          placeholder={`Enter ${selectedValue}...`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </div>
  )}

  {/* Apply and Reset Buttons */}
  <div className="d-flex gap-3 w-100 w-md-auto justify-content-center">
    <button className="px-4 rounded-4 btn btn-success" onClick={handleApplyFilter}>
      Apply
    </button>
    <button
      className="px-4 rounded-4 btn btn-outline-danger"
      onClick={handleResetFilters}
    >
      Reset
    </button>
  </div>
</div>


      <div className="mt-3 px-4">
        {Object.keys(filters).length > 0 ? (
          <div
            className="p-3 rounded-3 shadow-sm"
            style={{ backgroundColor: "#ffede8" }}
          >
            <h5 className="text-danger">Applied Filters:</h5>
            <div className="d-flex flex-wrap gap-2">
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
          <div className="bg-white p-3 rounded-3 shadow-sm " style={{marginLeft:"20%", marginRight:"20%"}}>
            No filters applied
          </div>
        )}
      </div>

      <div className="mt-4  ">
        <h3 className="text-center pt-4 fw-bold">Student Profiles</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 pt-2 pb-5">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between flex-column flex-md-row bg-light rounded px-sm-3 px-lg-5 py-2 shadow-lg"
                style={{ width: "100%", maxWidth: "800px" }}
              >
                {/* Image and Name Section */}
                <div className="d-flex justify-content-center align-items-center flex-column text-center mb-3 mb-md-0">
                  <img
                    src={student.url}
                    alt=""
                    className="rounded-circle border"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="fw-bold mb-1">{student.name}</h5>
                </div>

                {/* Details Section */}
                <div className="text-center text-md-start">
                  <p className="text-muted small mb-2">{student.field}</p>
                  <ul className="list-unstyled text-start small mb-3">
                    <li>
                      <strong>Field:</strong> {student.field}
                    </li>
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

                {/* Button Section */}
                <div className="d-flex flex-column align-items-center text-center mt-3 mt-md-0">
                  <div className="mb-3">
                    <strong>Open For Opportunity</strong>
                  </div>
                  <button
                    className={`btn px-5 py-2 ${
                      student.opportunity === "Yes"
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                    onClick={() => alert(`Mailed to  ${student.name}`)}
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
