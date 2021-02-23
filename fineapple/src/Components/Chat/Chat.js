import React from "react";
import "./Chat.css";

const Chat = ({ handleChat }) => {
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
        <input type="text" />
        <button>전송</button>
      </div>
    </div>
  );
};

export default Chat;
