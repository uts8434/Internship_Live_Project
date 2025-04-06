"use client";
import React from "react";
import "@/app/globals.css";
import { Star } from "lucide-react"; // optional: for rating stars

function Course({ coursedata }) {
  return (
    <div className="mt-2 px-1">
      <div
        className="card shadow-lg border-0 rounded-2 overflow-hidden bg-dark text-light transition-card"
        style={{ maxWidth: "400px", margin: "auto", position: "relative" }}
      >
        {/* Label Badge */}
        {coursedata.label && (
          <div
            className={`position-absolute top-0 start-0 px-3 py-1 rounded-bottom-end fw-bold d-flex align-items-center gap-2 text-sm ${
              coursedata.label === "Trending"
                ? "bg-danger text-white"
                : "bg-warning text-dark"
            }`}
            style={{ fontSize: "0.85rem" }}
          >
            {coursedata.label === "Trending" ? "" : ""} {coursedata.label}
          </div>
        )}

        {/* Course Image */}
        <img
          src={coursedata.imageurl}
          className="img-fluid"
          alt={coursedata.coursename}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body body_bg px-4 pb-4 pt-3">
          <h5 className="card-title fw-bold ">{coursedata.coursename}</h5>


          {/* Advantages */}
          {coursedata.advantage?.length > 0 && (
            <ul className="list-unstyled text-start mt-2 mb-4 small text-light-emphasis">
              {coursedata.advantage.map((item, idx) => (
                <li key={idx} className="mb-1">
                  ✅ {item}
                </li>
              ))}
            </ul>
          )}

          <div className="d-flex align-items-center gap-2 mb-3 text-warning">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} />
            <span className="ms-2 text-light small">4.0 (1.2k reviews)</span>
          </div>

          <a
            href="#"
            className="btn btn-success w-100 fw-semibold py-2 transition-card"
            style={{ borderRadius: "12px", letterSpacing: "0.5px" }}
          >
            Enroll Now 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Course;
