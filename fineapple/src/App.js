import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Feed from "./Components/Feed/Feed";
import Post from "./Components/Post/Post";
import Chat from "./Components/Chat/Chat";
import ChatBtn from "./Components/Chat/ChatBtn";
import Write from './Components/Write/Write'
import WorkTitle from './Components/Write/Work1'
import WorkDes from './Components/Write/Work2'
import WorkBudget from './Components/Write/Work3'
import Review from './Components/Write/Review'
// import WorkTitle from './Components/Write/Components/WorkTitle'
function App() {
  const [onChat, setOnChat] = useState(true);

  const handleChat = () => {
    console.log("ok");
    setOnChat((prev) => !prev);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/Feed" component={Feed} />
        <Route path="/Post" component={Post} />
        <Route path="/Write" component={Write} />
        <Route path="/work/title" component={WorkTitle} />
        <Route path="/work/description" render={WorkDes} />
        <Route path="/work/budget" render={WorkBudget} />
        <Route path="/work/review" render={Review} />
        {/*<Route path='/signin' component={Auth} /> 
        <Route path="/feed" component={feed} /> */}
      </Switch>
      {onChat ? (
        <Chat handleChat={handleChat} onChat={onChat} />
      ) : (
        <ChatBtn handleChat={handleChat} />
      )}
    </Router>
  );
}

export default App;
