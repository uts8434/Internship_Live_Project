"use client";
import React from "react";
import "@/app/globals.css";

function Opportunity({ activeinternship = [] }) {
  const groupedInternships = activeinternship.reduce((acc, internship) => {
    if (!acc[internship.domain]) {
      acc[internship.domain] = [];
    }
    acc[internship.domain].push({
      name: internship.name,
      ApplyLink: internship.ApplyLink,
    });
    return acc;
  }, {});

  return (
    <div className="my-lg-5 -lg-3">
      {Object.entries(groupedInternships).map(
        ([domain, internships], index) => (
          <div
            key={index}
            className="mb-4 rounded-2  shadow-sm overflow-hidden border"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="d-flex  align-items-center justify-content-center gap-2 px-3 py-2 fw-semibold gradient-bg text-white ">
              {domain}
            </div>

            <ul className="list-unstyled text-start px-4 py-3 bg-body ">
              {internships.map((internship, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={internship.ApplyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="internship-link"
                  >
                    {internship.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default Opportunity;
