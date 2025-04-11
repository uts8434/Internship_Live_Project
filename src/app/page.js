"use client";
import CarouselContent from "./component/carouselcontent";
import SearchByCategory from "./component/searchbycategory";
import Opportunity from "./component/opportunity";
import Feed from "./component/feed";
import Course from "./component/course";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";
import { internships, feedData, sortedCourses } from "./component/data";
import "@/app/globals.css";
import Link from "next/link";

function Page() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = 300;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const [activeFeed, setActiveFeed] = useState("all");
  return (
    <div>
      <CarouselContent />
      <div className="d-lg-none d-block">
        <div className="d-flex justify-content-between align-items-center px-3 pt-3">
          <h6 className="fw-bold mb-0 text-white">Trending Courses</h6>
          <Link
            href="/courses"
            className="text-decoration-none text-primary fw-semibold"
          >
            <span className="text-primary fw-semibold underline-on-hover">
              See more
            </span>
          </Link>
        </div>

        <div className="position-relative px-3 pt-2">
          {/* Left Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="position-absolute top-50 start-0 translate-middle-y border-0 bg-white shadow rounded-circle p-2"
            style={{ zIndex: 2 }}
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Scrollable Course List */}
          <div
            className="d-flex flex-nowrap gap-3 px-4"
            ref={scrollRef}
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "smooth",
            }}
            onWheel={(e) => {
              e.currentTarget.scrollLeft += e.deltaY;
              e.preventDefault();
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {sortedCourses.map((course, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={course.imageurl}
                  alt={`Course ${index + 1}`}
                  className="rounded-3 shadow-sm"
                  style={{
                    width: "150px",
                    height: "100px",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="position-absolute top-50 end-0 translate-middle-y border-0 bg-white shadow rounded-circle p-2"
            style={{ zIndex: 2 }}
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="d-lg-none d-block px-3 pt-3">
        <div className="container-fluid border rounded  shadow-sm">
          <div className="d-flex justify-content-between align-items-center px-2 py-2">
            <h6 className="fw-bold text-white mb-0">Opportunities</h6>
            <Link href="/opportunity" className="text-decoration-none">
              <span className="text-primary fw-semibold underline-on-hover">
                See more
              </span>
            </Link>
          </div>
          <hr className="border-light my-1" />
          {internships.length > 0 ? (
            <div className="px-2 pb-2">
              {internships.slice(0, 5).map((internship, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <p className="text-white mb-0 small">{internship.name}</p>
                  <Link
                    href={internship.ApplyLink}
                    className=" text-decoration-none small text-primary underline-on-hover"
                  >
                    <span className="underline-on-hover">View more</span>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-center small mb-2">
              No recruitment yet
            </p>
          )}
        </div>
      </div>

      <SearchByCategory />

      <div className="container-fluid text-center mt-3">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block border-lg-start border-lg-end">
            <h4 className="py-2 btn_bg text-white rounded">OPPORTUNITY</h4>
            <Opportunity activeinternship={internships} />
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="position-relative d-none d-lg-block">
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
                list="search-suggestions"
                style={{ boxShadow: "none" }}
              />

              <datalist id="search-suggestions">
                <option value="Web Development" />
                <option value="AI & ML" />
                <option value="Data Science" />
                <option value="Internships" />
                <option value="Trending Courses" />
              </datalist>
            </div>

            <div className="container-fluid w-100 mt-4 p-0 rounded-4 shadow-sm overflow-hidden border bg-white">
              <div className="d-flex w-100 text-center">
                {[
                  { id: "all", label: " All Feed" },
                  { id: "college", label: " Your College Feed" },
                  { id: "latest", label: " trending" },
                ].map((feed) => (
                  <div
                    key={feed.id}
                    onClick={() => setActiveFeed(feed.id)}
                    className="flex-grow-1 fw-semibold py-2 border-end user-select-none"
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

            <div className="mt-4">
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

          <div className="col-lg-3 d-none d-lg-block border-lg-start">
            <h4 className="py-2 btn_bg text-white rounded">COURSES</h4>
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
