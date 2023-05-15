import React from 'react';

// Local imports
import './message.scss';
import MessageLeft from './messageLeft/MessageLeft';
import MessageRight from './messageRight/MessageRight';

function Message() {
  return (
    <div className='message'>
      <div className="message-left">
        <MessageLeft/>
      </div>
      <div className="message-right">
        <MessageRight/>
      </div>
    </div>
  )
}

export default Message
