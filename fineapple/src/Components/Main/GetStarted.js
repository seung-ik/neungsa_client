import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
import page from "../../img/getStart/page.png";

function GetStarted() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="getstarted">
      <div className="getstarted__left">
        <div className="getstarted__left__header">
          혼자하는 것이 능사가 아닙니다. <br />
          능력사무소 에서 <br />
          서로의 능력을나눠보세요. <br />
        </div>
        <img src={page} alt="" className="getstarted__right__img" />

        <Link
          to="/feed"
          className="getstarted__left__btn"
          onClick={handleClick}
        >
          시작하기
        </Link>
      </div>
    </div>
  );
}

export default GetStarted;
