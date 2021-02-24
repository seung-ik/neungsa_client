import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Business.css'
import business from '../../img/mockup/business.png'
import more from '../../img/mockup/more.png'
import description from '../../img/mockup/description.png'
import reviews from '../../img/mockup/reviews.png'

function Business() {
    return (
        <div className="business">
            <img className="business__img" src={description} alt="Business" />
            <img className="business__img" src={business} alt="Business" />
            <img className="business__img" src={more} alt="Business" />
            <img className="business__img" src={reviews} alt="Business" />
    
        </div>
        )
}

export default Business
