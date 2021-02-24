import React from "react";
import "./Chat.css";

import Fineapple from '../../img/fineapple.png'
import Fine from '../../img/chat_fine.png'

const ChatBtn = ({ handleChat }) => {
  return (
    // <div className="chatting_btn">
    //   <button onClick={handleChat}>+</button>
    // </div>
    <div className="chatting_btn" onClick={handleChat} >
      
      <div className="chatting_btn_cover">
        
      </div>
      <img className ="fineapple_chat box fade-in one" src={Fine} alt="" />
      <div className="badge box fade-in two">2</div>
  </div>
  );
};

export default ChatBtn;
