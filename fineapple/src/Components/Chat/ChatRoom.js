import React from 'react'
import { Route } from "react-router-dom";
import Chat from './Chat'
import ChatList from './ChatContainer'

const ChatRoom = ({ match }) => {
    return (
        <>
            <Route path={match.path} exact component={ChatList} />
            <Route path={`${match.path}/:id`}  component={Chat} />
        </>
    );
}

export default ChatRoom;
