import React, { Component, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  browserHistory,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./Components/Header/Header";
import Header_dark from "./Components/Header/DarkHeader";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import ChatList from "./Components/Chat/Chat";
import ChatRoom from "./Components/Chat/ChatContainer";
import ChatBtn from "./Components/Chat/ChatBtn";
import Write from "./Components/Write/Write";
import Mypage from "./Components/Mypage/Mypage";
import FeedAndPost from "./Components/FeedandPost/FeedandPost";
import MypageUpdate from "./Components/Write/Components/PageUpdateMy";
import Team from "./Components/Others/TeamPage/TheTeam";
import Business from "./Components/Others/BusinessPage/BusinessPage";

const history = createBrowserHistory();
// import WorkTitle from './Components/Write/Components/WorkTitle'

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // },[])
  const [chatRoom, setChatRoom] = useState(false);
  const [chatList, setChatList] = useState(false);
  const [email, setEmail] = useState("");
  const [chatId, setChatId] = useState("");

  const openChatRoom = () => {
    console.log("openRoom");
    setChatRoom(true);
    setChatList(false);
  };
  const closeChatRoomAndList = () => {
    console.log("closeChat");
    setChatRoom(false);
    setChatList(false);
  };
  const openChatList  =  (email, chatId) => {
    console.log("openList");
    setEmail(email);
    setChatId(chatId);
    setChatRoom(false);
    setChatList(true);
  };

  function whatComponent() {
    if (!chatRoom && !chatList) {
      return <ChatBtn openChatRoom={openChatRoom} />;
    } else if (chatRoom && !chatList) {
      return (
        <ChatRoom
          closeChatRoom={closeChatRoomAndList}
          openChatList={openChatList}
        />
      );
    } else if (!chatRoom && chatList) {
      return (
        <ChatList
          closeChatList={closeChatRoomAndList}
          backToChatRoom={openChatRoom}
          email={email}
          chatId={chatId}
        />
      );
    }
  }

  useEffect(() => {
    window.historyReatc = history;
    history.listen((location) => {
      console.log(location);
    });
  }, []);

  return (
    // <Router history={history}>
    //   {window.location.pathname === '/' ? <Header /> : <Header_dark/> }
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Login" exact component={Login} />
        <Route path="/feed" component={FeedAndPost} />
        <Route path="/write" component={Write} />
        <Route path="/mypage/update" exact component={MypageUpdate} />
        <Route path="/mypage" exact component={Mypage} />
        <Route path="/theteam" exact component={Team} />
        <Route path="/business" exact component={Business} />
      </Switch>
      {whatComponent()}
    </Router>
  );
}

export default App;
