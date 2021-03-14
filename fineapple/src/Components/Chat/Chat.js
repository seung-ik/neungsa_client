import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Link } from "react-router-dom";
// import socketio from "socket.io-client";
import { Avatar } from "@material-ui/core";
import cho from "./chu.png";
import dong from "./dong.png";
import SendIcon from "@material-ui/icons/Send";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";

const Chat = ({ handleChat, closeChatList, backToChatRoom }) => {
  // const socket = socketio.connect("http://localhost:3000");
  const [state, setState] = useState({ message: "", name: "tmddlr" });
  const [chat, setChat] = useState([]);

  // useEffect(() => {
  //   socket.on("message", ({ name, message }) => {
  //     setChat([...chat, { name, message }]);
  //   });
  // }, []);

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { message, name } = state;
    // socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="chatting_box">
      <div className="chat_header">
        <div className="chat_header_name_container">
          <ArrowBackIosIcon
            onClick={() => backToChatRoom()}
            className="chat_header_arrow"
          />

          <Avatar style={{ height: "40px", width: "40px" }} src={cho} />
          <h4>추성훈</h4>
        </div>
        <CloseSharpIcon onClick={closeChatList} className="chat_header_close" />
      </div>

      <div className="conversation">
        <ul>
          <li className="chat_you">
            <div className="chat_profile">
              {/* <img src={cho} alt=""/> */}
              <Avatar style={{ height: "25px", width: "25px" }} src={cho} />
              <div className="chat_profile_name">추성훈</div>
              <div className="chat_profile_sent">2:20 PM</div>
            </div>
            <div className="chat_you_text">
              <div className="chat_you_text_content">
                안녕하세요 💪🏿 <br></br> 실전형 태권도 알려드립니다.
              </div>
            </div>
          </li>
          <li className="chat_you">
            <div className="chat_profile">
              <Avatar style={{ height: "25px", width: "25px" }} src={cho} />
              <div className="chat_profile_name">추성훈</div>
              <div className="chat_profile_sent">2:20 PM</div>
            </div>
            <div className="chat_you_text">
              <div className="chat_you_text_content">
                무기 앞에 장사 없는거 아시죠?
              </div>
            </div>
          </li>
          <li className="chat_i">
            <div className="chat_profile">
              <div className="chat_profile_sent">2:34 PM</div>
            </div>
            <div className="chat_me_text">
              <div className="chat_me_text_content">
                안녕하세요 시간당 얼마인가여 🤔
              </div>
            </div>
          </li>
          <li className="chat_you">
            <div className="chat_profile">
              <Avatar style={{ height: "25px", width: "25px" }} src={cho} />
              <div className="chat_profile_name">추성훈</div>
              <div className="chat_profile_sent">2:32 PM</div>
            </div>
            <div className="chat_you_text">
              <div className="chat_you_text_content"> 삼만원이요</div>
            </div>
          </li>

          <li className="chat_i">
            <div className="chat_profile">
              <div className="chat_profile_sent">2:34 PM</div>
            </div>
            <div className="chat_me_text">
              <div className="chat_me_text_content">
                {" "}
                너무 비싼데 😂 만원 갑시다
              </div>
            </div>
          </li>
          <li className="chat_you">
            <div className="chat_profile">
              <Avatar style={{ height: "25px", width: "25px" }} src={cho} />
              <div className="chat_profile_name">추성훈</div>
              <div className="chat_profile_sent">2:34 PM</div>
            </div>
            <div className="chat_you_text">
              <div className="chat_you_text_content">
                만원 괜찮아요 내일 우성아파트 사거리에서 만날까요{" "}
              </div>
            </div>
          </li>
          <li className="chat_i">
            <div className="chat_profile">
              <div className="chat_profile_sent">2:34 PM</div>
            </div>
            <div className="chat_me_text">
              <div className="chat_me_text_content">넵 내일 봐요</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="input_send">
        <input
          name="message"
          type="text"
          placeholder="메세지를 입력해주세요."
          value={state.message}
          onChange={(e) => onTextChange(e)}
        />
        <SendIcon className="input_send_btn" onClick={() => onMessageSubmit} />
      </div>
    </div>
  );
};

export default Chat;
