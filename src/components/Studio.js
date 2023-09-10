import React, { useEffect } from "react";
import s1 from "../static/s1.jpeg";
import s2 from "../static/s2.jpeg";
import s3 from "../static/s3.jpeg";

export default function Studio() {
  useEffect(() => {
    // Function to simulate clicking the "Next" button
    const clickNext = () => {
      const nextButton = document.querySelector(".carousel-control-next");
      if (nextButton) {
        nextButton.click();
      }
    };

    // Start the interval to click "Next" every 5 second (5000 milliseconds)
    const interval = setInterval(clickNext, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div  className="bg-dark mt-5 p-2">
      <div>
        <h2 className="card-title fw-regular display-6 theme-text-color my-5">
          {" "}
          Our Studio - Explore Our Space
        </h2>
        <p className="card-text  text-light icon mx-2 my-2">
        Explore our studio through images and behind-the-scenes glimpses of our creative process. We invite you to step inside and witness the hub of innovation that fuels Get Set Go Productions. Our studio is not just a place; it's an experience, and we're excited to share it with you.
        </p>
      </div>
      <div className="card text-light bg-dark border-0 shadow-lg overflow-hidden my-5 mx-3 w-80">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{ border: "none", borderRadius: "0px" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={s1}
                className="d-block w-100 img-grayscale"
                alt="..."
                style={{ height: "40%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={s2}
                className="d-block w-100 img-grayscale"
                alt="..."
                style={{ height: "40%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={s3}
                className="d-block w-100 img-grayscale"
                alt="..."
                style={{ height: "40%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
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
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
