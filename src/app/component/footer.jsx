"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBuilding,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("home");

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: faHome,
      action: () => router.push("/"),
    },
    {
      id: "interns",
      label: "Interns",
      icon: faSearch,
      action: () => router.push("/searchintern"),
    },
    {
      id: "startups",
      label: "Startups",
      icon: faBuilding,
      action: () => alert("Search Startups/Companies Clicked"),
    },
    {
      id: "courses",
      label: "Courses",
      icon: faGraduationCap,
      action: () => alert("Search Courses Clicked"),
    },
  ];

  return (
    <footer
      className="position-fixed bottom-0 start-0 end-0 bg-dark text-white d-lg-none"
      style={{ zIndex: 1000 }}
    >
      <div className="d-flex justify-content-around align-items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`btn d-flex flex-column align-items-center justify-content-center text-white ${
              activeButton === item.id ? "text-primary" : "text-white-50"
            }`}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              fontSize: "0.9rem",
            }}
            onClick={() => {
              setActiveButton(item.id);
              item.action();
            }}
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="small mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
