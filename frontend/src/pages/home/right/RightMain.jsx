import React from 'react';

// Local imports
import "./rightMain.scss";

function RightMain() {
  return (
    <div>
      <div className='right-main'>
          <h2>
            <span>LinkedIn News</span> 
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
              </svg>
            </span>
          </h2>
          <ul>
              <a href="#">
                <h3>Top newsLetters to follow</h3>
                <p>Top news • 1,616 readers</p>
              </a>
              <a href="#">
                <h3>Demand for office space soars</h3>
                <p>2d ago • 1,492 readers</p>
              </a>
              <a href="#">
                <h3>Shorter wait for US visas</h3>
                <p>2d ago • 4,540 readers</p>
              </a>
              <a href="#">
                <h3>Fresh IPO funding falls sharply</h3>
                <p>20h ago</p>
              </a>
              <a href="#">
                <h3>Hiring intent up in these sectors</h3>
                <p>17h ago • 148 readers</p>
              </a>
          </ul>
      </div>
      <div className="right-main right-main-2">
        <a href="#">
          <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
        </a>
      </div>
      <div className="right-main-3">
        <div className='linkedin-links'>
          <a href="#">About</a>
          <a href="#">Accessibility</a>
          <a href="#">Help Center</a>
        </div>
        <div className='linkedin-links'>
          <a href="#">Privacy & Terms</a>
          <a href="#">Ad Choices</a>
        </div>
        <div className='linkedin-links'>
          <a href="#">Advertising</a>
          <a href="#">Business Services</a>
        </div>
        <div className='linkedin-links'>
          <a href="#">Get the LinkedIn app</a>
          <a href="#">More</a>
        </div>
      </div>
      <div className='right-main-4'>
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

export default RightMain
