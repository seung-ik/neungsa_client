import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Next from "./BtnNext";
import Prev from "./BtnPrev";
import "./Page3.css";
import { useForm } from "react-hook-form";

function WorkDes({ handleWriteData }) {
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const { register, handleSubmit } = useForm();
  const [isDrag, setisDrag] = useState(false);
  const [toForm, setToForm] = useState([]);

  const renderPhotos = (photos) => {
    return photos.map((photo) => {
      return <img src={photo} key={photo} alt="" style={{ width: "70px" }} />;
    });
  };
  useEffect(() => {
    console.log(files);
    console.log(toForm);
  }, [files]);

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e) setisDrag(false);
    imageHandleChange(e);
  };
  const imageHandleChange = (e) => {
    if (e.type === "drop") {
      let fileArray = Array.from(e.dataTransfer.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFiles((prev) => prev.concat(fileArray));
      setToForm((prev) => prev.concat(Array.from(e.dataTransfer.files)));
    } else if (e.target.files) {
      let fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFiles((prev) => prev.concat(fileArray));
      setToForm((prev) => prev.concat(Array.from(e.target.files)));
    }
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e) setisDrag(false);
  };

  const onDragOver = (e) => {
    e.preventDefault(); // 브라우저 이벤트 방지
    e.stopPropagation();
    if (e) setisDrag(true);
  };

  return (
    <div className="workdes">
      <div
        className="workdes__container"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
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
            <div
              className={
                isDrag
                  ? "workdes__imgDrop__dropZone ondrag"
                  : "workdes__imgDrop__dropZone"
              }
            >
              파일을 끌어오거나 <span>업로드 </span>해주세요.
            </div>
          </div>

          <p>
            첨부파일은 각 <b> 100 MB </b>이하 <b>최대 5개</b>까지 등록
            가능합니다.{" "}
          </p>
          <div className="filebox">
            <label htmlFor="file">업로드</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={imageHandleChange}
            />
            <div>{renderPhotos(files)}</div>
          </div>
        </div>
        <div className="container__btns">
          <Link className="writePage" to="/write/2">
            <Prev />
          </Link>
          <Link
            className="writePage"
            to="/write/4"
            onClick={() => handleWriteData(description, files, toForm)}
          >
            <Next />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkDes;
