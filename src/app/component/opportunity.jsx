
"use client"
import React from "react";

function Opportunity({ activeinternship = [] }) {

  const groupedInternships = activeinternship.reduce((acc, internship) => {
    if (!acc[internship.domain]) {
      acc[internship.domain] = [];
    }
    acc[internship.domain].push({ name: internship.name, ApplyLink: internship.ApplyLink });
    return acc;
  }, {});

  return (
    <div className="my-5 mx-3">
  {Object.entries(groupedInternships).map(([domain, internships], index) => (
    <div key={index} className="border rounded mb-3 shadow-sm">
      <h5 className="text-white p-2 rounded-top" style={{ backgroundColor: "#1E40AF" }}>
        {domain}
      </h5>
      <ul className="list-unstyled text-start ms-4 my-3">
        {internships.map((internship, idx) => (
          <li key={idx} className="mb-2">
            <a
              href={internship.ApplyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary fw-bold"
            >
              {internship.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  );
}

export default Opportunity;
