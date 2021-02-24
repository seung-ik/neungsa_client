import React from "react";
import "./Chat.css";

import Fineapple from '../../img/fineapple.png'
import Fine from '../../img/fine.svg'

const ChatBtn = ({ handleChat }) => {
  return (
    // <div className="chatting_btn">
    //   <button onClick={handleChat}>+</button>
    // </div>
    <div className="chatting_btn" onClick={handleChat} >
      {/* <div className="badge">1</div> */}
          <img className ="fineapple_chat" src={Fine} alt=""/>
  </div>
  );
};

export default ChatBtn;
