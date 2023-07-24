import React from "react";
import Img from "../assets/IMG/rc.png";
import { Link } from "react-router-dom";
// import Img2 from "../assets/IMG/data-recovery.png";

export default function LibManSysSlideContent() {
  return (
    <div className="LibraryManagementSlideCtn">
      <div className="LibraryManagementSlide">
        <div className="LibraryManagementSlideContent">
          <div className="LibraryManagementSlideContentTitle">
            Library Management System
            <div className="LibManagementSlideContentTags">
              C Language ● Data Structure ● 2021
            </div>
            <div className="LibraryManagementSlideContentTitleSub">
              User-friendly C based Library Management System with advanced Data
              Structure and File I/O capabilities for seamless organization.
            </div>
            <div className="LibraryManagementSlideCaseStudyBtn">
              <Link to="/Portfolio/LibraryManagementSystemPage">
                <button className="btn btn-lib-man-sys-case-study-btn">
                  View Case Study
                </button>
              </Link>
            </div>
          </div>
          <div className="LibraryManagementSlideDisplayPictureCtn">
            {/* <img src={Img2} alt="Library Management System" className="LibraryManagementSlideDisplayPictureBg"/> */}
            <img
              src={Img}
              alt="Library Management System"
              className="LibraryManagementSlideDisplayPicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
