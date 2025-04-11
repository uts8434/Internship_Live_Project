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
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "@/app/globals.css";
import Image from "next/image";

const Navbar = () => {
  const [searchbar, setSearchBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [startY, setStartY] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const isSmallScreen = window.innerWidth < 768;
    if (isSmallScreen) setShowPopup(true);
  }, []);

  const navItems = [
    { href: "/", icon: faHome, label: "Home" },
    { href: "/network", icon: faUser, label: "Network" },
    { href: "/messaging", icon: faComments, label: "Messaging" },
    { href: "/notification", icon: faBell, label: "Notifications" },
    { href: "#", icon: faUser, label: "Profile",children: [
      { href: "#profile", label: "View Profile" },
      { href: "#Applied_Form", label: "Applied Form" },
    ], },
  ];

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

  const showSearchBar = () => {
    setSearchBar((prev) => !prev);
  };
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
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

      {/*  Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark gradient-bg border-bottom Shadow ">
        {/*for web view  */}
        <div className="container-fluid d-lg-flex d-none align-items-center justify-content-between w-100 gap-3">
        
          <div className="d-none d-lg-block fw-bold text-white fs-5">
            CareerLaunchPad
          </div>

          <div className={` d-lg-flex  d-none `}>
            <ul className="navbar-nav text-start ms-auto d-flex align-items-center gap-3">
              {navItems.map(({ href, icon, label }) => (
                <li className="nav-item" key={label}>
                  <Link
                    className="nav-link d-flex flex-lg-column align-items-center"
                    href={href}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      className="mb-lg-1 me-lg-0 me-2"
                    />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}

              {/* <li className="nav-item dropdown position-static">
                <a
                  className="nav-link dropdown-toggle d-flex flex-lg-column align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mb-lg-1 me-lg-0 me-2"
                  />
                  <span>Profile</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end mt-2 p-2 shadow rounded-3">
                  <li>
                    <Link className="dropdown-item" href="/profile">
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/applications">
                      Applied Form
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/report">
                      Report Fraud
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Mobile: view + Search + Bell */}
        <div className="d-lg-none d-flex container-fluid align-items-center justify-content-between w-100 gap-3">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <button
                className="btn btn-outline-light border-0 p-2"
                data-bs-toggle="offcanvas"
                data-bs-target="#myOffcanvas"
                type="button"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <a href="/">
                <img
                  src="/LookIntern_Logo.png"
                  width="50"
                  alt="Brand Logo"
                  className="rounded-5 object-fit-cover"
                />
              </a>
            </div>

            <div className="d-flex gap-4 align-items-center">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={showSearchBar}
                style={{ cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faBell}
                size="lg"
                className="text-white"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="myOffcanvas"
            aria-labelledby="offcanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                Look Intern
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body gradient-bg">
              <ul className="nav flex-column gap-3 ">
                {navItems.map(({ href, icon, label }) => (
                  <li className="nav-item" key={label}>
                    <Link
                      className="nav-link d-flex align-items-center gap-2 text-white"
                      href={href}
                      onClick={() => {
                        
                        const closeBtn = document.querySelector('[data-bs-dismiss="offcanvas"]');
                        closeBtn?.click(); 
                      }}
                    >
                      <FontAwesomeIcon icon={icon} />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center pt-2 w-100">
        {searchbar && (
          <>
            <div className="d-flex d-lg-none justify-content-center align-items-center w-100 bg-light  rounded-pill pe-2 ps-4   mx-3">
              <input
                type="search"
                className="d-lg-none d-flex  text-start  py-1 border-0   w-100"
                style={{ outline: "none" }}
                placeholder="Search internship, course etc"
                list="search-suggestions"
              />

              <div className="text-center ms-1 mt-1">
                <FontAwesomeIcon
                  className="gradient-bg p-2 rounded-circle"
                  icon={faPaperPlane}
                />
              </div>
            </div>
            <datalist id="search-suggestions">
              <option value="Web Development" />
              <option value="AI & ML" />
              <option value="Data Science" />
              <option value="Internships" />
              <option value="Trending Courses" />
            </datalist>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
