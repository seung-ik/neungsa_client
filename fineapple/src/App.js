import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Feed from './Components/Feed/Feedpage'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/Login" component={Login} />
        <Route path='/Feed' component={Feed} /> 
        {/*<Route path="/feed" component={feed} /> */}
      </Switch>
    </Router>
  );
}

export default App;
