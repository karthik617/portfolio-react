/* eslint-disable */
import "./Eduction.css";
import branch from "../Images/git-branch-collaboration.svg";
import branch2 from "../Images/git-branch-security.svg";
import { useEffect, useRef, useState } from "react";

export default function Eduction() {
  const eduIcon = useRef(null);
  const eduLine = useRef(null);
  const eduD = useRef(null);
  const eduDetail = useRef(null);
  const eduDetail2 = useRef(null);
  const eduDetail3 = useRef(null);
  const eduDetail4 = useRef(null);

  const isElementInViewport = (el) => {
    if (el !== null) {
      var rect = el.getBoundingClientRect();
      return (
        (rect.top + rect.height) >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight - 100) &&
        rect.right <= window.innerWidth
      );
    }
  };
  const updateVisibilityStatus = () => {
    // for icon
    if (isElementInViewport(eduIcon.current)) {
      eduIcon.current.classList.remove("icon");
      eduIcon.current.classList.add("icon-transition");
      // eduIcon.current.classList.toggle("icon-transition");
    } else {
      if (eduIcon.current !== null) {
        eduIcon.current.classList.add("icon");
        eduIcon.current.classList.remove("icon-transition");
        // eduIcon.current.classList.toggle("icon");
      }
    }
    // for line
    if (isElementInViewport(eduLine.current)) {
      eduLine.current.classList.remove("line");
      eduLine.current.classList.add("line-transition");
      // eduLine.current.classList.toggle("line-transition");
    } else {
      if (eduLine.current !== null) {
        eduLine.current.classList.add("line");
        eduLine.current.classList.remove("line-transition");
        // eduLine.current.classList.toggle("line");
      }
    }
    // for content
    if (isElementInViewport(eduD.current)) {
      eduD.current.classList.remove("content");
      eduD.current.classList.add("content-transition");
      // eduD.current.classList.toggle("content-transition");
    } else {
      if (eduD.current !== null) {
        eduD.current.classList.add("content");
        eduD.current.classList.remove("content-transition");
        // eduD.current.classList.toggle("content");
      }
    }
    
    if (isElementInViewport(eduDetail.current)) {
      eduDetail.current.classList.remove("detail-box");
      eduDetail.current.classList.add("detail-box-transition");
      // eduDetail.current.classList.toggle("detail-box-transition");
    } else {
      if (eduDetail.current !== null) {
        eduDetail.current.classList.add("detail-box");
        eduDetail.current.classList.remove("detail-box-transition");
        // eduDetail.current.classList.toggle("detail-box");
      }
    }
    if (isElementInViewport(eduDetail2.current)) {
      eduDetail2.current.classList.remove("detail-box");
      eduDetail2.current.classList.add("detail-box-transition");
      // eduDetail2.current.classList.toggle("detail-box-transition");
    } else {
      if (eduDetail2.current !== null) {
        eduDetail2.current.classList.add("detail-box");
        eduDetail2.current.classList.remove("detail-box-transition");
        // eduDetail2.current.classList.toggle("detail-box");
      }
    }
    if (isElementInViewport(eduDetail3.current)) {
      eduDetail3.current.classList.remove("detail-box");
      eduDetail3.current.classList.add("detail-box-transition");
      // eduDetail3.current.classList.toggle("detail-box-transition");
    } else {
      if (eduDetail3.current !== null) {
        eduDetail3.current.classList.add("detail-box");
        eduDetail3.current.classList.remove("detail-box-transition");
        // eduDetail3.current.classList.toggle("detail-box");
      }
    }
    if (isElementInViewport(eduDetail4.current)) {
      eduDetail4.current.classList.remove("detail-box");
      eduDetail4.current.classList.add("detail-box-transition");
      // eduDetail4.current.classList.toggle("detail-box-transition");
    } else {
      if (eduDetail4.current !== null) {
        eduDetail4.current.classList.add("detail-box");
        eduDetail4.current.classList.remove("detail-box-transition");
        // eduDetail4.current.classList.toggle("detail-box");
      }
    }
  };
  window.addEventListener("scroll", updateVisibilityStatus);

  // styling 
  
  const tD700 = {
    transitionDelay: '300ms'
  }
  const tD800 = {
    transitionDelay: '400ms'
  }
  const tD900 = {
    transitionDelay: '500ms'
  }
  const tD1000 = {
    transitionDelay: '600ms'
  }
  return (
    <>
      <div className="d-flex eduction">
        <div className="col-1 d-flex flex-column position-relative">
          <div className="mx-auto my-3 icon-container-ed">
            <div
              className="position-relative d-inline-block education-icon"
              ref={eduIcon}
            >
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                width="24"
                data-view-component="true"
                className="octicon-ed"
              >
                <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
              </svg>
              <span className="position-absolute glowing-icon-glow-ed"></span>
            </div>
          </div>
          <div className="git-line-ed rounded mx-auto" ref={eduLine}></div>
        </div>
        <div className="d-flex flex-column" ref={eduD}>
          <h2 className="mt-2 mb-5">Education</h2>
          <h3 className="mt-2 mb-6">
            Graduated with an{" "}
            <span className="text-color">M.Sc in Computer Science</span> from
            Mumbai University.
          </h3>
        </div>
      </div>
      <div className="education-detail mt-3 py-2">
        <div className="graduation-type d-flex" ref={eduDetail} style={tD700}>
          <div className="col-1 d-flex justify-content-end">
            <div className="ed-glow"></div>
          </div>
          <div className="col-11 d-flex">
            <img src={branch} alt="" className="d-flex flex-column" />
            <div className="degree-type d-flex flex-column justify-content-center  py-3">
              <div className="year">2023</div>
              <div className="degree">Msc</div>
              <div className="location">
                Thakur college of Science and commerce
              </div>
            </div>
          </div>
        </div>
        <div className="graduation-type d-flex" ref={eduDetail2} style={tD800}>
          <div className="col-11 d-flex justify-content-end text-end">
            <div className="degree-type d-flex flex-column justify-content-center  py-3">
              <div className="year-flip align-self-end">2021</div>
              <div className="degree-flip">Bsc</div>
              <div className="location">
                Royal college of Arts Science and commerce
              </div>
            </div>
            <img src={branch2} alt="" className="d-flex flex-column img-flip" />
          </div>
          <div className="col-1 d-flex justify-content-start">
            <div className="ed-glow-flip"></div>
          </div>
        </div>
        <div className="graduation-type d-flex" ref={eduDetail3} style={tD900}>
          <div className="col-1 d-flex justify-content-end">
            <div className="ed-glow"></div>
          </div>
          <div className="col-11 d-flex">
            <img src={branch} alt="" className="d-flex flex-column" />
            <div className="degree-type d-flex flex-column justify-content-center  py-3">
              <div className="year">2018</div>
              <div className="degree">HSC</div>
              <div className="location">
                Thakur college of Science and commerce
              </div>
            </div>
          </div>
        </div>
        <div className="graduation-type d-flex" ref={eduDetail4} style={tD1000}>
          <div className="col-11 d-flex justify-content-end text-end">
            <div className="degree-type d-flex flex-column justify-content-center  py-3">
              <div className="year-flip align-self-end">2016</div>
              <div className="degree-flip">SSC</div>
              <div className="location">ST. PAUL'S HIGH SCHOOL</div>
            </div>
            <img src={branch2} alt="" className="d-flex flex-column img-flip" />
          </div>
          <div className="col-1 d-flex justify-content-start">
            <div className="ed-glow-flip"></div>
          </div>
        </div>
      </div>
    </>
  );
}
