import React from "react";

const Card = () => {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-left">
          <img
            src="https://images.unsplash.com/photo-1613869810108-70f9fe0cdef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
            alt=""
            style={{
              width: "50px",
              heigth: "50px",
              borderRadius: "50%",
            }}
          />
          <p>5000원</p>
        </div>
        <div className="profile-right">
          <h4>name</h4>
          <span>내용1내용1내용1</span>
          <p>부가설명1 부가설명 1</p>
        </div>
      </div>
      <div className="tag-container">
        <div>tagname</div>
        <button>보기</button>
      </div>
    </div>
  );
};

export default Card;
