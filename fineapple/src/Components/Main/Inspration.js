import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Inspration.css'
import more from '../../img/mockup/more.png'


function Inspration() {


    return (
        <div className="insparation">
            <img className="business__img" src={more} alt="Business" />
        </div>
    )
}

export default Inspration
