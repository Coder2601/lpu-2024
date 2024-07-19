import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  
  useEffect(()=>{
    // auth token
  })

  const[obj,setObj] = useState({});
  const nav= useNavigate();
  
  const handleInput = (e)=>{
    setObj(obj=>({...obj,[e.target.id]:e.target.value}))
  }

  const handleCreatePost=async(e)=>{
    // const result = await axios.post("url",{
    //   headers:{'Content-Type':"application/json"},
    //   body:JSON.stringify(obj)
    // })

    // if(result.status){
    //   nav('/posts')
    // }

    nav('/posts')

  }
  return (
    <>
      <h3>Create a new Post</h3>

      <hr />
      <br />
      <form>
          <label for="title">Title</label>
          <input type="text" placeholder="title" id="title" onChange ={handleInput}  required />
          <br /><br />
          <label for="content">Content</label>
          <textarea type="text" placeholder="content" id="content" onChange ={handleInput}  required ></textarea>
          <br /><br />
          <label for="date">Created On : </label>
          <input type="date" placeholder="created On" id="created_On" onChange ={handleInput}  required />
          <br /><br />
          <label for="author">Author</label>
          <input type="text" placeholder="author name" id="author" onChange ={handleInput}  required />
          <br /><br />
          <label for="category">Category</label>
          <select id="category" onChange ={handleInput}  required >
              <option value="select">Select Category</option>
              <option value="movie">Movie</option>
              <option value="song">Song</option>
              <option value="web-series">Web Series</option>
              <option value="games">Games</option>
              <option value="news">News</option>
              <option value="tourist-places">Tourist Places</option>
          </select>
          <br /><br />
          <button onClick={handleCreatePost}>Create Post</button>
      </form>
    </>
  )
}

export default CreatePost