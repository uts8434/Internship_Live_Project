"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js Router for navigation
// import "@/app/globals.css";

function SearchByCategory() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="container-fluid  py-3" style={{backgroundColor:"#171717"}} >

      <div className="d-flex flex-wrap justify-content-center gap-3 py-2 text-center" >
        <button
          className={`btn text-white px-5 py-2 flex-grow-1 flex-md-grow-0 ${
            activeButton === "interns" ? "btn_bg text-white" : "border border-white "
          }`}
          onClick={() => {
            setActiveButton("interns");
            router.push("/searchintern"); // Use router instead of window.location
          }}
        >
          Search Interns
        </button>

        <button
          className={`btn text-white px-5 py-2 flex-grow-1 flex-md-grow-0 ${
            activeButton === "startups" ? "btn_bg text-white" : "border border-white"
          }`}
          
          onClick={() => {
            setActiveButton("startups");
            alert("Search Startups/Companies Clicked");
          }}
        >
          Search Startups/Companies
        </button>

        <button
          className={`btn text-white  px-5 py-2 flex-grow-1 flex-md-grow-0 ${
            activeButton === "courses" ? "btn_bg text-white" : "border border-white"
          }`}
    
          onClick={() => {
            setActiveButton("courses");
            alert("Search Courses Clicked");
          }}
        >
          Search Courses
        </button>
      </div>
    </div>
  );
}

export default SearchByCategory;
