import React from "react";
import cook from "./adImg/cook.png";
import paris from "./adImg/paris.png";
import hair from "./adImg/hair.png";
import golf from "./adImg/golf.png";
import library from "./adImg/library.png";

const ImgItem = () => {
  return (
    <div className="advertise_list">
      <img src={paris} alt="" />
      <img src={hair} alt="" />
      <img src={library} alt="" />
      <img src={cook} alt="" />
      <img src={golf} alt="" />
      <img src={paris} alt="" />
      <img src={hair} alt="" />
      <img src={library} alt="" />
      <img src={cook} alt="" />
      <img src={golf} alt="" />
    </div>
  );
};

export default ImgItem;
