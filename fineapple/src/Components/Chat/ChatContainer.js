import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import socketio from "socket.io-client";
import Chat from "./Chat";
import ChatBtn from "./ChatBtn";
import "./ChatContainer.css";
import { Avatar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";

function ChatContainer({ handleChat, closeChatRoom, openChatList }) {
  console.log(11111111);
  //   const socket = socketio.connect("http://localhost:3000");
  const [state, setState] = useState({ message: "", name: "tmddlr" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // socket.on("message", ({ name, message }) => {
    //   setChat([...chat, { name, message }]);
    // });
  }, []);

  //   const onMessageSubmit = (e) => {
  //     e.preventDefault();
  //     const { message, name } = state;
  //     socket.emit("message", { name, message });
  //     setState({ message: "", name });
  //   };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="chatContainer">
      <div className="chatContainer__header">
        <div className="chatContainer__header__name__container">
          <h4>Chats</h4>
        </div>
        <CloseSharpIcon
          onClick={() => closeChatRoom()}
          className="chatContainer__header__close"
        />
      </div>
      <div className="chatContainer__list">
        <div onClick={() => openChatList()}>list</div>
      </div>
    </div>
  );
}

export default ChatContainer;
