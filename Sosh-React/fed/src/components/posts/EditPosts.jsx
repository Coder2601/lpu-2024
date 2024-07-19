import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditPosts = () => {

  const[obj,setObj] = useState({});
  const nav = useNavigate();

  const handleInput = (e)=>{
    setObj(obj=>({...obj,[e.target.id]:e.target.value}))
  }

  const handleEditPost=async(e)=>{
    const result = await axios.post("url",{
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(obj)
    })

    if(result.status){
      // code to update the post
      nav('/posts')
    }else{
      alert("Error in updating your post")
    }
  }

  return (
    <>
      <h2>Edit the post Data : </h2>
      <form>
        <label for="title">Title</label>
        <input type="text" placeholder="title" id="title" onChange ={handleInput}  required />
        <br /><br />
        <label for="content">Content</label>
        <textarea type="text" placeholder="content" id="content" onChange ={handleInput}  required ></textarea>
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
        <button onClick={handleEditPost}>Submit Changes</button>
      </form>
    </>
  )
}

export default EditPosts