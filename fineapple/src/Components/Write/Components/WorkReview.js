import React from 'react'

import Next from './Next'
import Prev from './Prev'
import { Link } from "react-router-dom";

function WorkReview() {
    return (
        <div className="workreview">
            <h1>Reivew</h1>
            <div className="review__description">review details</div>
            <div className="container__btns">
                    <Link className="writePage" to="/work/budget">
                        <Prev />
                    </Link>
                    <Link className="writePage" to="/work/submit">
                        <Next />
                    </Link>
                    
                </div>
        </div>
    )
}

export default WorkReview
