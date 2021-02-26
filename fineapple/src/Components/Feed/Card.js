import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="feed_card">
      <div className="feed_profile_container">
        <div>
          <img src={props.data} alt="profileimg" />
          <h4>emilyoun</h4>
        </div>
        <div className="feed_profile_text">
          <p>Frontend Developer</p>
          <p>누적좋아요: 123(7)</p>
          <span>서울시 방배동</span>
        </div>
      </div>
      <div className="feed_tag_container">
        <div className="feed_tag_box">
          <span>HTML</span>
          <span>CSS</span>
          <span>Typescript</span>
          <span>Javascript</span>
          <span>Mysql</span>
        </div>
        <Link to="/Post">
          <button>View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
