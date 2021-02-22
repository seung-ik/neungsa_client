import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Main.css'

function Main() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="container">
            <h1>Main</h1>
            <Link to='/Feed'>
                    Feed
            </Link>
        <Footer />
        </div>

    )
}

export default Main
