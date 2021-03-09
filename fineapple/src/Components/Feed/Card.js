import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Profile from '../../img/mockup/profile.png';

function Card() {
  return (
    <div className="card__feed">
      <div className="card__top">
        <div className="card__top__left">
          <Avatar className='card__top__left__img' style={{ height: "70px", width: "70px" }} src={Profile} />
          <div className="card__top__right__km">
            <LocationOnIcon style={{ height: "20px", width: "20px" }}  className="card__top__right__emoji"/>
            <span>12km</span>
          </div>
        </div>
        <div className="card__top__right">
        <h4 className="card__top__right__name">emilyoun</h4>
          <div className="card__top__right__wrap">
            <div className="card__top__right__likes">
           
          <span>누적 좋아요 : 123</span>
          </div>
          
            
          </div>
          
        </div>
      </div>
      <div className="card__bottom">
        <div className="card__bottom__tags">
          <div className="card__bottom__tags__single">HTML</div>
          <div className="card__bottom__tags__single">CSS</div>
          <div className="card__bottom__tags__single">React</div>
          <div className="card__bottom__tags__single">Typescript</div>
          <div className="card__bottom__tags__single">Mysql</div>
        </div>
        <div className="card__bottom__btn">
        <Link to="/Post">
          프로필 보기
        </Link>
        </div>
      </div>
    </div>
    //     <div>
    //       <Avatar style={{ height: "70px", width: "70px" }} src={Profile} />
    //       <h4>emilyoun</h4>
    //     </div>
    //     <div className="feed_profile_text">
    //       <p>Frontend Developer</p>
    //       <p>누적좋아요: 123(7)</p>
    //       <span>서울시 방배동</span>
    //     </div>
    //   </div>
    //   <div className="feed_tag_container">
    //     <div className="feed_tag_box">
    //       <span>HTML</span>
    //       <span>CSS</span>
    //       <span>Typescript</span>
    //       <span>Javascript</span>
    //       <span>Mysql</span>
    //     </div>
    //     <Link to="/Post">
    //       <button>View Profile</button>
    //     </Link>
    //   </div>
    // </div> 
  );
}

export default Card;
