import React from "react";
import bg2 from "../static/bg2.png";
export default function Service() {
  return (
    <div>
      <div
        className="card bg-black text-light"
        style={{ border: "none", borderRadius: "0px" }}
      >
        <div className="card-body my-4">
          <h3 className="display-6 text-light fw-semibold icon">What do we Do ?</h3>
          <p className="card-text mx-1">
          Experience the future of communication with India's Premium VAAS Platform. Transform your audio and video interactions into powerful tools for success, innovation, and connectivity. Discover the limitless possibilities of seamless, reliable, and high-performance audio + video solutions, all at your fingertips.
          
          </p>

          <div className="row mt-5 display-6 fw-regular">
            <p className="card-text col-md-4 my-2">
              <span className="text-danger">500+</span> Happy Clients
            </p>
            <p className="card-text col-md-4 my-2">
              <span className="text-danger">100+</span> Achievements
            </p>
            <p className="card-text col-md-4 my-2">
              <span className="text-danger">50,000 +</span> Views
            </p>
          </div>
        </div>
        <img
          src={bg2}
          className="card-img-bottom"
          alt="..."
          style={{ height: "150px" }}
        />
      </div>
    </div>
  );
}
