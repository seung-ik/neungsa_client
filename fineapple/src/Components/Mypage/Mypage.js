import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./Mypage.css";
import ServiceItem from "./ServiceItem";

const Mypage = () => {
  const [onEdit, setOnEdit] = useState(false);
  const handleProfile = () => {
    console.log("a");
    setOnEdit((prev) => !prev);
  };

  return (
    <div>
      <div className="mypage_container">
        <div className="mypage_profile">
          <img
            src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
            alt=""
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <div>
            <h4>오필승코리아</h4>
            <span>누적 좋아요👌 : 800</span>
          </div>
          <button onClick={handleProfile}>
            {!onEdit ? "프로필 등록/수정" : "완료"}
          </button>
        </div>
        <div className="mypage_introduction">
          <h2>소개</h2>
          <div className="mypage_introduction_container">
            {!onEdit ? (
              <div>
                <h3>기본정보</h3>
                <p>본인인증</p>
                <p>30회 누적사용</p>
                <p>서울시 강남구</p>
                <p>연락가능 시간:1시</p>
                <p>계좌이체&현금가능</p>
              </div>
            ) : (
              <div>
                <h3>기본정보</h3>
                <p>본인인증</p>
                <p>30회 누적사용</p>
                <input type="text" placeholder="위치" />
                <input type="text" placeholder="연락가능시간" />
                <input type="text" placeholder="기타" />
              </div>
            )}
            {!onEdit ? (
              <div>
                <h3>추가정보</h3>
                <p>사업자</p>
                <p>자격증</p>
                <p>직장</p>
                <p>학교</p>
                <p>경력</p>
              </div>
            ) : (
              <div>
                <h3>
                  추가정보
                  <button>+</button>
                </h3>
                <p>
                  사업자
                  <button>-</button>
                </p>
                <p>
                  자격증
                  <button>-</button>
                </p>
                <p>
                  직장
                  <button>-</button>
                </p>
                <p>
                  학교
                  <button>-</button>
                </p>
                <p>
                  경력<button>-</button>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mypage_service">
          <h2>최근활동</h2>
          <ul>
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mypage;
