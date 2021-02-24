import React from 'react'
import './WorkTitle.css'
import { Link } from "react-router-dom";
import Next from './Next'
import Prev from './Prev'

function WorkTitle() {
    return (
        <div className="worktitle">
            <div className="worktitle__container">
                <div className="worktitle__title">
                    <div className="worktitle__headerbox">
                        <h1 className="worktitle__header">소개하기</h1>
                        <p>Stpe 1 of 7</p>
                    </div>
                    <div className="worktitle__typeJob">
                        <div className="worktitle__typejob__enter__container">
                            <div className="typejob__enter">소개글을 입력해 주세요</div>
                            <input type="text" autoComplete="none" className="typejob__input"/>
                        </div>
                        <div className="worktitle__typejob__description">
                            <ul className="typejob__details">
                                소개하기의 예시입니다.
                                <li className="typejob__details__lists">
                                    어깨통증, 체계적이고 전문적으로 지도해드리겠습니다!
                                </li>
                                <li className="typejob__details__lists">
                                    가구 경력 20년 운송 20년 믿고 고용해도 좋습니다
                                </li>
                                <li className="typejob__details__lists">
                                    소비자에게 각인 될 수 있는 로고를 만들어 드립니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
                <div className="worktitle__job__category">
                    <div className="job__category__container">
                        <h3 className="job__category__title">서비스 카테고리</h3>
                    </div>
                    <div className="job__hashtag__container">
                        <h3 className="job__hashtag__title">서비스 키워드</h3>
                        <input className="job__hashtag__inputbox" placeholder="해쉬태그를 입력해주세요" type="text" autoComplete="none" /> 
                    </div>
                </div>
                <div className="container__btns">
                    <Link className="writePage" to="/write">
                        <Prev />
                    </Link>
                    <Link className="descriptionPage" to="/work/description">
                        <Next />
                    </Link>
                    
                </div>
            
            </div>
    </div>
    )
}

export default WorkTitle
