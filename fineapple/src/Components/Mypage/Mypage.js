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
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Mypage = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [onEdit, setOnEdit] = useState(false);
  const [yourSelf, setYourSelf] = useState(true);
  const [myData, setMyData] = useState({});
  const [feedDatas, setFeedDatas] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const { logout } = useAuth0();
  const history = useHistory();

  const handleProfile = () => {
    props.history.push("/mypage/update");
  };
  const deleteProfile = () => {
    axios
      .post("https://localhost:3000/myPagedelete", {
        email: user.email,
      })
      .then((res) => {
        logout({ returnTo: "https://localhost:8000" });
        props.history.push("/");
      });
    openModal();
  };
  const openModal = () => {
    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .post("https://localhost:3000/myPage", {
          email: user.email,
        })
        .then((res) => {
          let filterData = res.data.find_feed.slice(-5);
          setMyData(res.data.mypagepost);
          setFeedDatas(filterData);
        });
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <div>
        <section
          className={modalOpen ? "modal-container show" : "modal-container"}
        >
          <div className="modal">
            <button className="close-modal" onClick={openModal}></button>
            <div className="modal_text_container">
              <div>글목록 및 이용내역이 사라집니다.</div>
              <button onClick={deleteProfile}>삭제</button>
            </div>
          </div>
        </section>
        <div className="mypage_container">
          <div className="mypage_profile">
            <img src={user.picture ? user.picture : face1} alt="" />
            <div>
              <div className="mypage_profile_name">{myData.nickname}</div>
              {/* <span className="mypage_profile_good">누적 좋아요👌 : 800</span> */}
              {yourSelf ? (
                <div>
                  <button onClick={handleProfile}>프로필 등록/수정</button>
                  <button onClick={openModal}>프로필 삭제</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="mypage_introduction">
            {/* <div className="mypage_introduction_header">소개</div> */}
            <div className="mypage_introduction_container">
              <div>
                <h2>기본정보</h2>
                <p>
                  <AccountCircleIcon />
                  본인인증
                </p>
                {/* <p>
                  <FaceIcon />
                  30회 누적사용
                </p> */}
                <p>
                  <ExploreIcon />
                  위치: {myData.location}
                </p>
                <p>
                  <CallIcon />
                  연락시간: {myData.ContactTime}
                </p>
                <p>
                  <LocalAtmIcon />
                  {myData.trade ? myData.trade : "계좌이체&현금가능"}
                </p>
              </div>
              <div>
                <h2>추가정보</h2>
                <p>
                  <AddCircleOutlineIcon />
                  관련사업: {myData.Entrepreneur}
                </p>
                <p>
                  <AddCircleOutlineIcon />
                  자격증 : {myData.Certificate}
                </p>
                <p>
                  <AddCircleOutlineIcon />
                  {myData.Job}
                </p>
                <p>
                  <AddCircleOutlineIcon />
                  {myData.school}
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
              {feedDatas.map((feedData, key) => {
                return <ServiceItem key={key} feedData={feedData} />;
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default Mypage;
