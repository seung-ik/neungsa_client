import React from "react";
import Header from "../Header/Header";
import "./Feed.css";
import Card from "./Card";
import Listitem from "./Listitem";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";

const Feed = () => {
  return (
    <div>
      <div className="feed_container">
        <div className="feed_cards">
          <button>prev</button>
          <Card />
          <Card />
          <Card />
          <Card />
          <button>next</button>
        </div>
        <ul className="feed_posts">
          <Listitem />
          <Listitem />
          <Listitem />
          <Listitem />
        </ul>
        <Advertise />
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
