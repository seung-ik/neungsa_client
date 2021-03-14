import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Inspration.css";
import insp1 from "../../img/mockup/insp1.jpg";
import insp2 from "../../img/mockup/insp2.png";
import insp3 from "../../img/mockup/insp3.png";
import insp4 from "../../img/mockup/insp4.jpg";
import insp5 from "../../img/mockup/insp5.png";
import axios from "axios";
import ChatBtn from "../Chat/ChatBtn";
import review_profile from "../../img/mockup/review_profile.png";

function Inspration() {
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://localhost:3000/feedpage`)
      .then((response) => {
        let data = response.data.find_feed;
        // console.log(data);
      })
      .catch((e) => {});
  }, []);
  return (
    <div className="insparation">
      {/* <h1>이런 활동 어때요?</h1> */}

      <div className="insp_wrapper">
        <ul className="slides">
          <li
            onClick={() => {
              // console.log("ok");
              history.push("/feed/180");
            }}
          >
            <img src={insp1} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img
                src={review_profile}
                alt="프로필"
                className="insp_profile_img"
              />
              <div>
                <span>창의력이 솟아나요</span>
                <span className="insp_profile_name">by 최고훈</span>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              // console.log("ok");
              history.push("/feed/182");
            }}
            className="insp_l_deg"
          >
            <img src={insp2} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img
                src={review_profile}
                alt="프로필"
                className="insp_profile_img"
              />
              <div>
                <span>배울수 있는게 많아요</span>
                <span className="insp_profile_name">by 현승환</span>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              console.log("ok");
              history.push("/feed/184");
            }}
            className="insp_r_deg"
          >
            <img src={insp3} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img
                src={review_profile}
                alt="프로필"
                className="insp_profile_img"
              />
              <div>
                <span>따분하지 않아요</span>
                <span className="insp_profile_name">by 윤어진</span>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              // console.log("ok");
              history.push("/feed/186");
            }}
          >
            <img src={insp4} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img
                src={review_profile}
                alt="프로필"
                className="insp_profile_img"
              />
              <div>
                <span>삶이 건강해져요</span>
                <span className="insp_profile_name">by 오승익</span>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              // console.log("ok");
              history.push("/feed/190");
            }}
            className="insp_r_deg"
          >
            <img src={insp5} alt="" className="insp_slide_img" />
            <div className="insp_profile_container">
              <img
                src={review_profile}
                alt="프로필"
                className="insp_profile_img"
              />
              <div>
                <span>지역경제에 좋아요👌</span>
                <span className="insp_profile_name">by 김민수</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Inspration;
