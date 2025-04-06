"use client";
import CarouselContent from "./component/carouselcontent";
import SearchByCategory from "./component/searchbycategory";
import Opportunity from "./component/opportunity";
import Feed from "./component/feed";
import Course from "./component/course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useState } from "react";
import { internships, feedData, sortedCourses } from "./component/data";
import "@/app/globals.css";

function Page() {
  const [activeFeed, setActiveFeed] = useState("all");
  return (
    <div style={{ marginBottom: "3%" }}>
      <CarouselContent />

      <SearchByCategory />

      <div className="container-fluid text-center mt-3">
        <div className="row">
          <div className="col-md-3 border border-top-0 border-bottom-0">
            <h4
              className="py-2 btn_bg text-white rounded "
              // style={{ backgroundColor: "#0961BA", color: "white" }}
            >
              OPPORTUNITY
            </h4>
            <Opportunity activeinternship={internships} />
          </div>

          <div className="col-md-6 border border-top-0 border-bottom-0">
            <div className="position-relative">
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
                className="form-control rounded-4 ps-5 border"
                placeholder="Search"
                style={{
                  // outline: "none",
                  boxShadow: "none",
                }}
              />
            </div>

            <div className="container-fluid w-75 mt-4 p-0 rounded-4 shadow-sm overflow-hidden border bg-white">
              <div className="d-flex w-100 text-center">
                {[
                  { id: "all", label: " All Feed" },
                  { id: "college", label: " Your College Feed" },
                  { id: "latest", label: " Latest Feed" },
                ].map((feed) => (
                  <div
                    key={feed.id}
                    onClick={() => setActiveFeed(feed.id)}
                    className="flex-grow-1 fw-semibold py-3 border-end user-select-none"
                    style={{
                      background:
                        activeFeed === feed.id
                          ? "linear-gradient(to right, var(--btn_primary_color), var(--btn_secondary_color))"
                          : "white",
                      color: activeFeed === feed.id ? "white" : "black",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {feed.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 ">
              {feedData.map((post, index) => (
                <Feed
                  key={index}
                  profileImage={post.profileImage}
                  username={post.username}
                  postTime={post.postTime}
                  description={post.description}
                  postImage={post.postImage}
                />
              ))}
            </div>
          </div>

          <div className="d-flex flex-column col-md-3 border border-top-0 border-bottom-0">
            <h4
              className="py-2 btn_bg text-white rounded"
              // style={{ backgroundColor: "#0961BA", color: "white" }}
            >
              COURSES
            </h4>
            <div className="d-flex flex-column gap-4">
              {sortedCourses.map((course, index) => (
                <Course key={index} coursedata={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
