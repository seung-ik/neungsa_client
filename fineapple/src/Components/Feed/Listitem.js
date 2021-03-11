import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Profile from '../../img/mockup/profile.png';
import axios from "axios";

import './Listitem.css'

function Listitem({feed}) {
  const { cost, nickname, title, profileimage, tag } = feed
  const tags = tag ? tag.split(',') : [];


  return (
    <ul className="listitem">
      <li className="listsitem__list">
        <div className="listitem__list__top">
          <div className="listitem__list__top__img__container">
            <Avatar className='card__top__left__img' style={{ height: "60px", width: "60px" }} src={profileimage} />

          </div>
          <div className="listitem__list__top__left">
            <p>1.4km 이내  <span>·</span> 시급 {cost}원 </p>  
            <h3>{title} </h3>
            <h4>{nickname}</h4>
          </div>
        </div>
        <div className="listitem__list__middle">
          {/* <div className="listitem__list__price">
            시간당 <b>15000</b> 원
          </div> */}
        </div>
        <div className="listitem__list__bottom">
          {/* 현업에서 일 안해봤고 아는만큼만 알려드릴게요 지금 리액트 배우고 있고 mysql, javascript, css, html 중에   (....) */}   
          <div className="list_card_tag_box">
            {tags.map((item, i) => <p key={i}>{item}</p>) }
        </div>   
        </div>
        
      </li>
    </ul>
  );
};

export default Listitem;
