import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Tharaha</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {" "}
                I'm having experience with
                <Typical
                  className="primary-text-two"
                  loop={Infinity} // Optional: loop the animation infinitely
                  wrapper="p"
                  steps={["Web Developer", 10000, "UI/UX Designer", 10000]} // Example text sequence
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applicaations with front and back end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="tharaha.cv.pdf" download="tharaha.cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
