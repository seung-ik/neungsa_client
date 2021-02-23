import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './GetStarted.css'

function GetStarted() {
    return (
        <div className="getstarted">
            <h1>GetStarted</h1>
            <Link to='/Feed'>
                Feed
            </Link>
        </div>

    )
}

export default GetStarted
