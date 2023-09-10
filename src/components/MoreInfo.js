import React from "react";
import checklist from "../static/checklist.png";
import team from "../static/team.png";
import idea from "../static/idea.png";
import "./styles.css"; // Import the CSS file
import CoreWork from "./CoreWork";

export default function MoreInfo() {
  return (
    <>
      <div>
        <h2 className="card-title fw-bold display-5 icon mt-5">
          What's New in <span className="text-danger"> Studio</span>
        </h2>
        <p className="card-text m-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>

      <div >
        <div className="row my-4">
          <div className="col-md-4 my-2">
            <div className="card  border-0 shadow-lg overflow-hidden card-hover-animation">
              <img src={checklist} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Quality</h5>
                <p className="p-1 ">
                  We deliver high-quality content with the objective of meeting
                  the expectations of our clients
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card  border-0 shadow-lg overflow-hidden card-hover-animation">
              <img src={idea} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Innovation</h5>
                <p className="p-1 ">
                  We deliver high-quality content with the objective of meeting
                  the expectations of our clients
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className="card border-0 shadow-lg overflow-hidden card-hover-animation">
              <img src={team} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">Expert Team</h5>
                <p className="p-1 ">
                  We deliver high-quality content with the objective of meeting
                  the expectations of our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoreWork></CoreWork>
    </>
  );
}
