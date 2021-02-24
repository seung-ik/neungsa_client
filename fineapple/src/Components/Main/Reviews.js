import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Reviews.css'
import reviews from '../../img/mockup/reviews.png'

function Reviews() {
    return (
        <div className="reviews">
            <img className="business__img" src={reviews} alt="Business" />
        </div>
    )
}

export default Reviews
