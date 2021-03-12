import React from "react";
import { Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import Post from "../Post/Post";

const FeedandPost = ({ match }) => {
  return (
    <>
      <Route path={match.path} exact component={Feed} />
      <Route path={`${match.path}/:id`} component={Post} />
    </>
  );
};

export default FeedandPost;
