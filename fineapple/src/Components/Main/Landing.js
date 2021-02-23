import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Lady from '../../img/mockup/lady.png'
import './Landing.css'



function Landing() {
    return (
        <div className="landing">
            
            <div className="title__container">
                <h1 className="title">우리동네 숨은 고수를 <br />소개해 드립니다</h1>
                <div className="input__container">
                    <input type="search"
                        placeholder="어떤 분야의 전문가를 찾으시나요?"
                        className="form__control"
                        autoComplete="off"
                    />
                    <div className="btn__search">
                        SEARCH
                    </div>
                </div>
                <div className="popular__container">
                    <p className="popular">
                    추천검색어 : 로고 디자인 | 게임 친구 | 수학 과외
                    </p>
                </div>
            </div>
            <div className="img__container">
                <img className="lady" src={Lady} alt='lady main' />
            </div>

        </div>

    )
}

export default Landing
