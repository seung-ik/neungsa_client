import React from "react";
import Header from "../Header/Header";
import "./Feed.css";
import Card from "./Card";
import Post from "./Post";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";

const Feedpage = () => {
  return (
    <div className="feedpage">
      <div className="feed">
        <div className="cards">
          <button>prev</button>
          <Card />
          <Card />
          <Card />
          <Card />
          <button>next</button>
        </div>
        <div className="posts">
          <ul className="post-container">
            <Post />
            <Post />
            <Post />
            <Post />
          </ul>
        </div>
        <Advertise />
      </div>
      <Footer />
    </div>
  );
};

export default Feedpage;
