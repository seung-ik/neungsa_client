import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './GetStarted.css'
import lady from '../../img/Main/gs_br.png'

function GetStarted() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="getstarted">

                <div className="getstarted__left">
                    <span className="getstarted__left__header">
                        Fine the
                    <i> Talent </i>
                    needed to <br/>get your business 
                     <i> growing</i>
                    .
                    </span>
                    <Link to='/feed' className="getstarted__left__btn" onClick={handleClick}>
                        시작하기
                    </Link>
                </div>
                <div className="getstarted__right">
                    <img src={lady} alt="" className="getstarted__right__img" />
                </div>
            </div>

    )
}

export default GetStarted
