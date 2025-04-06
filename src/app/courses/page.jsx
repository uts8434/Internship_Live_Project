import React from "react";
import Course from "../component/course";
import{sortedCourses} from "@/app/component/data"

function page() {
  return (
    <div className="d-flex flex-column flex-lg-row gap-5 mt-5 mx-3">
      {sortedCourses.map((course, index) => (
        <Course key={index} coursedata={course} />
      ))}
    </div>
  );
}

export default page;
