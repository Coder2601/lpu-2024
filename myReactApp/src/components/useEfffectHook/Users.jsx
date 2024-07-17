import React, { useEffect, useState } from 'react'

const Users = () => {
    const[users,setUsers] = useState([]);
    const[isEmpty,setEmpty] = useState(true);
    
    useEffect(()=>{
        const fecthApi = async()=>{
            let response = await fetch("https://jsonplaceholder.typicode.com/users");

            let data = await response.json();
            // console.log(data);
            
            setUsers(()=>([...data]));
            
            if(data.length <=0){
                setEmpty(true);
            }else{
                setEmpty(false);
            }

            return data;    
        }

        fecthApi();
        
    },[]);
    
  return (
    <div>
        <h2>Users</h2>
        {
        isEmpty?
        <h1>No users to display</h1>
        :
        users.map((item,index)=>{
                return(
                    <div key={index}>
                        <h1>Username : {item.username}</h1>
                        <h3>Email : {item.email}</h3>
                        <p>Phone : {item.phone}</p>
                    </div>
                )
            })

        }
    </div>
  )
}

export default Users