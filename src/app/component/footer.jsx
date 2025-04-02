"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-dark text-white pt-4 mt-4 ">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              laborum!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-white text-decoration-none"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="text-white text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white text-decoration-none">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <Link
                href="#facebook"
                className="text-white me-3 social-icon"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </Link>
              <Link
                href="#twitter"
                className="text-white me-3 social-icon"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>
              <Link
                href="#linkedin"
                className="text-white me-3 social-icon"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </Link>
              <Link
                href="#instagram"
                className="text-white social-icon"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-3">
          <p className="mb-0">
            &copy; {year} CareerLaunchPad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
