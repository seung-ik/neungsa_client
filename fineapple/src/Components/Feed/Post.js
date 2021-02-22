import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <li className="postcard">
      <div className="intro">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80"
          alt=""
          style={{
            width: "50px",
            heigth: "50px",
            borderRadius: "50%",
          }}
        />
        <div>
          <Link to="/Post">
            <h3>content-title</h3>
          </Link>
          <span>tag</span>
        </div>
        <button className="like">like</button>
      </div>
      <Link to="/Post">
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil
          a blanditiis esse nam ullam eligendi omnis facilis doloribus!
          Obcaecati libero aspernatur minima ipsa officiis expedita in nulla ab
          quo?
        </div>
      </Link>
    </li>
  );
};

export default Post;
