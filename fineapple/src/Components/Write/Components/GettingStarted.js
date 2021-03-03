import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GettingStarted.css";
import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import Next from "./Next";
import Prev from "./Prev";

function GettingStarted({ handleWriteData }) {
  const [select, setSelect] = useState("");
  const handleSelect = (target) => {
    setSelect(target);
  };

  return (
    <div className="gettingstarted">
      <div className="content__container">
        <div className="getting__container">
          <h1 className="title__header">시작하기</h1>
        </div>
        <div className="choice__container">
          <div className="choice__container__title">어떤일을 찾고있나요?</div>
          <div className="choice__row">
            <div
              className={
                select === "lesson" ? "choice__work select" : "choice__work"
              }
              onClick={() => handleSelect("lesson")}
            >
              <WorkIcon className="icon" />
              <h3 className="choice__desc">레슨 구하기</h3>
            </div>
            <div
              className={
                select === "friend" ? "choice__work select" : "choice__work"
              }
              onClick={() => handleSelect("friend")}
            >
              <GroupIcon className="icon" />
              <h3 className="choice__desc">친구 구하기</h3>
            </div>
          </div>
        </div>
        <div className="container__btns">
          <Link className="writePage" to="/write/1">
            <Prev />
          </Link>
          <Link
            className="writePage"
            to="/write/2"
            onClick={() => handleWriteData(select)}
          >
            <Next />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;
