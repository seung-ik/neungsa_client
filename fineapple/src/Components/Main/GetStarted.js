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

          <div className="getstarted__left__header" >
          우리 동네 사람들이 다 모여있는<br />
          위치기반 재능거래 서비스 파인애플<br />
          지금 바로 시작해 보세요 😍
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
