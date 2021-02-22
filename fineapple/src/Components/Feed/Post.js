import React from "react";

const Post = () => {
  return (
    <li className="card">
      <img
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2053&q=80"
        alt=""
        style={{
          width: "50px",
          heigth: "50px",
          borderRadius: "50%",
        }}
      />
      <h1>content-title</h1>
      <span>tag</span>
      <button className="like">like</button>
      <div className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        praesentium possimus nesciunt neque quo repudiandae nemo numquam porro
        aperiam quasi!
      </div>
    </li>
  );
};

export default Post;
