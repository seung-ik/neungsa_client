import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Main.css'
import Slide from './Slideshow'
import Landing from './Landing'
import Map from '../../img/mockup/map.png'
import Recommandation from './Recommandation'
import Introduction from './Introduction'
import Business from './Business'
import Reviews from './Reviews'
import Inspration from './Inspration'
import GetStarted from './GetStarted'

function Main() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="main">
            <div className="main__container">
                <section className="landing__container">
                    <Landing />
                </section>
                
                <div className="map__container">
                    
                    <img className ="map_img"src={Map} alt='gangnam_map' />
                </div>
                
                <section className="recommandation__container">
                    <Recommandation />
                </section>
                <section className="introduction__container">
                <Introduction />
                </section>

                <section className="business__container">
                <Business />
                </section>

                <section className="reviews__container">
                <Inspration />
                </section>

                <section className="inspration__container">
                <Reviews />
                </section>

                <section className="getstarted__container">
                <GetStarted />
                </section> 
                <section className="getstarted__container">
                <Slide />
                </section> 
            </div>
            <Footer />
        </div>

    )
}

export default Main
