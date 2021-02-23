import React from "react";
import "./Chat.css";

const ChatBtn = ({ handleChat }) => {
  return (
    <div className="chatting_btn">
      <button onClick={handleChat}>+</button>
    </div>
  );
};

export default ChatBtn;
