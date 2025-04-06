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
    <div style={{ marginBottom: "3%" }}>
      <CarouselContent />
      <div>
        <div className="d-flex justify-content-between align-items-center mx-3 my-3">
          <p className="fw-bold m-0">Trending Courses</p>
          <Link href="#" className="text-decoration-none text-white">
            See more
          </Link>
        </div>

        <div className="position-relative px-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="position-absolute top-50 translate-middle-y start-0 border-0 bg-white shadow-sm rounded-circle p-2"
            style={{ zIndex: 2 }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

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
            {/* Hide scrollbar in WebKit */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {sortedCourses.map((course, index) => (
              <div key={index}>
                <img
                  src={course.imageurl}
                  alt={`Course ${index + 1}`}
                  className="rounded-3 shadow-sm"
                  style={{
                    width: "150px",
                    height: "100px",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.5s ease",
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

          <button
            type="button"
            onClick={() => scroll("right")}
            className="position-absolute top-50 translate-middle-y end-0 border-0 bg-white shadow-sm rounded-circle p-2"
            style={{ zIndex: 2 }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="bg-bg-danger ps-3 pe-3 pt-2">
        <div className="container-fluid border  rounded ">
          <div className="d-flex justify-content-between align-items-center mx-3 my-3">
            <p className="fw-bold  m-0"> Opportunities</p>
            <Link href="#" className="text-decoration-none">
              <span className="text-primary fw-semibold text-white  ">
                See more
              </span>
            </Link>
          </div>
          <hr />
          {internships.length > 0 ? (
            <div className="">
              {internships.slice(0, 5).map((internship, index) => (
                <div
                  key={index}
                  className="mb-2  d-flex align-middle justify-content-between mx-4"
                >
                  <p className="text-white mb-1">{internship.name}</p>
                  <Link
                    href={internship.ApplyLink}
                    className="text-white text-decoration-none hover:text-primary"
                  >
                    View more
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <>No recruitment yet</>
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
                style={{ boxShadow: "none" }}
              />
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
