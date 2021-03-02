import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import "./Mypage.css";
import ServiceItem from "./ServiceItem";
import face1 from "../../img/mockup/face1.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import ExploreIcon from "@material-ui/icons/Explore";
import CallIcon from "@material-ui/icons/Call";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CheckIcon from "@material-ui/icons/Check";
import PostAddIcon from "@material-ui/icons/PostAdd";
import MapContents from "./MapContents";
const Mypage = (props) => {
  const [onEdit, setOnEdit] = useState(false);

  const handleProfile = () => {
    console.log("a");
    setOnEdit((prev) => !prev);
    props.history.push("/mypage/update");
  };

  return (
    <div>
      <div className="mypage_container">
        <div className="mypage_profile">
          <img src={face1} alt="" />
          <div>
            <div className="mypage_profile_name">오필승코리아</div>
            <span className="mypage_profile_good">누적 좋아요👌 : 800</span>
            <button onClick={handleProfile}>
              {!onEdit ? "프로필 등록/수정" : "완료"}
            </button>
          </div>
        </div>
        {/* <MapContents id="map" /> */}
        <div className="mypage_introduction">
          {/* <div className="mypage_introduction_header">소개</div> */}
          <div className="mypage_introduction_container">
            <div>
              <h2>기본정보</h2>
              <p>
                <AccountCircleIcon />
                본인인증
              </p>
              <p>
                <FaceIcon />
                30회 누적사용
              </p>
              <p>
                <ExploreIcon />
                서울시 강남구
              </p>
              <p>
                <CallIcon />
                연락가능 시간:1시
              </p>
              <p>
                <LocalAtmIcon />
                계좌이체&현금가능
              </p>
            </div>
            <div>
              <h2>추가정보</h2>
              <p>
                <CheckIcon />
                사업자
              </p>
              <p>
                <CheckIcon />
                자격증
              </p>
              <p>
                <CheckIcon />
                직장
              </p>
              <p>
                <CheckIcon />
                학교
              </p>
              <p>
                <CheckIcon />
                경력
              </p>
            </div>
          </div>
        </div>
        <div className="mypage_service">
          <h2
            style={{
              paddingLeft: "40px",
              paddingTop: "15px",
              paddingBottom: "15px",
              marginBottom: "20px",
            }}
          >
            최근활동
            <PostAddIcon />
          </h2>
          <ul style={{ paddingBottom: "30px" }}>
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
