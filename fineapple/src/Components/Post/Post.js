import React from "react";
import "./Post.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Comment from "./Comment";

const Post = () => {
  return (
    <div>
      <div className="post_container">
        <div className="post_content">
          <div className="title_container">
            <img
              src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
              alt=""
              className="post_profile_img"
            />
            <div>
              <h2>코딩 알려줄게요</h2>
              <span>#javascript</span>
              <div>
                <span> keyword1 </span>
                <span> keyword2 </span>
                <span> keyword3 </span>
              </div>
            </div>
          </div>
          <div className="introduction_container">
            <div>
              <h2>기본정보</h2>
              <p>본인인증</p>
              <p>30회 누적사용</p>
              <p>서울시 강남구</p>
              <p>연락가능 시간:1시</p>
              <p>계좌이체&현금가능</p>
            </div>
            <div>
              <h2>추가정보</h2>
              <p>사업자</p>
              <p>자격증</p>
              <p>직장</p>
              <p>학교</p>
              <p>경력</p>
            </div>
          </div>
          <div className="text_container">
            <h3>서비스 상세설명</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              soluta iusto ratione officiis distinctio officia. Eligendi rem
              sapiente suscipit in quaerat alias voluptatibus eveniet.
              Blanditiis ut ducimus, tempore odit praesentium porro quae nam ea
              officiis amet provident ab voluptatum perspiciatis aliquid eius
              tenetur magnam dolore ipsam at, officia reprehenderit iusto.
            </p>
            <h3>비용</h3>
            <p>5000/1h</p>
            <h3>사진 및 동영상</h3>
            <div className="post_img_container">
              <img
                src=""
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />

              <img
                alt="sample img"
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "aquamarine",
                }}
              />
              <img
                alt="sample img"
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
            궁금한게 있으면 메시지로 물어보세요~
            <Link to="/chatting">
              <button>send message</button>
            </Link>
          </div>
        </div>
        <div className="post_comments">
          <div>
            <h2>Review</h2>
            <span>좋아요👌 : 12</span>
          </div>
          <ul>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
