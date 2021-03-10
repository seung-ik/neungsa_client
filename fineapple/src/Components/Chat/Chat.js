import React, { useState, useEffect } from "react";
import "./Chat.css";
import socketio from "socket.io-client";

const Chat = ({ handleChat }) => {
  const socket = socketio.connect("http://localhost:4000");
  const [state, setState] = useState({ message: "", name: "tmddlr" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  }, []);

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { message, name } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="chatting_box">
      <div className="chat_header">
        <h4>김동현</h4>
        <button onClick={handleChat}>X</button>
      </div>
      <div className="conversation">
        <ul>
          <li className="chat_you">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>추성훈</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
          <li className="chat_you">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>추성훈</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
          <li className="chat_i">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>김동현</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
          <li className="chat_you">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>추성훈</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
          <li className="chat_i">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>김동현</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
          <li className="chat_you">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>추성훈</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
          <li className="chat_i">
            <div className="chat_profile">
              <img
                src="https://lh3.googleusercontent.com/proxy/efq1JEAnVpcHW5V6QO12O9vwZ6_nOJ_1pUvJ67h1DWTOAZ2ZyZW5IppRrGH1Fa9fl_h1JNsMiJgWxlURerbPVaQvUa0le_Spe4pewYY-NGedJ4whFs8GHUYowciINL3T1RRPaYH5ZExj7pVVeK4SWGzcM4-FEGulQEjujPGnOQ"
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span>김동현</span>
            </div>
            <div className="chat_you_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis.
              </p>
              <span>오전 10:10</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="input_send">
        <input
          name="message"
          type="text"
          value={state.message}
          onChange={(e) => onTextChange(e)}
        />
        <button onClick={() => onMessageSubmit}>전송</button>
      </div>
    </div>
  );
};

export default Chat;
