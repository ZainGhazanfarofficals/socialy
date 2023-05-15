import React from 'react';

// Local imports
import './chatListItem.scss';

function ChatListItem() {
  return (
    <a href='#' className='chat-list-item'>
        <div className='chat-item-image'>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/307290454_564822875402748_3786414322699449020_n.jpg?ccb=11-4&oh=01_AdTx2TNCF0LJWT9RQO3RPSZ7c430XoGrv0xaGjW6kTz1Tw&oe=6433EA4B" alt="" />
        </div>
        <div className='chat-item-info'>
                <h3>John Doe</h3>
                <p>Hey, how are you? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic voluptates suscipit sequi. Quod vitae odit consectetur porro delectus, quia aliquid.</p>
        </div>

    </a>
  )
}

export default ChatListItem
