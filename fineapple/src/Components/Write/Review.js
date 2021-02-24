import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import GettingStarted from './Components/GettingStarted'
import Sidebar from './Components/Sidebar'
import FinalReview from './Components/WorkReview'
import './Write.css'

function Review() {
    return (
        <div className="write">
            <div className="write__body">
                <Sidebar />
                {/* <GettingStarted /> */}
                {/* <WorkTitle/> */}
                {/* <Description /> */}
                {/* <Budget /> */}
                <FinalReview />
            </div>

            <Footer />
        </div>
    )
}

export default Review