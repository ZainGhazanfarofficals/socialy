import React from 'react';

// Local imports
import './chatList.scss';
import ChatListItem from './ChatListItem';

function ChatList() {
  return (
    <div className='chat-list-wrapper'>
      <div className='chat-list-header'>
        <h3>Messaging</h3>
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </span>
      </div>
      <div className='chat-list-search'>
        <div className="chat-list-search-wrapper">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M13.8,13.8 L18,18 L13.8,13.8 Z M10.5,15 C12.9852814,15 15,12.9852814 15,10.5 C15,8.01471863 12.9852814,6 10.5,6 C8.01471863,6 6,8.01471863 6,10.5 C6,12.9852814 8.01471863,15 10.5,15 Z"></path></svg>
          <input type="text" placeholder='Search Messages'/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z"></path></svg>
        </div>

      </div>
      <div className='chat-list-body'>
        <ChatListItem/>
        <ChatListItem/>
        <ChatListItem/>
        <ChatListItem/>
        <ChatListItem/>
      </div>
    </div>
  )
}

export default ChatList
