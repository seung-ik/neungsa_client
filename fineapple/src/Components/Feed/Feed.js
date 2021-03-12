import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Feed.css";
import Listitem from "./Listitem";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";
import FeedSideBar from "./FeedSideBar";
import { Avatar } from "@material-ui/core";
import axios from "axios";
import MapContents from '../Main/MapContents'


function Feed() {


  const inputRef = useRef(null)
  const [feeds, setFeeds] = useState([]);
  const [filtredFeeds, setFiltredFeeds] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cost, setCost] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null)



  //location 
  const [location, setLocation] = useState(null);
  const [defaultLocation, setDefaultLocation] = useState(-780);
  const handleButton = (move) => {
    // console.log(move);
    if (move === "left") {
      setDefaultLocation((prev) => {
        if (prev - 260 === -1820) {
          return -780;
        }
        return prev - 260;
      });
    } else if (move === "right") {
      setDefaultLocation((prev) => {
        if (prev + 260 === 260) {
          return -780;
        }
        return prev + 260;
      });
    }
  };


  useEffect(function () {
    let data = feeds;
    if (inputValue) {
      data = data.filter(item => item.title.includes(inputValue) || item.content.includes(inputValue))
    }

    if (cost) {
      data = data.filter(item => item.cost <= cost)
    }

    setFiltredFeeds(data);
  }, [feeds, cost, inputValue]);


  // localhost:3000/feedpage?category=asdfsadf
  // localhost:3000/feedback?group_catgory=kl;kjljk
  // localhost:3000/feedback?category=asdf&group_category=asdf&longitude=945

  // useEffect(() => {
  //   // 1. build the query
  //   // ['cateogry', ''] --> ['category']
  //   const categoryParam = selectedCategory ? `category=${selectedCategory}` : ''
  //   const groupParam = selectedGroup ? `group_category=${selectedGroup}` : ''
  //   const locationParam = searchLocation ? `search=${searchLocation}` : ''
  //   // console.log(searchLocation)
  //   // const query = [categoryParam, groupParam, locationParam].filter(Boolean).map((el, idx) => {
  //   //   if (idx === 0) return `?${el}`
  //   //   return `&${el}`
  //   // });
  //   // axios.get(`https://localhost:3000/feedpage${query}`)
  //   //   .then((response) => {
  //   //   console.log(response.data)
  //   //   setFeeds(response.data.find_feed)

  //   // })

  //   // 2. make request to back end
  // }, [selectedCategory, selectedGroup, searchLocation]) // selectedLocation  

  useEffect(function () {
    const query = selectedCategory ? `?category=${selectedCategory}` : '';
    axios.get(`https://localhost:3000/feedpage${query}`)
      .then((response) => {
        setFeeds(response.data.find_feed)

      })

  }, [selectedCategory]);

  useEffect(function () {
    const queryGroup = selectedGroup ? `?group_category=${selectedGroup}` : '';
    axios.get(`https://localhost:3000/feedpage${queryGroup}`)
      .then((response) => {
        setFeeds(response.data.find_feed)

      })

  }, [selectedGroup]);

  useEffect(function () {
    const queryGroup = searchLocation ? `?search=${searchLocation}` : '';
    axios.get(`https://localhost:3000/feedpage${queryGroup}`)
      .then((response) => {
        setFeeds(response.data.find_feed)

      })

  }, [searchLocation]);



  return (
    <div className="feed">

      {/* <div className="feed_cards">
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <PlayArrowIcon
          className="feed__cards__next"
          onClick={handleSlideBtn}
        
        />
      </div> */}
      <div className="feed_container">
        <FeedSideBar setCategory={setSelectedCategory} setCost={setCost} setGroup={setSelectedGroup} setSearchLocation={setSearchLocation} />
        <div className="feed__wrapper">
          <div className="feed__wrapper__header">

            <h2> {location ? location : "파인애플"}에는 이런일이 있어요!</h2>


            <div className="feed__wrapper__top__container">
              <div className="feed__wrapper__search">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="e.g. 딸기농장 일손구함"
                  className="feed__wrapper__search__input"
                  onKeyPress={event => event.key === 'Enter' && setInputValue(event.target.value)}
                />
                <div
                  onClick={() => setInputValue(inputRef.current.value)} className="feed__wrapper__search__btn">검색</div>
              </div>
              <Link to="/write/1" className="feed__btn__write" >
                글 작성
            </Link>
            </div>
          </div>



          <div className="feed_posts">
            {filtredFeeds.length > 0
              ? filtredFeeds.map(feed => (
                <Link className="writePage" key={feed.id} to={`/feed/${feed.id}`}>
                  <Listitem feed={feed} />
                </Link>))
              :
              <div className="noresults">no results</div>
            }


          </div>

          <div className="see__more__container">더보기</div>
        </div>
      </div>
      <Advertise />
      <Footer />
    </div>
  );
};

export default Feed;
