import React from "react";

function Course({ coursedata }) {


  return (
    <div className="mt-5 h-25">
      <div className="card position-relative">
        {/*for  Displaying only "Trending" or "Best Seller" */}
        {coursedata.label === "Trending" && (
          <div
            className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1"
            style={{ borderRadius: "0 0 5px 0", fontWeight: "bold" }}
          >
            Trending
          </div>
        )}
        {coursedata.label === "Best Seller" && (
          <div
            className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
            style={{ borderRadius: "0 0 5px 0", fontWeight: "bold" }}
          >
            Best Seller
          </div>
        )}

        <img
          src={coursedata.imageurl}
          className="card-img-top"
          alt={coursedata.coursename}
        />
        <div className="card-body">
          <h5 className="card-title">{coursedata.coursename}</h5>
          {coursedata.advantage && coursedata.advantage.length > 0 && (
            <ul className="list-unstyled text-start overflow-hidden">
              {coursedata.advantage.map((item, idx) => (
                <li key={idx}>✅ {item}</li>
              ))}
            </ul>
          )}
          <a href="#" className="btn btn-success fw-bold px-3 py-2">
            Enroll now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Course;
