import React from "react";
import Header from "../Header/Header";
import "./Feed.css";
import Card from "./Card";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";
import Listitem from "./Listitem";

const Feedpage = () => {
  return (
    <div className="feedpage">
      <div className="feed">
        <div className="feed_cards ">
          <button>prev</button>
          <Card />
          <Card />
          <Card />
          <Card />
          <button>next</button>
        </div>
        <div className="posts">
          <ul className="post-container">
            <Listitem />
            <Listitem />
            <Listitem />
            <Listitem />
          </ul>
        </div>
        <Advertise />
      </div>
      <Footer />
    </div>
  );
};

export default Feedpage;
