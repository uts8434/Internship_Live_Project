"use client"
import CarouselContent from './component/carouselcontent'
import SearchByCategory from './component/searchbycategory'
import Opportunity from './component/opportunity'
import Feed from './component/feed'
import Course from './component/course'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSearch} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { useState } from 'react';
import { internships,feedData,sortedCourses } from './component/data'

function Page() {
  const [activeFeed, setActiveFeed] = useState("all");
  return (
    <>
      <CarouselContent />

      <SearchByCategory />

      <div className="container-fluid text-center mt-3">
        <div className="row">
          <div className="col-md-3 border border-top-0 border-bottom-0">
            <h4
              className="py-2"
              style={{ backgroundColor: "#0961BA", color: "white" }}
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

            <div className="container-fluid w-75 mt-3 p-0  border ">
              <div className="d-flex w-100">
                <div
                  onClick={() => {
                    setActiveFeed("all");
                  }}
                  className="fw-bold border-end   text-center flex-grow-1 p-3 ${}"
                  style={{
                    backgroundColor: activeFeed === "all" ? "#0961BA" : "white",
                    color: activeFeed === "all" ? "white" : "black",
                  }}
                >
                  All Feed
                </div>
                <div
                  onClick={() => {
                    setActiveFeed("college");
                  }}
                  className="fw-bold border-end flex-grow-1 p-3"
                  style={{
                    backgroundColor:
                      activeFeed === "college" ? "#0961BA" : "white",
                    color: activeFeed === "college" ? "white" : "black",
                  }}
                >
                  Your College Feed
                </div>
                <div
                  onClick={() => {
                    setActiveFeed("latest");
                  }}
                  style={{
                    backgroundColor:
                      activeFeed === "latest" ? "#0961BA" : "white",
                    color: activeFeed === "latest" ? "white" : "black",
                  }}
                  className="fw-bold  flex-grow-1 p-3"
                >
                  Latest Feed
                </div>
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
              className="py-2"
              style={{ backgroundColor: "#0961BA", color: "white" }}
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
    </>
  )
}

export default Page
