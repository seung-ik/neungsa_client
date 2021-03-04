import React, { useRef, useState, useEffect } from "react";
import "./Post.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import rec4 from "../../img/mockup/rec4.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import ExploreIcon from "@material-ui/icons/Explore";
import CallIcon from "@material-ui/icons/Call";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CheckIcon from "@material-ui/icons/Check";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Post = ({ match }) => {
  console.log(match.params.id);
  const classes = useStyles();
  const refReview = useRef(null);
  const refImage = useRef(null);
  const refProfile = useRef(null);

  const [scrollState, setScrollState] = useState("profile");

  const moveScroll = (e, refName) => {
    if (refName === refProfile) setScrollState("profile");
    if (refName === refReview) setScrollState("review");
    if (refName === refImage) setScrollState("image");
    window.scrollTo(0, refName.current.offsetTop - 100);
  };

  useEffect(() => {
    let obj = { id: 66 };
    console.log(obj);
    axios
      .get("https://localhost:5000/postPage", obj)
      .then((res) => console.log("ok", res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div className="post_container">
        <div className="post_content">
          <div className="title_container">
            <img src={rec4} alt="" className="post_profile_img" />
            <div>
              <h1>피아노 알려드릴게요</h1>
              <div className="post_tag_box">
                <span> keyword1 </span>
                <span> keyword2 </span>
                <span> keyword3 </span>
              </div>
            </div>
          </div>
          <div className="post_move_btn_box">
            <button
              className={scrollState === "profile" ? "click" : ""}
              onClick={(e) => moveScroll(e, refProfile)}
            >
              프로필보기
            </button>
            <button
              className={scrollState === "review" ? "click" : ""}
              onClick={(e) => moveScroll(e, refReview)}
            >
              리뷰보기
            </button>
            <button
              className={scrollState === "image" ? "click" : ""}
              onClick={(e) => moveScroll(e, refImage)}
            >
              사진보기
            </button>
          </div>
          <div className="introduction_container">
            <div>
              <h2 ref={refProfile}>기본정보</h2>
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
          <div className="text_container">
            <h2>서비스 상세설명</h2>
            <p>
              실용음악과 탑학교 작곡전공 졸업했습니다 레슨경력 8년
              피아노(가요반주,ccm,화성학,작곡) 알려드릴 수 있습니다 Pt,
              필라테스, 요가 전문가 선생님께 배우고싶습니다 카톡 asdasd
            </p>
            <h2>비용</h2>
            <p>5000/1h</p>
            <h2 ref={refImage}>사진 및 동영상</h2>
            <div className="post_img_container">
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />

              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt=""
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
            </div>
          </div>
        </div>
        <div className="message_side">
          <div className="for_message_box">
            작성자에게 메시지를 보내보세요
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={
                <SendIcon onClick={() => console.log("okok")}>send</SendIcon>
              }
            >
              Send
            </Button>
          </div>
        </div>
        <div className="post_comments">
          <div>
            <h2 ref={refReview}>Review</h2>
          </div>
          <ul>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <button className="post_review_more_btn">더보기</button>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
