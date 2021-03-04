import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./Feed.css";
import Card from "./Card";
import Listitem from "./Listitem";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import face1 from "../../img/mockup/face1.jpg";
import face2 from "../../img/mockup/face2.jpg";
import axios from "axios";

const Feed = () => {
  const [slideData, setSlideData] = useState(face1);

  const handleSlideBtn = () => {
    console.log("ok");
    setSlideData((prev) => (prev === face1 ? face2 : face1));
  };

  return (
    <div>
      <div className="feed_container">
        <h2
          style={{
            marginBottom: "15px",
            marginLeft: "8%",
            justifySelf: "flex-start",
          }}
        >
          우리동네 소능력자
        </h2>
        <br />
        <div className="feed_cards">
          <Card data={slideData} />
          <Card data={slideData} />
          <Card data={slideData} />
          <Card data={slideData} />
          <PlayArrowIcon
            onClick={handleSlideBtn}
            style={{
              color: "white",
              backgroundColor: "a2b493",
              width: "50px",
              height: "50px",
              position: "relative",
              right: "4%",
              opacity: "0.7",
              borderRadius: "50%",
            }}
          />
        </div>
        <h2
          style={{
            marginBottom: "15px",
            marginLeft: "8%",
            justifySelf: "flex-start",
          }}
        >
          일산 3동에는 이런일이 있어요
        </h2>
        <ul className="feed_posts">
          <div style={{ width: "50%" }}>
            <Listitem data={slideData} />
            <Listitem data={slideData} />
            <Listitem data={slideData} />
            <Listitem data={slideData} />
          </div>

          <div
            style={{
              width: "50%",
              borderLeft: "2px solid #D1CECE",
            }}
          >
            <Listitem data={slideData} />
            <Listitem data={slideData} />
            <Listitem data={slideData} />
            <Listitem data={slideData} />
          </div>
        </ul>
        <Advertise />
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
