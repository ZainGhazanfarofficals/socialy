import React from 'react';
import axios from 'axios';

function RightRecItem({user}) {
  user.coverImg = user.coverImg.split("\\").join("/");

  const [connectionStatus, setConnectionStatus] = React.useState('connect'); // ['connect', 'pending', 'connected'

  // On send connections request
  const sendConnectionRequest = () => {
    console.log('send connection request');
    axios.post(process.env.REACT_APP_API_URL+'api/connection/send-request', {id: user._id})
    .then(res => {
      console.log(res.data);
      setConnectionStatus('pending');
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <li>
        <div className='background-cover'>
          <div style={{backgroundImage:`linear-gradient(rgb(48 47 47 / 50%), rgb(0 0 0 / 0%)),url(${process.env.REACT_APP_API_URL}${user.coverImg})`}}></div>
        </div>
        <div className='profile-link'>
          <a href="#">
            <img src={process.env.REACT_APP_API_URL+user.profileImg} alt="" />
            <span>{user.name}</span>
          </a>
        </div>
        <div className="description">
          <p>{user.description}</p>
        </div>
        <div className='current-organization'>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
              <path d="M11 3a5 5 0 00-3 1 5 5 0 100 8 5 5 0 103-9zM2 8a3 3 0 014.68-2.48 4.87 4.87 0 000 5A3 3 0 015 11a3 3 0 01-3-3zm9 3a3 3 0 01-1.68-.52 4.87 4.87 0 000-5A3 3 0 1111 11z"></path>
            </svg>
            <span>Galgotias University</span>
          </p>
        </div>
        <div className="connect">
          <button onClick={sendConnectionRequest}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
              <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
            </svg>
            <span >{connectionStatus}</span>
          </button>
        </div>

    </li>
  )
}

export default RightRecItem
