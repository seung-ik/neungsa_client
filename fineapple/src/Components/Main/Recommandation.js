import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import baby from "../../img/recommandation/baby.jpg";
import beauty from "../../img/recommandation/beauty.jpg";
import computer from "../../img/recommandation/computer.jpg";
import cook from "../../img/recommandation/cook.jpg";
import edu from "../../img/recommandation/edu.jpg";
import friends from "../../img/recommandation/friends.jpg";
import guitar from "../../img/recommandation/guitar.jpg";
import language from "../../img/recommandation/language.jpg";
import pet from "../../img/recommandation/pet.jpg";
import sports from "../../img/recommandation/sports.jpg";
import "./Recommandation.css";

function Recommandation({ location }) {
  const history = useHistory();
  const [defaultLocation, setDefaultLocation] = useState(-780);
  const handleButton = (move) => {
    // console.log(move);
    if (move === "left") {
      setDefaultLocation((prev) => {
        if (prev - 260 === -1820) {
          return -780;
        }
        return prev - 260;
      });
    } else if (move === "right") {
      setDefaultLocation((prev) => {
        if (prev + 260 === 260) {
          return -780;
        }
        return prev + 260;
      });
    }
  };
  return (
    <div className="recommandation">
      <div className="text__container">
        <h1 className="rec__header">
          {location ? location : "파인애플"} 에는 이런 일들이 있어요!
        </h1>
      </div>
      <div className="slides__container">
        <button
          className="slider__prev slide__btn"
          onClick={() => handleButton("left")}
        >
          <img
            className="img__btn"
            src="https://assets.cdn.soomgo.com/icons/slick-arrow-left.svg"
            alt="left"
          />
        </button>

        <div className="slider_wrapper">
          <ul
            className="slider__track"
            style={{ left: `${defaultLocation}px` }}
          >
            <li className="single__slide">
              <img
                onClick={() => {
                  history.push("/feed", "교육");
                }}
                className="slide__img"
                src={edu}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                onClick={() => {
                  history.push("/feed", "친구");
                }}
                className="slide__img"
                src={friends}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "육아");
                }}
                src={baby}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "뷰티");
                }}
                src={beauty}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "스포츠 / 레저");
                }}
                src={sports}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "반려동물");
                }}
                src={pet}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "언어");
                }}
                src={language}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "컴퓨터");
                }}
                src={computer}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "요리 / 예체능");
                }}
                src={cook}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "기타");
                }}
                src={guitar}
                alt=""
              />
            </li>
            <li className="single__slide">
              <img
                className="slide__img"
                onClick={() => {
                  history.push("/feed", "교육");
                }}
                src={edu}
                alt=""
              />
            </li>
          </ul>
        </div>

        <button
          className="slider__next slide__btn"
          onClick={() => handleButton("right")}
        >
          <img
            className="img__btn"
            src="https://assets.cdn.soomgo.com/icons/slick-arrow-right.svg"
            alt="right"
          />
        </button>
      </div>
    </div>
  );
}

export default Recommandation;
