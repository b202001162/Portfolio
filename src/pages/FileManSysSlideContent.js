import React from "react";
import Img from "../assets/IMG/rc.png";
import { Link } from "react-router-dom";

export default function FileManSysSlideContent() {
  return (
    <div className="FileManagementSlideCtn">
      <div className=" FileManagementSlide">
        <div className=" FileManagementSlideContent">
          <div className=" FileManagementSlideContentTitle">
            File Management System
            <div className="FileManagementSlideContentTags">
              C Language ● OS ● 2022
            </div>
            <div className="FileManagementSlideContentTitleSub">
              Efficient C-based File Management System with Memory Allocation
              and Data Structure Optimization.
            </div>
            <div className=" FileManagementSlideCaseStudyBtn">
              <Link to="/Portfolio/FileManagementSystemPage">
                <button className="btn btn-file-man-sys-case-study-btn">
                  View Case Study
                </button>
              </Link>
            </div>
          </div>
          <div className="FileManagementSlideDisplayPictureCtn">
            {/* <img src={Img2} alt="Library Management System" className="FileManagementSlideDisplayPictureBg"/> */}
            <img
              src={Img}
              alt="File Management System"
              className="FileManagementSlideDisplayPicture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
