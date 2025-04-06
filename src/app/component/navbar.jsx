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
  faSearch,
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

  useEffect(() => {
    setHasMounted(true);
    const isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen) setShowPopup(true);
  }, []);

  // Swipe logic
  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchEnd = (e) => {
    if (startY !== null) {
      const endY = e.changedTouches[0].clientY;
      const deltaY = endY - startY;
      if (deltaY > 50) setShowPopup(false);
      else if (deltaY < -50) setShowPopup(true);
    }
    setStartY(null);
  };

  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setIsDragging(true);
  };
  const handleMouseUp = (e) => {
    if (isDragging && startY !== null) {
      const endY = e.clientY;
      const deltaY = endY - startY;
      if (deltaY > 50) setShowPopup(false);
      else if (deltaY < -50) setShowPopup(true);
    }
    setStartY(null);
    setIsDragging(false);
  };

  return (
    <>
      {/* 🔐 Swipeable Login/Signup Popup */}
      {hasMounted && showPopup && (
        <div
          className="position-fixed bottom-0 start-0 end-0 shadow-lg rounded-top-4"
          style={{
            zIndex: 1050,
            background: "linear-gradient(to right, #0d1b2a, #1b263b)",
            transition: "transform 0.3s ease-in-out",
            animation: "slideUp 0.4s ease-out",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="w-100 d-flex justify-content-center pt-2">
            <div
              className="rounded-pill bg-secondary"
              style={{ width: "50px", height: "6px", opacity: 0.6 }}
            />
          </div>
          <div className="text-center p-4">
            <h5 className="fw-bold text-white">Welcome Back!</h5>
            <p className="mb-3 text-white">
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

      {/* 🧭 Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark gradient-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "0.7em 1em",
          boxShadow: "1px 1px 2px white",
          zIndex: 1000,
        }}
      >
        {/* Wrapper for all navbar content */}
        <div className="container-fluid d-flex align-items-center justify-content-between w-100 gap-3">
          {/* Brand (only visible on large) */}
          <div className="d-none d-lg-block fw-bold text-white fs-5">
            CareerLaunchPad
          </div>

          {/* Mobile: Toggle + Search + Bell */}
          <div className="d-flex d-lg-none align-items-center flex-grow-1 gap-2">
            <button
              className="btn btn-outline-light border-0 p-2"
              type="button"
              onClick={toggleNavbar}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="flex-grow-1 position-relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-secondary position-absolute"
                style={{
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                type="search"
                className="form-control rounded-pill ps-5"
                placeholder="Search"
                style={{ height: "36px" }}
              />
            </div>

            <FontAwesomeIcon
              icon={faBell}
              size="lg"
              className="text-white"
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* Navbar Links (collapsed in mobile) */}
          <div
            className={`navbar-collapse d-lg-flex ${
              isOpen ? "mobile-show" : "mobile-hide"
            }`}
          >
            <ul className="navbar-nav text-start ms-auto d-flex align-items-center gap-3">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
