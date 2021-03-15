import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Feed.css";
import Listitem from "./Listitem";
import Footer from "../Footer/Footer";
import Advertise from "./Advertise";
import FeedSideBar from "./FeedSideBar";
import { Avatar } from "@material-ui/core";
import axios from "axios";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";
import Bounce from "../../img/bounce.gif";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: yellow;
  height: 15px;
  width: 5px;
  radius: 5px;
  margin: 5px;
`;

function Feed(props) {
  const history = useHistory();
  const inputRef = useRef(null);
  const [feeds, setFeeds] = useState([]);
  const [feedsLoading, setFeedsLoading] = useState(false);
  const [filtredFeeds, setFiltredFeeds] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cost, setCost] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchLocation, setSearchLocation] = useState(null);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgb(251, 216, 110)");
  const [num, setNum] = useState(-5);

  useEffect(() => {
    setSelectedCategory(history.location.state);
    const search = props.location?.query?.search || "";
    setInputValue(search);
  }, []);

  const [mylat, setMyLat] = useState("");
  const [mylon, setMyLon] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMyLat(Math.round(position.coords.latitude));
      setMyLon(Math.round(position.coords.longitude));
    });
  }, []);
  function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  useEffect(
    function () {
      let data = feeds;
      if (inputValue) {
        data = data.filter(
          (item) =>
            item.title.includes(inputValue) || item.content.includes(inputValue)
        );
      }

      if (cost) {
        data = data.filter((item) => item.cost <= cost);
      }

      setFiltredFeeds(data);
    },
    [feeds, cost, inputValue]
  );

  useEffect(
    function () {
      const query = new URLSearchParams("");
      if (selectedCategory) {
        query.append("category", selectedCategory);
      }
      if (selectedGroup) {
        query.append("group_category", selectedGroup);
      }
      if (searchLocation) {
        query.append(`search`, searchLocation);
      }
      setFeedsLoading(true);
      // console.log(query.toString());
      axios
        .get(`https://fineapple.kr/feedpage?${query}`)
        .then((response) => {
          setFeeds(response.data.find_feed.slice(num).reverse());
          setFeedsLoading(false);
        })
        .catch((e) => {
          setFeedsLoading(false);
        });
    },
    [selectedCategory, selectedGroup, searchLocation, num]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => setFeedsLoading(false);
  }, []);

  return (
    <div className="feed">
      <div className="feed_container">
        <FeedSideBar
          setCategory={setSelectedCategory}
          setCost={setCost}
          setGroup={setSelectedGroup}
          setSearchLocation={setSearchLocation}
        />
        <div className="feed__wrapper">
          <div className="feed__wrapper__header">
            <h2 className='box__ animate__ fadeInDown__ two__'> 파인애플에는 이런일이 있어요!</h2>

            <div className="feed__wrapper__top__container">
              <div className="feed__wrapper__search">
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="e.g. 딸기농장 일손구함"
                  className="feed__wrapper__search__input"
                  onKeyPress={(event) =>
                    event.key === "Enter" && setInputValue(event.target.value)
                  }
                />
                <div
                  onClick={() => setInputValue(inputRef.current.value)}
                  className="feed__wrapper__search__btn"
                >
                  검색
                </div>
              </div>
              <Link to="/write/1" className="feed__btn__write">
                글 작성
              </Link>
            </div>
          </div>

          {!feedsLoading && (
            <div className="feed_posts">
              {filtredFeeds.length > 0 ? (
                filtredFeeds.map((feed) => (
                  <Link
                    className="writePage"
                    key={feed.id}
                    to={`/feed/${feed.id}`}
                  >
                    <Listitem
                      feed={feed}
                      distance={
                        !feed.latitude
                          ? ""
                          : Math.round(
                              getDistanceFromLatLonInKm(
                                mylat,
                                mylon,
                                feed.latitude,
                                feed.longitude
                              )
                            )
                      }
                    />
                  </Link>
                ))
              ) : (
                <div className="noresults">
                  <div className="noresults__img">
                    <img src={Bounce} alt="" className="noresults__img__fine" />
                  </div>
                  <h4 className="noresults__text">
                    검색결과가 없어요. 다른것을 검색해보세요!
                  </h4>
                </div>
              )}
            </div>
          )}
          {feedsLoading && (
            <div className="loading__fade">
              <FadeLoader
                color={color}
                loading={loading}
                css={override}
                size={150}
              />{" "}
            </div>
          )}
          <div
            className="see__more__container"
            onClick={() => setNum((prev) => prev - 5)}
          >
            더보기
          </div>
        </div>
      </div>
      <Advertise />
      <Footer />
    </div>
  );
}
export default Feed;
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

// useEffect(
//   function () {

//     const queryGroup = selectedGroup
//       ? `?group_category=${selectedGroup}`
//       : "";
//     axios
//       .get(`https://localhost:3000/feedpage${queryGroup}`)
//       .then((response) => {
//         setFeeds(response.data.find_feed);
//       });
//   },
//   [selectedGroup]
// );

// useEffect(
//   function () {
//     const queryGroup = searchLocation ? `?search=${searchLocation}` : "";
//     axios
//       .get(`https://localhost:3000/feedpage${queryGroup}`)
//       .then((response) => {
//         setFeeds(response.data.find_feed);
//       });
//   },
//   [searchLocation]
// );

{
  /* <div className="feed_cards">
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <Card data={slideData} className="single__card" />
        <PlayArrowIcon
          className="feed__cards__next"
          onClick={handleSlideBtn}
        />
      </div> */
}
