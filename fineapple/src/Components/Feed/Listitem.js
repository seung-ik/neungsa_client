import React from "react";
import { Link } from "react-router-dom";

const Listitem = (props) => {
  return (
    <li className="list_card">
      <div className="list_card_left">
        <div>
          <img src={props.data} alt="" />
          <span className="list_card_left_distance">12km 이내</span>
        </div>
        <div className="list_card_tag_box">
          <p>HTML</p>
          <p>CSS</p>
          <p>Typescript</p>
          <p>Javascript</p>
          <p>coffee</p>
        </div>
      </div>
      <div className="list_card_right">
        <h3>
          javascript 알려드릴게요 공방 1:1 들어오세요 오늘 한시까지 합니다.
        </h3>
        <br></br>
        <h4>한줄소개 : </h4>
        <p>현업에서 일 안해봤고 아는만큼만 알려드릴게요</p>
      </div>
    </li>
  );
};

export default Listitem;
