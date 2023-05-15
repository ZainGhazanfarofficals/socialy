import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Local imports
import Modal from '../../../../components/modal/Modal';
import './newPost.scss';
import {useInputFileChange,useInputChange} from "../../../../customHooks/HandleInputChange";

function NewPost({user,setAllPosts}) {

  // useSelector
  // const user = useSelector(state => state.auth.user);
  // console.log("user in new post",user);
  // Handle new post modal
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  // Handle new post
  const [post, handlePostChange] = useInputChange("");
  const [image, handleImageChange, previewImg] = useInputFileChange("");

  // Find the hashtag in the post
  const findHashtag = (post) => {
    const regex = /#[a-zA-Z0-9]+/g;
    const hashtags = post.match(regex);
    return hashtags || [];
  }
  
  const handleNewPost = (e) => {
    e.preventDefault();
    const hashtags = findHashtag(post);
    const formData = new FormData();
    formData.append("content", post);
    formData.append("image", image);
    formData.append("hashtags", hashtags);
    axios.post(process.env.REACT_APP_API_URL+"api/post/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res=>{
      // console.log("res",res.data);
      // Add the new post to the posts array
      // console.log(res.data.post);
      setAllPosts((prevPosts)=>{return [res.data.post, ...prevPosts]});
      // Clear post and image input state
      handlePostChange({target:{value:""}}); // Clear post input
      handleImageChange({target:{files:[]}}); // Clear image input
      // Close the modal
      handleCloseModal();
    }).catch(err=>{
      console.log("err",err);
      // Close the modal
      handleCloseModal();
    });
  }
  return (
    <div className='new-post'>
      <div className="new-post-top">
        <div className="img-top"><img src={process.env.REACT_APP_API_URL+user?.profileImg} alt="" /></div>
        <div className="input-top">
            <div className='input' type="text" placeholder='Start a post' onClick={handleShowModal}>Start a post</div>
            {showModal && <Modal onClose={handleCloseModal}>
              <div className='new-post-wrapper'>
                <div className="new-post-header">
                  <div className='post-modal-img'>
                    <img src={process.env.REACT_APP_API_URL+user?.profileImg} alt={user?.name} />
                  </div>
                  <div className='post-model-user'>
                    <h3>{user?.name}</h3>
                    <p>Post to anyone</p>
                  </div>
                </div>
                <div className="new-post-body">
                  <textarea onChange={handlePostChange} placeholder='What do you want to talk about?' name='post' />
                  <input onChange={handleImageChange} type="file" id="image" name="image" />
                </div>
                <div className="new-post-footer">
                  <div className="new-post-footer-left">
                    <label htmlFor='image'>
                      <svg style={{color:'#378fe9'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"  width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                      </svg>
                      <span>Photo</span>
                    </label>
                    <button>
                      <svg style={{color:'#5f9b41'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                      </svg>
                      <span>Video</span>
                    </button>
                    <button>
                      <svg style={{color:'#e7a33e'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h4.31l-.65 3.27a.5.5 0 00.61.61L12 19.38l2.73 1.5a.5.5 0 00.61-.61L14.69 20H19a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1z"></path>
                      </svg>
                      <span>Event</span>
                    </button>
                    <button>
                      <svg style={{color:'#df3b3b'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h4.31l-.65 3.27a.5.5 0 00.61.61L12 19.38l2.73 1.5a.5.5 0 00.61-.61L14.69 20H19a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1z"></path>
                      </svg>
                      <span>Write article</span>
                    </button>
                  </div>
                  <div className="new-post-footer-right">
                    <button onClick={handleCloseModal}>Cancel</button>
                    <button onClick={handleNewPost}>Post</button>
                  </div>
                </div>
              </div>
            </Modal>}
        </div>
      </div>
      <div className="new-post-bottom">
        <button>
            <svg style={{color:'#378fe9'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor"  width="24" height="24" focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            <span>Photo</span>
        </button>
        <button>
            <svg style={{color:'#5f9b41'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <span>Video</span>
        </button>
        <button>
            <svg style={{color:'#c37d16'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            <span>Event</span>
        </button>
        <button>
            <svg style={{color:'#e16745'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <span>Write Article</span>
        </button>
      </div>
    </div>
  )
}

export default NewPost
