import React, { useState } from "react";
import { Link } from "react-router-dom";
import Next from "./BtnNext";
import Prev from "./BtnPrev";
import "./Page3.css";

function WorkDes({ handleWriteData }) {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([]);
  return (
    <div className="workdes">
      <div className="workdes__container">
        <div className="workdes__title">
          <h1 className="workdes__title__header">상세설명</h1>
          <p>Step 2 of 4</p>
        </div>
        <div className="workdes__description">
          <ul className="description__details">
            좋은 설명의 예시입니다:
            <li className="description__details__lists">경력 및 자격증</li>
            <li className="description__details__lists">
              찾고 있는 프리랜서 또는 대리점의 유형
            </li>
            <li className="description__details__lists">
              프로젝트, 팀 또는 귀사에서 고유한 모든 항목
            </li>
          </ul>
        </div>
        <textarea
          type="text"
          autoComplete="none"
          className="description__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="workdes__imgDrop">
          <h1 className="workdes__imgDrop__title">
            부가적인 사진 및 파일 (선택 항목){" "}
          </h1>
          <div className="dropZone__container">
            <div className="workdes__imgDrop__dropZone">
              파일을 끌어오거나 <span>업로드 </span>해주세요.
            </div>
          </div>

          <p>
            첨부파일은 각 <b> 100 MB </b>이하 <b>최대 5개</b>까지 등록
            가능합니다.{" "}
          </p>
        </div>
        <div className="container__btns">
          <Link className="writePage" to="/write/2">
            <Prev />
          </Link>
          <Link
            className="writePage"
            to="/write/4"
            onClick={() => handleWriteData(description, file)}
          >
            <Next />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkDes;
