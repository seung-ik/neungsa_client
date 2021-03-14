import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
import pineapple5 from "../../img/getStart/pineapple5.png";

function GetStarted() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="getstarted">
      <div className="getstarted__left">
        <span className="getstarted__left__header">
          Fine the Talent you need <br />
          Share the Talent you have <br />
          In your fineapple
        </span>

        <Link
          to="/feed"
          className="getstarted__left__btn"
          onClick={handleClick}
        >
          시작하기
        </Link>
      </div>
      <div className="getstarted__right">
        <img src={pineapple5} alt="" className="getstarted__right__img" />
      </div>
    </div>
  );
}

export default GetStarted;
