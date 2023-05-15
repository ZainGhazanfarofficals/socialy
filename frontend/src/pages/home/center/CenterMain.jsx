import React, { useEffect } from 'react';
import axios from 'axios';

// Local imports
import "./centerMain.scss";
import NewPost from './posts/NewPost';
import Post from './posts/Post';
import { useSelector } from 'react-redux';

function CenterMain() {
  // Get the auth user from redux state
  const authUser = useSelector(state => state.auth.user);
  // State for all posts
  const [allPosts, setAllPosts] = React.useState([]);
  // Get all posts from server
  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+"api/post/feed")
    .then(res=>{
      setAllPosts(res.data.posts);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className='center-main'>
      <NewPost user={authUser} setAllPosts={setAllPosts}/>
      <div className="posts">
        {allPosts.map(post=>{
          return <Post key={post._id} post={post} />
        })}
      </div>
    </div>
  )
}

export default CenterMain
