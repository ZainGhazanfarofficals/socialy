import React from 'react'
import "./post.scss";

function Post({post}) {
  
  return (
    <div className='post'>
      <div className="post-profile">
        
        <div className="profile-img">
            <img src={process.env.REACT_APP_API_URL+post.user.profileImg} alt="" />
        </div>
        <div className="profile-content">
            <div className="profile-title">
                <a href='#' className='profile-name'>{post.user.name}</a>
                <span className='profile-follow-status'>• Following</span>
            </div>
            <div className="profile-description">
                <p>{post.user.description}</p>
            </div>
            <div className="profile-post-time">
                <span>
                    10H • &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                    </svg>
                </span>
            </div>
        </div>
        <div className="profile-menu">
            {/* <button className='profile-dot-menu'></button> */}
            <button className='profile-follow-btn'>+ FOLLOW</button>
        </div>
        
      </div>
      <div className='post-text-content'> 
        <p>
          {post.text}
        </p>
        <button>...see more</button>
      </div>
      <div className="post-images">
        {post.image && <img src={process.env.REACT_APP_API_URL+post.image} alt="" />}
      </div>
      <div className="post-interaction">
        <div className="post-interaction-left">
          <div className='post-interaction-icons'>
            <img src='https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'/>
            <img src='https://static.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg'/>
            <img src='https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'/>
          </div>
          <a href='#'>19</a>
        </div>
        <div className="post-interaction-right">
        </div>
      </div>
      <div className="post-interaction-buttons">
        <button className='post-interaction-btn'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path></svg>
          <span>Like</span>
        </button>
        <button className='post-interaction-btn'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M15.5 0h-14c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h0.5v4.102l4.688-4.102h8.812c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM16 11.5c0 0.275-0.224 0.5-0.5 0.5h-9.188l-3.312 2.898v-2.898h-1.5c-0.276 0-0.5-0.225-0.5-0.5v-10c0-0.275 0.224-0.5 0.5-0.5h14c0.276 0 0.5 0.225 0.5 0.5v10zM3 3h11v1h-11v-1zM3 5h11v1h-11v-1zM3 7h6v1h-6v-1z"></path></svg>
          <span>Comment</span>
        </button>
        <button className='post-interaction-btn'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"></path></svg>
          <span>Repost</span>
        </button>
        <button className='post-interaction-btn'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"></path></svg>
          <span>Send</span>
        </button>
      </div>
    </div>
  )
}

export default Post
