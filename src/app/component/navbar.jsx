"use client";
import React, { useState, useEffect } from "react";
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
  const [showPopup, setShowPopup] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [startY, setStartY] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  // Show popup on load for small screens
  useEffect(() => {
    setHasMounted(true);
    const isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen) {
      setShowPopup(true);
    }
  }, []);

  // Swipe detection for mobile
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (startY !== null) {
      const endY = e.changedTouches[0].clientY;
      const deltaY = endY - startY;
      if (deltaY > 50) {
        setShowPopup(false); // swipe down
      } else if (deltaY < -50) {
        setShowPopup(true); // swipe up
      }
    }
    setStartY(null);
  };

  // Mouse drag for desktop DevTools testing
  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setIsDragging(true);
  };

  const handleMouseUp = (e) => {
    if (isDragging && startY !== null) {
      const endY = e.clientY;
      const deltaY = endY - startY;
      if (deltaY > 50) {
        setShowPopup(false); // drag down
      } else if (deltaY < -50) {
        setShowPopup(true); // drag up
      }
    }
    setStartY(null);
    setIsDragging(false);
  };

  return (
    <>
      {/* Popup for login/signup */}
      {hasMounted && showPopup && (
        <div
          className="position-fixed bottom-0 start-0 end-0 bg-white shadow-lg rounded-top-4"
          style={{
            zIndex: 1050,
            transition: "transform 0.3s ease-in-out",
            animation: "slideUp 0.4s ease-out",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* 🟢 Swipe Handle Bar */}
          <div
            className="w-100 d-flex justify-content-center"
            style={{ paddingTop: "10px" }}
          >
            <div
              className="rounded-pill bg-secondary"
              style={{
                width: "50px",
                height: "6px",
                opacity: 0.6,
              }}
            ></div>
          </div>

          <div className="text-center p-4">
            <h5 className="fw-bold text-black">Welcome Back!</h5>
            <p className="mb-3 text-black">
              Please log in or sign up to continue
            </p>
            <div className="d-grid gap-2">
              <button className="btn btn-primary rounded-pill">Log In</button>
              <button className="btn btn-outline-primary rounded-pill">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark gradient-bg"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          boxShadow: "1px 1px 2px white",
          padding: "0.7em 2em",
          zIndex: 1000,
        }}
      >
        <div className="navbar-brand fw-bold">CareerLaunchPad</div>

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
            {[
              { href: "/", icon: faHome, label: "Home" },
              { href: "/network", icon: faUser, label: "Network" },
              { href: "/messaging", icon: faComments, label: "Messaging" },
              { href: "/notification", icon: faBell, label: "Notifications" },
              { href: "#", icon: faUser, label: "Profile" },
            ].map(({ href, icon, label }) => (
              <li className="nav-item" key={label}>
                <Link
                  className="nav-link d-flex flex-lg-column align-items-center"
                  href={href}
                  onClick={closeNavbar}
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="mb-lg-1 me-lg-0 me-2"
                  />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
