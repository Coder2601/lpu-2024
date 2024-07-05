import { useState } from 'react';

const Bio = () => {
    let [usersArr, setUsersArr] = useState([]);
    let [user, setUser] = useState({})

    const handleInput=(e)=>{
        setUser((user)=>{
            return ({...user,[e.target.id]:e.target.value});
        }) 
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        
        setUsersArr(usersArr=>([...usersArr, user]))
        
    }

  return (
    <>

        <h1>Bio Data of the user</h1>
        <hr />
        <form>
        <input type="number" placeholder="id" id="id" onChange={handleInput} />
        <input type="text" placeholder="name" id="name" onChange={handleInput} />
        <input type="number" placeholder="contact" id="contact" onChange={handleInput} />
        <input type="text" placeholder="address" id="address" onChange={handleInput} />
        <button onClick={handleSubmit}>Add User</button>
        </form>

        <hr />
        {usersArr.length <= 0 ? <h2>No users to display</h2> :
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            {usersArr.map((item,index)=>{
                return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.contact}</td>
                        <td>{item.address}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
        }


    </>
  )
}

export default Bio