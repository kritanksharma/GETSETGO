import React from "react";
import connect1 from "../static/connect1.png";
import Studio from "./Studio";
export default function About() {
  const items = [
    { text: "Get Set Go Productions is your creative partner in the world of entertainment. We are a dynamic production house driven by boundless creativity and an unwavering commitment to turning imagination into captivating reality. With a diverse portfolio that includes captivating commercials, mesmerizing music videos, thrilling fiction productions, cutting-edge 3D modeling, and mind-bending visual effects, we bring your ideas to life with passion and precision." },
    {text:'Join us in making waves in the entertainment world. At Get Set Go Productions, we are not just storytellers; we are dreamweavers, crafting moments that leave an indelible mark on your audience. Whether you are an artist, brand, or creative visionary, we invite you to collaborate with us and experience the magic of unlimited creativity. Together, we will captivate hearts, spark imaginations, and redefine the boundaries of whats possible in the world of entertainment'},
   
  ];
  const title = 'Elevate Your Business through Enhanced Cybersecurity Excellence!'

  return (
    <>
      <div
        className="card w-100 p-3"
        style={{ border: "none", borderRadius: "0px"}}
      >
        <div
          className="card w-100"
          style={{ border: "none", borderRadius: "0px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={connect1}
                className="img-fluid rounded-start my-2"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body my-3 py-4 text-start">
                <h2 className="card-title fw-bold">
                  {title}
                </h2>
                {items.map((item, index) => (
             <div key={index}>
                <p className="card-text my-4">
                {item.text}
                </p> </div> ))}
                <button type="button" className="btn btn-outline-danger mr-3">
                <a className="nav-link" href="/contact">
                 Let's Connect
                </a>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Studio></Studio>
    </>
  );
}
