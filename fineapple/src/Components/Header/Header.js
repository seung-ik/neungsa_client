import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'



function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div>
            <Link to='/' className='header__logo' onClick={handleClick}> 
                        Logo
            </Link>
            <ul>
                <li className="header__item">
                            <Link to='/Login' className='header__links' onClick={handleClick}>
                                Log in
                            </Link>
                </li >
            </ul>
        </div>
    )
}

export default Header
