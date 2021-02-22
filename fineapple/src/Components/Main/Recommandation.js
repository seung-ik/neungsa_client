import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rec1 from '../../img/mockup/rec1.png'
import Rec2 from '../../img/mockup/rec2.png'
import Rec3 from '../../img/mockup/rec3.png'
import Rec4 from '../../img/mockup/rec4.png'
import Rec5 from '../../img/mockup/rec5.png'
import './Recommandation.css'

function Recommandation() {
    return (
        <div className="recommandation">
            <div className="text__container">
                <h1 className="rec__header">역삼 1동 에는 이런 일들이 있어요!</h1>
            </div>
            <div className="slides__container">
                <button className="slider__prev slide__btn">
                    <img className="img__btn__1" src="https://assets.cdn.soomgo.com/icons/slick-arrow-left.svg" alt="left"/>
                </button>

                <div className="slider">
                    <div className="slider__track">
                        <div className="single__slide">
                            <img className="slide__img" src={ Rec1 } alt=""/>
                        </div>
                        <div className="single__slide">
                            <img className="slide__img" src={ Rec2 } alt=""/>
                        </div>
                        <div className="single__slide">
                            <img className="slide__img" src={ Rec3 } alt=""/>
                        </div>
                        <div className="single__slide">
                            <img className="slide__img" src={ Rec4 } alt=""/>
                        </div>
                        <div className="single__slide">
                            <img className="slide__img" src={ Rec5 } alt=""/>
                        </div>
                    </div>
                </div>

                <button className="slider__next slide__btn">
                    <img className="img__btn__2" src="https://assets.cdn.soomgo.com/icons/slick-arrow-right.svg" alt="right"/>
                </button>
            </div>
        </div>
        
    )
}

export default Recommandation
