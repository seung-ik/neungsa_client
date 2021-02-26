import React from 'react'
import Next from './Next'
import Prev from './Prev'
import { Link } from "react-router-dom";
import './WorkBudget.css'

function WorkBudget() {
    return (
        <div className="workbudget">
            <div className="workbudget__container">
                <div className="workbudget__title">
                    <h1 className="workbudget__title__header">
                        가격 및 예산
                    </h1>
                    <p>Step 3 of 4</p>
                </div>
                
                <div className="workbudget__row">
                    <div className="workbudget__row__left">
                        시간당 계산
                    </div>
                    <div className="workbudget__row__right">
                        만나서 결정
                    </div>
                </div>

            </div>
            <div className="container__btns">
                    <Link className="writePage" to="/work/description">
                        <Prev />
                    </Link>
                    <Link className="writePage" to="/work/review">
                        <Next />
                    </Link>
                    
                </div>

            </div>
            
            
    )
}

export default WorkBudget
