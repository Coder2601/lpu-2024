import React from 'react'
import Layout from '../Navbar/Layout'

const EditPosts = () => {
  return (
    <>
      <h2>Edit the post Data : </h2>
      <form>
        <label for="title">Title</label>
        <input type="text" placeholder="title" id="title" onchange="handleInput(event)" required />
        <br /><br />
        <label for="content">Content</label>
        <textarea type="text" placeholder="content" id="content" onchange="handleInput(event)" required ></textarea>
        <br /><br />
        <label for="category">Category</label>
        <select id="category" onchange="handleInput(event)" required >
          <option value="select">Select Category</option>
          <option value="movie">Movie</option>
          <option value="song">Song</option>
          <option value="web-series">Web Series</option>
          <option value="games">Games</option>
          <option value="news">News</option>
          <option value="tourist-places">Tourist Places</option>
        </select>
        <br /><br />
        <button onclick="editPost(event)">Submit Changes</button>
      </form>
    </>
  )
}

export default EditPosts