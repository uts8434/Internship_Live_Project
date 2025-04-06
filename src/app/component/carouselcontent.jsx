"use client"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';  // Add Bootstrap CSS

function CarouselContent() {
  return (
    <div style={{margin:" 2% 1%"}}>
      <style>
        {`
          
          .carousel-item img {
            height: 300px;
            object-fit: cover;
          }

          .carousel-caption {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 1rem;
            border-radius: 10px;
          }

          @media (max-width: 768px) {
            .carousel-item img {
              height: 300px;
            }
          }
        `}
      </style>

      <div id="carouselExampleFade" className="carousel carousel-fade slide" data-bs-ride="carousel" >
        <div className="carousel-inner rounded-4">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="d-md-block d-none  carousel-caption">
              <h3>Welcome to Our Platform</h3>
              <p>Find the best internships, startups, and courses in one place!</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Include Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default CarouselContent;
