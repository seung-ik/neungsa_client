import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import GettingStarted from './Components/GettingStarted'
import Sidebar from './Components/Sidebar'
import Description from './Components/WorkDes'
import './Write.css'

function Work2() {
    return (
        <div className="write">
            <div className="write__body">
                <Sidebar />
                {/* <GettingStarted /> */}
                {/* <WorkTitle/> */}
                <Description />
                {/* <Budget /> */}
                {/* <Review /> */}
            </div>

            <Footer />
        </div>
    )
}

export default Work2