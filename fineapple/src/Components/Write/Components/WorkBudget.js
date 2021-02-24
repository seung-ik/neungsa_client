import React from 'react'
import Next from './Next'
import Prev from './Prev'
import { Link } from "react-router-dom";

function WorkBudget() {
    return (
        <div>
            <h1>예산</h1>
            <div className="review__description">Budget details</div>
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
