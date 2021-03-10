import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Inspration.css";
import insp1 from "../../img/mockup/insp1.jpg";
import insp2 from "../../img/mockup/insp2.png";
import insp3 from "../../img/mockup/insp3.png";
import insp4 from "../../img/mockup/insp4.jpg";
import insp5 from "../../img/mockup/insp5.png";

function Inspration() {
  return (
    <div className="insparation">
      <h1>Get inspired with projects made by our freelancers</h1>
      <div className="insp_wrapper">
        <ul className="slides">
          <li>
            <img src={insp1} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img src={insp2} alt="프로필" className="insp_profile_img" />
              <div>
                <span>discussion</span>
                <span className="insp_profile_name">by 오승익</span>
              </div>
            </div>
          </li>
          <li className="insp_l_deg">
            <img src={insp2} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img src={insp2} alt="프로필" className="insp_profile_img" />
              <div>
                <span>discussion</span>
                <span className="insp_profile_name">by 오승익</span>
              </div>
            </div>
          </li>
          <li className="insp_r_deg">
            <img src={insp3} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img src={insp2} alt="프로필" className="insp_profile_img" />
              <div>
                <span>discussion</span>
                <span className="insp_profile_name">by 오승익</span>
              </div>
            </div>
          </li>
          <li>
            <img src={insp4} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img src={insp2} alt="프로필" className="insp_profile_img" />
              <div>
                <span>discussion</span>
                <span className="insp_profile_name">by 오승익</span>
              </div>
            </div>
          </li>
          <li className="insp_r_deg">
            <img src={insp5} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img src={insp2} alt="프로필" className="insp_profile_img" />
              <div>
                <span>discussion</span>
                <span className="insp_profile_name">by 오승익</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Inspration;
