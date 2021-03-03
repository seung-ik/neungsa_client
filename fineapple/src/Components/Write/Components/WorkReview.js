import React from "react";
import axios from "axios";
import Next from "./Next";
import Prev from "./Prev";
import { Link } from "react-router-dom";
import "./WorkReview.css";

function WorkReview({ writeData }) {
  const addCommas = (num) => {
    if (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return;
  };

  const handleSubmit = (data) => {
    let submitObj = {
      userid: "1",
      group_category: "friend",
      profileimage: "profileimage",
      title: data.title,
      category: "data.tags",
      content: data.content,
      images: "data.file",
      location: data.region,
      latitude: data.lat,
      longitude: data.lon,
      serviceId: "12312",
      chatroom: "123123",
      cost: data.cost,
    };
    console.log(submitObj);

    axios({
      method: "post",
      url: "http://localhost:5000/write/friend",
      data: submitObj,
    }).then((res) => console.log("ok", res));
  };
  return (
    <div className="workreview">
      <div className="workreview__title">
        <div className="workreview__title__header">
          <h1>리뷰하고 글 작성하기</h1>
          <div
            className="workreview__post__now"
            onClick={() => handleSubmit(writeData)}
          >
            게시글 저장
          </div>
        </div>
        <h1 className="workreview__top">글 제목</h1>
        <div className="workreview__container">
          <h1>글 제목</h1>
          <p>{writeData.title}</p>
        </div>
        <div className="workreview__container">
          <h1>서비스 카테고리</h1>
          <p>교육</p>
        </div>
        <div className="workreview__container">
          <h1>서비스 태그</h1>
          <div className="workreview__tag__container">
            {writeData.tags &&
              writeData.tags.map((tag, idx) => (
                <div key={idx} className="tag__review">
                  {tag}
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="workreview__description">
        <h1 className="workreview__top">상세 설명</h1>
        <div className="workreview__container">
          <h1>상세 설명</h1>
          <p>{writeData.content}</p>
        </div>
      </div>
      <div className="workrevview__budget">
        <h1 className="workreview__top">가격 및 예산</h1>
        <div className="workreview__container">
          <h1>결제 방법</h1>
          <p>{writeData.payment === "meet" ? "추후 협의" : "시간당 계산"}</p>
        </div>
        {writeData.payment === "meet" ? (
          ""
        ) : (
          <div className="workreview__container">
            <h1>시간당 가격</h1>
            <p>{addCommas(writeData.cost)} 원</p>
          </div>
        )}

        <div className="container__btns">
          <Link className="writePage" to="/write/4">
            <Prev />
          </Link>
          <Link
            className="writePage"
            to="/Login"
            onClick={() => handleSubmit(writeData)}
          >
            <Next />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkReview;
