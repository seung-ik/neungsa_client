import React, { useEffect, useState } from 'react'
import './DarkHeader.css'
import LogoDark from '../../img/logo_wite.png'
import { Link } from 'react-router-dom'

function DarkHeader() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="header__dark">
        <div className="container">
        <Link to='/' className='header__logo' onClick={handleClick}> 
            <img src={LogoDark} alt='Fineapple logo' />
        </Link>
        <ul className="list">
            <li className="header__item">
                        <Link to='/Login' className='header__links__dark' onClick={handleClick}>
                            로그인
                        </Link>
                </li >
                <li className="header__item">
                        <Link to='/feed' className='header__links__dark' onClick={handleClick}>
                            피드
                        </Link>
                </li >
                <li className="header__item">
                        <Link to='/mypage' className='header__links__dark' onClick={handleClick}>
                            마이페이지
                        </Link>
            </li >
        </ul>
        </div>
    </div>
    )
}

export default DarkHeader
