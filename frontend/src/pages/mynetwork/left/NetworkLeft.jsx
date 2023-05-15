import React from 'react';
import { NavLink } from 'react-router-dom';

// Local imports
import "./networkLeft.scss";

function NetworkLeft() {
  return (
    <div className='network-left-wrapper'>
      <h3>Manage my network</h3>
      <ul>
          <NavLink to={"/mynetwork/connections"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"  width="24" height="24" focusable="false">
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <span>Connections</span>
          </NavLink>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
              <path d="M16 15h-6a3.24 3.24 0 011.79-2.89L12 12h2l.21.11A3.24 3.24 0 0116 15zm-3-7a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm8-4v16a2 2 0 01-2 2H5v-3H3v-2h2v-4H3v-2h2V7H3V5h2V2h14a2 2 0 012 2zm-2 0H7v16h12V4z"></path>
            </svg>
            <span>Contacts</span>
          </a>
          <a href="#">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
            <span>Following & followers</span>
          </a>
          <a href="#">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.27 12h3.46a1.5 1.5 0 001.48-1.75l-.3-1.79a2.951 2.951 0 00-5.82.01l-.3 1.79c-.15.91.55 1.74 1.48 1.74zM1.66 11.11c-.13.26-.18.57-.1.88.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29 0-.14-.03-.27-.07-.4-.01-.03-.01-.05.01-.08.09-.16.14-.34.14-.53 0-.31-.14-.6-.36-.82-.03-.03-.03-.06-.02-.1.07-.2.07-.43.01-.65a1.12 1.12 0 00-.99-.74.09.09 0 01-.07-.03C5.03 8.14 4.72 8 4.37 8c-.3 0-.57.1-.75.26-.03.03-.06.03-.09.02a1.24 1.24 0 00-1.7 1.03c0 .02-.01.04-.03.06-.29.26-.46.65-.41 1.05.03.22.12.43.25.6.03.02.03.06.02.09zM16.24 13.65c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 006 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM1.22 14.58A2.01 2.01 0 000 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zM22.78 14.58A6.95 6.95 0 0020 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85zM22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06 0 1.1.9 2 2 2s2-.9 2-2z"></path></svg>
            <span>Groups</span>
          </a>
          <a href="#">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.684 12.523v-2.3h2.261v-.61H4.684V7.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V9.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V8.418h-.672v4.105z"></path><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path><path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"></path></svg>
            <span>Event</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
            </svg>            
            <span>Pages</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M13 13h5v1h-5zm5-5H6v3h12zm-5 8h5v-1h-5zm9-12v13a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm-2 2H4v11a1 1 0 001 1h14a1 1 0 001-1zm-9 7H6v3h5z"></path>
            </svg>           
            <span>NewsLetters</span>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M21 10V8h-4.56L17 3h-2l-.56 5h-4L11 3H9l-.56 5H3v2h5.22l-.44 4H3v2h4.56L7 21h2l.56-5h4L13 21h2l.56-5H21v-2h-5.22l.44-4zm-7.22 4h-4l.44-4h4z"></path>
            </svg>          
            <span>Hashtags</span>
          </a>
      </ul>
      <div className='linkedin-links'>
        <div className='linkedin-links-item'>
          <a href="#">About</a>
          <a href="#">Accessibility</a>
          <a href="#">Help Center</a>
        </div>
        <div className='linkedin-links-item'>
          <a href="#">Privacy & Terms</a>
          <a href="#">Ad Choices</a>
        </div>
        <div className='linkedin-links-item'>
          <a href="#">Advertising</a>
          <a href="#">Business Services</a>
        </div>
        <div className='linkedin-links-item'>
          <a href="#">Get the LinkedIn app</a>
          <a href="#">More</a>
        </div>
      </div>
      <div className='linkedin-abouts'>
        <p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" data-supported-dps="56x14" fill="currentColor" className="mercado-match" width="56" height="14" focusable="false">
              <g>
                <path className="background-mercado" d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
              </g>
            </svg>
          </span> 
          <span>© Sachin Kumar</span></p>
      </div>
    </div>
  )
}

export default NetworkLeft
