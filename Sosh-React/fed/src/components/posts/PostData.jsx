import React from 'react'

const PostData = ({title,content,author,date,likes}) => {
    const handleLikes=()=>{

    }
  return (
    <div>
        <h1>Title : {title}</h1>
        <hr/>
        <p>Content: {content}</p>
        <hr/>
        <span>
            <p><b>Author : {author} </b></p>
            <p><b>Created On: {date}</b></p>
        </span>
        <br/>
        {/* <button onclick ="editPost('${post._id}')">Edit</button>
        <button onclick ="deletePost('${post._id}')">Delete</button> */}
        <br/>
        <button id="likePostBtn" onClick={handleLikes}>Likes: {likes}</button>
    </div>
  )
}

export default PostData