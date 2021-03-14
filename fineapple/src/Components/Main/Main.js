import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Main.css";
import Slide from "./Slideshow";
import Landing from "./Landing";
import Map from "../../img/mockup/map2.png";
import Recommandation from "./Recommandation";
import Introduction from "./Introduction";
import Business from "./Business";
import Reviews from "./Reviews";
import Inspration from "./Inspration";
import GetStarted from "./GetStarted";
import MapContents from "./MapContents";

function Main() {
  const [click, setClick] = useState(false);
  const [location, setLocation] = useState(null);

  const handleClick = () => setClick(!click);
  const handleMap = (location) => {
    setLocation(location);
  };

  return (
    <div className="main">
      <div className="main__container">
        <section className="landing__container">
          <Landing />
        </section>

        <div className="map__container">
          <MapContents handleMap={handleMap} />
        </div>

        <section className="recommandation__container">
          <Recommandation location={location} />
        </section>


        <section className="business__container">
          <Business />
        </section>

        <section className="inspration__container">
          <Reviews />
        </section>

        <section className="reviews__container">
          <Inspration />
        </section>

        <section className="getstarted__container">
          <GetStarted />
        </section>
        {/* <section className="getstarted__container">
                <Slide />
                </section>  */}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
