import React from "react";
import img1 from "../../assets/header-1.jpeg";
import img2 from "../../assets/header-2.jpeg";
import img3 from "../../assets/header-3.jpeg";

export default function Header() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>GREENMIND</h1>
              <p>A community for plant lovers</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Discover the magic of plants</h1>
              <p>Many different types of products with best pricing</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Green workspace</h1>
              <p>Let's cover your space by plant</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
