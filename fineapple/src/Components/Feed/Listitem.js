import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Profile from "../../img/mockup/profile.png";
import axios from "axios";

import "./Listitem.css";

function Listitem({ feed, distance }) {
  const { cost, nickname, title, profileimage, tag } = feed;
  const tags = tag ? tag.split(",") : [];
  const [mylat, setMyLat] = useState("");
  const [mylon, setMyLon] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMyLat(Math.round(position.coords.latitude));
      setMyLon(Math.round(position.coords.longitude));
    });
  }, []);
  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  return (
    <ul className="listitem">
      <li className="listsitem__list">
        <div className="listitem__list__top">
          <div className="listitem__list__top__img__container">
            <Avatar
              className="card__top__left__img"
              style={{ height: "60px", width: "60px" }}
              src={profileimage}
            />
          </div>
          <div className="listitem__list__top__left">
            <p>
              {distance ? `${distance}km 이내 · ` : ""}
              시급 {cost}원{" "}
            </p>
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
            {tags.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Listitem;
