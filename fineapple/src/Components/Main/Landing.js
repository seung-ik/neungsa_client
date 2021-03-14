import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Lady from "../../img/mockup/lady.png";
import "./Landing.css";
import Slide from "./Slideshow";
const firstColor = "linear-gradient(90deg, #ffe2d9 0%, #faebe6 90%)";
const secondColor = "linear-gradient(90deg, #00C49F 0%, #95d4c8 90%)";
const thirdColor = "linear-gradient(90deg, #e2eb84 0%, #eaf0ac 90%)";


function Landing() {
  // const [bgColor, setBgColor] = useState(firstColor);
  const [search, setSearch] = useState('')

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBgColor((prev) => {
  //       if (prev === firstColor) {
  //         return secondColor;
  //       } else if (prev === secondColor) {
  //         return thirdColor;
  //       } else if (prev === thirdColor) {
  //         return firstColor;
  //       }
  //     });
  //   }, 2900);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="landing">
      {/* <Slide className="landing__slide"> */}
      <div className="title__container">
        <h2 className="title__container__content box animate fadeInDown two">우리동네 능력사무소 🏡</h2>
        <div className="title box animate fadeInDown two">
          Find your local expert <br />
          at Fineapple
        </div>
        {/* <h1 className="title box animate fadeInUp one">우리동네 숨은 고수를 <br />소개해 드립니다</h1> */}
        <div className="input__container box animate fadeInLeft three">
          <input
            type="search"
            onChange={e => setSearch(e.target.value)} 
            placeholder="어떤 분야의 전문가를 찾으시나요?"
            className="form__control"
            autoComplete="off"
            onKeyPress={(event) =>
              event.key === "Enter" && setSearch(event.target.value)}
          />
          <Link to={{ pathname: "/feed", query: { search } }} className="btn__search">SEARCH</Link>
        </div>
        <div className="popular__container box animate fadeInLeft three">
          <p className="popular">
            추천검색어 : 로고 디자인 | 게임 친구 | 수학 과외
          </p>
        </div>
      </div>
      <div className="img__container">
        <img className="lady  box animate fadeInDown two" src={Lady} alt="lady main" />
      </div>
      {/* </Slide> */}
    </div>
  );
}

export default Landing;
