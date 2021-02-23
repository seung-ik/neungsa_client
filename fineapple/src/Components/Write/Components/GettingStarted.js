import React from 'react'
import { Link } from "react-router-dom";
import './GettingStarted.css'
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import Next from './Next'
import Prev from './Prev'

function GettingStarted() {
    return (
        
        <div className="gettingstarted">
            <div className="content__container">
                <div className="getting__container">
                    <h1 className="title__header">Getting started</h1>
                </div>
                <div className="choice__container">
                    <div className="choice__row">
                        <div className="choice__work">
                            <WorkIcon className="icon" />
                            <h3 className="choice__desc">레슨 구하기</h3>
                        </div>
                        <div className="choice__work">
                            <GroupIcon className="icon" />
                            <h3 className="choice__desc">친구 구하기</h3>
                        </div>
                    </div>
                </div>
                <div className="container__btns">
                    <Link className="writePage" to="/write">
                        <Prev />
                    </Link>
                    <Link className="writePage" to="/write/work/title">
                        <Next />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default GettingStarted
