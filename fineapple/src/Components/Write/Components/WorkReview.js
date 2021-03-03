import React from 'react'

import Next from './Next'
import Prev from './Prev'
import { Link } from "react-router-dom";
import './WorkReview.css'

function WorkReview() {
    return (
        <div className="workreview">
            <div className="workreview__title">
                <div className="workreview__title__header">
                    <h1>리뷰하고 글 작성하기</h1>
                    <div className="workreview__post__now">게시글 저장</div>
                </div>
                <h1 className="workreview__top">글 제목</h1>
                <div className="workreview__container">
                    <h1>글 제목</h1>
                    <p>코딩 무료로 가르쳐 드립니다</p>
                </div>
                <div className="workreview__container">
                    <h1>서비스 카테고리</h1>
                    <p>교육</p>
                </div>
                <div className="workreview__container">
                    <h1>서비스 태그</h1>
                    <div className="workreview__tag__container">
                        <div className="tag__review">컴퓨터</div>
                        <div className="tag__review">코딩</div>
                        <div className="tag__review">재능기부</div>
                        <div className="tag__review">리액트</div>
                    </div>
                </div>
            </div>
            <div className="workreview__description">
            <h1 className="workreview__top">상세 설명</h1>
                <div className="workreview__container">
                    <h1>상세 설명</h1>
                    <p>코딩 무료로 가르쳐 드립니다. 백앤드 계발자인데 리액트도 잘해요 리액트 가르쳐드립니다.선착순 한명만</p>
                </div>
            </div>
            <div className="workrevview__budget">
            <h1 className="workreview__top">가격 및 예산</h1>
                <div className="workreview__container">
                    <h1>결제 방법</h1>
                    <p>시간당 계산</p>
                </div>
                <div className="workreview__container">
                    <h1>시간당 가격</h1>
                    <p>0 원</p>
                </div>
                <div className="container__btns">
                <Link className="writePage" to="/work/budget">
                        <Prev />
                    </Link>
                    <Link className="writePage" to="/login">
                        <Next />
                    </Link>
                </div>
            </div>
                    
                    
                </div>

    )
}

export default WorkReview
