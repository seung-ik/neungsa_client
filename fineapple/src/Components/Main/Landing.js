import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lady from "../../img/mockup/lady.png";
import "./Landing.css";
import Slide from "./Slideshow";
const firstColor = "linear-gradient(90deg, #ffe2d9 0%, #faebe6 90%)";
const secondColor = "linear-gradient(90deg, #00C49F 0%, #95d4c8 90%)";
const thirdColor = "linear-gradient(90deg, #e2eb84 0%, #eaf0ac 90%)";

function Landing() {
  const [bgColor, setBgColor] = useState(firstColor);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prev) => {
        if (prev === firstColor) {
          return secondColor;
        } else if (prev === secondColor) {
          return thirdColor;
        } else if (prev === thirdColor) {
          return firstColor;
        }
      });
    }, 2900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing" style={{ background: `${bgColor}` }}>
      {/* <Slide className="landing__slide"> */}
      <div className="title__container">
        <div className="title box animate fadeInDown two">
          우리동네 숨은 고수를 <br />
          소개해 드립니다
        </div>
        {/* <h1 className="title box animate fadeInUp one">우리동네 숨은 고수를 <br />소개해 드립니다</h1> */}
        <div className="input__container box animate fadeInLeft three">
          <input
            type="search"
            placeholder="어떤 분야의 전문가를 찾으시나요?"
            className="form__control"
            autoComplete="off"
          />
          <div className="btn__search">SEARCH</div>
        </div>
        <div className="popular__container box animate fadeInLeft three">
          <p className="popular">
            추천검색어 : 로고 디자인 | 게임 친구 | 수학 과외
          </p>
        </div>
      </div>
      <div className="img__container">
        <img className="lady" src={Lady} alt="lady main" />
      </div>
      {/* </Slide> */}
    </div>
  );
}

export default Landing;
