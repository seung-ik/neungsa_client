import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, browserHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Header from "./Components/Header/Header";
import Header_dark from "./Components/Header/DarkHeader";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import ChatList from './Components/Chat/ChatContainer'
import ChatRoom from './Components/Chat/ChatRoom'
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
  const [onChatList, setOnChatList] = useState(false);
  const [onChatRoom, setOnChatRoom] = useState(false);


  // useEffect(() => {
  //   window.historyReatc = history;
  //   history.listen(location => {
  //     console.log(location);
  //   })
  // }, [])


  // 꺼지고 켜지고 (뱃지)
  const handleChatRoom = () => {
    console.log("ok");
    setOnChatRoom((prev) => !prev) && setOnChatList((prev) => !prev);
  };

  // 룸 - 챗 이동
  const handleChatList = () => {
    console.log("ok");
    setOnChatList((prev) => !prev);
  };

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
      

      {/* {onChatList ? 

        {onChat ? ( 
        <Chat handleChat={handleChat} onChat={onChat} />
      ) : (
        <ChatBtn handleChat={handleChat} />
        )}
       : (
        <ChatBtn handleChatList={handleChatList} />
      )} */}

      
    </Router>
  );
}

export default App;
