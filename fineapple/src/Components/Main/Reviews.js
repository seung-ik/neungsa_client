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
          <h4>전주시 중화산동 김00</h4>
          <p>같이 운동할 사람 모으기 좋아서 이용하고 있어요 굿굿</p>
        </div>
      </div>
      <div className={`review_listItem ${visible !== 2 ? "hidden" : ""}`}>
        <img src={review2} alt="" className="review_slide_img" />
        <div>
          <h4>울산시 서신동 이00</h4>
          <p>관심있으신분들 미용기술 전수해드려요</p>
        </div>
      </div>
      <div className={`review_listItem ${visible !== 3 ? "hidden" : ""}`}>
        <img src={review3} alt="" className="review_slide_img" />
        <div>
          <h4>서울시 방배동 박00</h4>
          <p>좋은분 만나게되서 쉬는날 같이 공부도 하고 좋아요</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
