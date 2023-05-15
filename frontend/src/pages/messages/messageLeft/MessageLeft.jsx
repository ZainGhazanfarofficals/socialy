import React from 'react';
import {useParams} from 'react-router-dom';
// Local imports
import './messageLeft.scss';
import ChatList from './chatsList/ChatList';
import ChatBox from './chatBox/ChatBox';

function MessageLeft() {
  const {id} = useParams();
  console.log(id);
  return (
    <div className='message-left-wrapper'>
      <div className='chat-list'>
        <ChatList/>
      </div>
      <div className='chat-box'>
        <ChatBox/>
      </div>
    </div>
  )
}

export default MessageLeft
