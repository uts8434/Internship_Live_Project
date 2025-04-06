import React from "react";
import Opportunity from "../component/opportunity";
import { internships } from "../component/data";

function page() {
  const groupedInternships = internships.reduce((acc, internship) => {
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
    <div className="d-flex flex-column flex-lg-row flex-wrap gap-4 px-3 my-4">
      {Object.entries(groupedInternships).map(([domain, internships], index) => (
        <div
          key={index}
          className="rounded-3 shadow-sm border"
          style={{
            backgroundColor: "#ffffff",
            
            minWidth: "100%",
          }}
        >
          <div className="d-flex align-items-center justify-content-center gap-2 px-3 py-2 fw-semibold gradient-bg text-white rounded-3 rounded-bottom-0">
            {domain}
          </div>

          <ul className="list-unstyled text-start px-4 py-3 bg-body">
            {internships.map((internship, idx) => (
              <li key={idx} className="mb-2">
                <a
                  href={internship.ApplyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark fw-medium"
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

export default page;
