import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Reviews.css";
import review1 from "../../img/mockup/review1.jpg";
import review2 from "../../img/mockup/review2.jpg";
import review3 from "../../img/mockup/review3.jpg";

function Reviews() {
  const [visible, setVisible] = useState(1);
  const handleButton = () => {
    setVisible((prev) => {
      if (prev === 1) return 2;
      if (prev === 2) return 3;
      if (prev === 3) return 1;
    });
  };
  return (
    <div className="review" onClick={handleButton}>
      <div className={`review_listItem ${visible !== 1 ? "hidden" : ""}`}>
        <img src={review1} alt="" className="review_slide_img" />
        <div>
          <h4>전주시 중화산동 오승익</h4>
          <div className="review_content">
            안녕하세요 ⚽️ <br/>
            제가 공좀 차는데
            축구하실 분도 환영하고 축구배우실 분은 <br/>레슨도 가능합니다~
          </div>
        </div>
      </div>
      <div className={`review_listItem ${visible !== 2 ? "hidden" : ""}`}>
        <img src={review2} alt="" className="review_slide_img" />
        <div>
          <h4>울산시 동구 이지은</h4>
          <div className="review_content">
            거듭 말하지만 미용은 혼자 갈 수 있는 길이 아닙니다. 미용은 서로가
            가진 기술을 공유하여 지속적인 발전을 이룰 수 있습니다. 👍영업시간
            이후에 미용에 관심있으신 분에게 미용기술 전수해드려요. 
          </div>
        </div>
      </div>
      <div className={`review_listItem ${visible !== 3 ? "hidden" : ""}`}>
        <img src={review3} alt="" className="review_slide_img" />
        <div>
          <h4>서울시 방배동 박수정</h4>
          <div className="review_content">
            좋은분 만나게되서 쉬는날 같이 공부도 하고 좋아요 🌤
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
