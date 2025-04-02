"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use Next.js Router for navigation

function SearchByCategory() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("interns");

  return (
    <div className="container-fluid bg-light py-3">
      <div className="d-flex flex-wrap justify-content-center gap-3 py-2 text-center">
        <button
          className={`btn  px-5 py-2 flex-grow-1 flex-md-grow-0 ${
            activeButton === "interns" ? "bg-primary text-white" : "border border-black text-black"
          }`}
          onClick={() => {
            setActiveButton("interns");
            router.push("/searchintern"); // Use router instead of window.location
          }}
        >
          Search Interns
        </button>

        <button
          className={`btn  px-5 py-2 flex-grow-1 flex-md-grow-0 ${
            activeButton === "startups" ? "bg-primary text-white" : "border border-black text-black"
          }`}
          
          onClick={() => {
            setActiveButton("startups");
            alert("Search Startups/Companies Clicked");
          }}
        >
          Search Startups/Companies
        </button>

        <button
          className={`btn  px-5 py-2 flex-grow-1 flex-md-grow-0 ${
            activeButton === "courses" ? "bg-primary text-white" : "border border-black text-black"
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
