import React from 'react'
import { Link } from "react-router-dom";
import Next from './Next'
import Prev from './Prev'
import './WorkDes.css'

function WorkDes() {
    return (
        <div className="workdes">
            <h1>Description</h1>
            <div className="container__btns">
                    <Link className="writePage" to="/work/title">
                        <Prev />
                    </Link>
                    <Link className="writePage" to="/work/budget">
                        <Next />
                    </Link>
                    
                </div>
        </div>
        
    )
}

export default WorkDes
