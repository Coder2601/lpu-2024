import React, { useState, createContext } from 'react'


export const postContext = createContext();
const PostContext = ({children}) => {

    const[viewPost,setViewPost] = useState(true);


  return (
    <postContext.Provider value={{viewPost,setViewPost}}>
        {children}
    </postContext.Provider>
  )
}

export default PostContext