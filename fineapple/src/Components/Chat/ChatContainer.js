import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import socketio from "socket.io-client";
import Chat from './Chat'
import ChatBtn from './ChatBtn'
import './ChatContainer.css'
import { Avatar } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import Logo from '../../img/fineapple.png'
import cho from './chu.png'




function ChatContainer({ handleChat }) {
    console.log(11111111)
    const socket = socketio.connect("http://localhost:3000");
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
        <div className="chatContainer">
            <div className="chatContainer__header">
                <div className="chatContainer__header__name__container">

                    <h4>Chats 💬</h4>
                </div>
                <CloseSharpIcon onClick={handleChat} className="chatContainer__header__close" />
            </div>

            <div className="chatContainer__list__container">
            <div className="chatContainer__list">
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                        <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                        <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </div>
            <div className="chatContainer__list">
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                        <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                        <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                        
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </div>
            <div className="chatContainer__list">
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                        <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                        <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </div>
                <Link className="chatContainer__list"
                to='./'>
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                    <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                    <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </Link>
            <div className="chatContainer__list">
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                        <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                        <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </div>
            <div className="chatContainer__list">
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                        <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                        <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </div>
            <div className="chatContainer__list">
                <div className="chatContainer__list__left">
                    <Avatar style={{ height: "60px", width: "60px" }} src={cho} />
                </div>
                <div className="chatContainer__list__middle">
                        <h2 className="chatContainer__list__middle__name">Emilyoun</h2>
                        <div className="chatContainer__list__con">
                            메세지가 도착했습니다
                        </div>
                </div>
                <div className="chatContainer__list__right">
                    2:20 PM
                </div>
            </div>




            </div>
            
            <div className="chatContainer__footer">
                <img src={Logo} alt="" />
                <div className="chatContainer__footer__content">
                위치기반 재능거래 서비스 <b>파인애플</b></div>
            </div>


        </div>
    )
}

export default ChatContainer
