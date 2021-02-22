import React from "react";
import Header from "../Header/Header";
import "./Feed.css";
import Card from "./Card";
import Post from "./Post";

const Feedpage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Feedpage;
