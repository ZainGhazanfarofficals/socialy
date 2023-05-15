import React from 'react';

// Local imports
import './chatBox.scss';

function ChatBox() {
  return (
    <div className='chat-box'>
      <div className='chat-box-header'>
        <div className='chat-box-header-left'>
          <div className='chat-box-header-left-img'>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/307290454_564822875402748_3786414322699449020_n.jpg?ccb=11-4&oh=01_AdTx2TNCF0LJWT9RQO3RPSZ7c430XoGrv0xaGjW6kTz1Tw&oe=6433EA4B" alt=""/>
          </div>
          <div className='chat-box-header-left-name'>
            <h3>John Doe</h3>
            <p>Active 1 hour ago</p>
          </div>
        </div>
        <div className='chat-box-header-right'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false"><path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false"><path d="M2 8v8a3 3 0 003 3h13V5H5a3 3 0 00-3 3zm4 3h3V8h2v3h3v2h-3v3H9v-3H6zm17-4v10h-2l-2-1V8l2-1z"></path></svg>
            <svg aria-hidden="true" focusable="false" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8,2.77,9.6,6l3.59.53-2.6,2.54.61,3.58L8,11,4.8,12.67l.61-3.58L2.81,6.55,6.4,6,8,2.77M8,.5,5.73,5.11.67,5.85,4.33,9.43,3.47,14.5,8,12.11l4.53,2.39-.86-5.07,3.66-3.58-5.06-.74L8,.5Z"></path></svg>
        </div>
      </div>

    </div>
  )
}

export default ChatBox
