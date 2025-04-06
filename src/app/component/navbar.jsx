"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUser,
  faBell,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false); // Function to close navbar

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark gradient-bg "
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        boxShadow: "1px 1px 2px white",
        
        padding: "0.7em 2em",
    
        zIndex: 1000, // ensures it stays above other content
      }}
      
      
    >
      {/* Left Section - Brand Name */}
      <div className="navbar-brand fw-bold">CareerLaunchPad</div>

      {/* Hamburger Icon (Mobile View) */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={isOpen ? "true" : "false"}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        style={{ marginRight: "8%" }}
      >
        <ul className="navbar-nav ms-auto" style={{ gap: "5%" }}>
          <li className="nav-item">
            <Link
              className="nav-link d-flex flex-lg-column align-items-center"
              href="/"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faHome} className="mb-lg-1 me-lg-0 me-2" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex flex-lg-column align-items-center"
              href="/network"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faUser} className="mb-lg-1 me-lg-0 me-2" />
              <span>Network</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex flex-lg-column align-items-center"
              href="/messaging"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon
                icon={faComments}
                className="mb-lg-1 me-lg-0 me-2"
              />
              <span>Messaging</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex flex-lg-column align-items-center"
              href="/notification"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faBell} className="mb-lg-1 me-lg-0 me-2" />
              <span>Notifications</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex flex-lg-column align-items-center"
              href="#"
              onClick={closeNavbar}
            >
              <FontAwesomeIcon icon={faUser} className="mb-lg-1 me-lg-0 me-2" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
