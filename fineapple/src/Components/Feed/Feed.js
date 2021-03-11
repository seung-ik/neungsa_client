import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Feed.css";
import Card from "./Card";
import Listitem from "./Listitem";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import face1 from "../../img/mockup/face1.jpg";
import face2 from "../../img/mockup/face2.jpg";
import FeedSideBar from "./FeedSideBar";
import Profile from "../../img/mockup/profile.png";
import { Avatar } from "@material-ui/core";

const Feed = () => {
  const [slideData, setSlideData] = useState(face1);

  const handleSlideBtn = () => {
    console.log("ok");
    setSlideData((prev) => (prev === Profile ? face2 : face1));
  };

  return (
    <div className="feed">
      <div className="feed__container__header">
        <h2> </h2>
      </div>

      {/* <div className="feed_cards">
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <PlayArrowIcon
          className="feed__cards__next"
          onClick={handleSlideBtn}
        
        />
      </div> */}
      <div className="feed_container">
        <FeedSideBar />
        <div className="feed__wrapper">
          <div className="feed__wrapper__header">
            <h2>일산 3동에는 이런일이 있어요!</h2>

            <div className="feed__wrapper__top__container">
              <div className="feed__wrapper__search">
                <input
                  type="text"
                  placeholder="e.g. 딸기농장 일손구함"
                  className="feed__wrapper__search__input"
                />
                <div className="feed__wrapper__search__btn">검색</div>
              </div>
              <Link to="/write/1" className="feed__btn__write">
                글 작성
              </Link>
            </div>
          </div>

          <ul className="feed_posts">
            <div>
              <Link className="writePage" to="/feed/72">
                <Listitem data={slideData} />
              </Link>
              <Link className="writePage" to="/feed/71">
                <Listitem data={slideData} />
              </Link>
              <Link className="writePage" to="/feed/69">
                <Listitem data={slideData} />
              </Link>
              <Link className="writePage" to="/feed/67">
                <Listitem data={slideData} />
              </Link>
              <div className="see__more__container">더보기</div>
            </div>
          </ul>
        </div>
      </div>
      <Advertise />
      <Footer />
    </div>
  );
};

export default Feed;
