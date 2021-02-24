import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Introduction.css'
import description from '../../img/mockup/description.png'

function Introduction() {
    return (
        <div className="introduction">
            <img className="business__img" src={description} alt="Business" />
       </div>
    )
}

export default Introduction
