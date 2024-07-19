import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Navbar/Layout'
import { Outlet, useNavigate } from 'react-router-dom'
import PostData from './PostData';
import axios from 'axios'
import { postContext } from '../contexts/PostContext';

const ViewPosts = () => {
  const{viewPost, setViewPost} = useContext(postContext)
  const[searchVal,setSearchVal] = useState();
  const[searchData, setSearchData] = useState([]);
  const[postData,setPostData] = useState([]);

  useEffect(()=>{
    // auth Token
    // set user id in localstorage
  })

  useEffect(()=>{
    // call api in bed to fetch all posts
    // async function fetchPosts(){
    //   const result = await axios.get("url");
      
    //   if(result.status){
    //     setPostData(()=>([...result.data]))
    //   }
    // }
    // fetchPosts();
    
  },[searchData,postData,viewPost]);
  
  const nav = useNavigate();

  const handleCreatePost=()=>{
    nav('/posts/createPost');
    setViewPost(false);
  }

  const handleEditPost=()=>{
    // check the logged type - admin or user
    // if logged type is admin - grant access to edit all posts
    // if logged type is user - grant access to edit only that user's posts
    nav('/posts/editPost');
    setViewPost(false);
  }

  const handleSearch =async(e)=>{
    setSearchVal(e.target.val);

    const result = await axios.post("url",{
      Headers:{'Content-Type':'application/json'},
      body:JSON.stringify(searchVal)
    })

    setSearchData(()=>([...result.data]))
  }

  return (
    <Layout>
      {viewPost ? <>
      <span>
        <h4 className="userCred">
            User: <i id="userId"></i>    |     Followers: <i id="followersCount"></i>    
        </h4>
        <h2>Posts by all the Peers are presented here.</h2>
        <button onClick={handleCreatePost}>Create Post</button>
        <input type="text" placeholder="Search Post by Author Name:" onChange={handleSearch} />
      </span>
      
      
      {postData.length<=0 ? <h3>No Posts Available</h3> :null}
      
      {postData.map((post,index)=>{
        const {title,content,author,date,likes} = post;
        return <PostData key={index} title={title} content={content} author={author} date={date} likes={likes} />
      })}
      
      </>
      :
      <Outlet />}
    </Layout>
  )
}

export default ViewPosts