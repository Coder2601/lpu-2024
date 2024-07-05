/*
Take 4 Inputs from user:
1. User Name
2. Task 
3. Date n Time
4. Day
5. Submit button

-> when user press SUBMIT -> then you have to display all the todo data in a list format including all the details in separate columns just like in table.
-> Also add a Delete button for every task added to the list.
-> There should be a BACK button on Display screen to take user back to Data page and SUBMIT button on Data page should take the user to the Display Page.

Concepts need to used:
1. Function Based Component
2. implement useState Hook to store input values
3. pass data to the display componnet using props
4. perform conditional rendering - to switch b/w Data and Display Componnets
*/




import React, { useState } from 'react'
import TodoDisplay from './TodoDisplay';

const TodoData = () => {

    const[todoObj,setTodoObj] = useState({});
    const[todoList, setList] = useState([]);

    const[isSubmitted,setSubmitted] = useState(false);


    const handleInput=(e)=>{
        setTodoObj(todoObj =>({...todoObj,[e.target.id]:e.target.value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setList(todoList=>([...todoList, todoObj]))
        setSubmitted(!isSubmitted);
    }


  return (
    !isSubmitted ? <>
        <h2>Enter the task for the Todo List</h2>
        <hr />
        <form>
            <label>Username : </label>
            <input type="text" placeholder='username' id='username' onChange={handleInput} />
            <br />
            <label>Task : </label>
            <input type="text" placeholder='task' id='task' onChange={handleInput} />
            <br />
            <label>Date: </label>
            <input type="date" placeholder='date' id='date' onChange={handleInput} />
            <br />
            <label>Time : </label>
            <input type="time" placeholder='time' id='time' onChange={handleInput}/>
            <br />
            <label>Day</label>
            <select id="day" onChange={handleInput}>
                <option value="select">Select Day</option>
                <option value="mon">Monday</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thu">Thursday</option>
                <option value="fri">Friday</option>
                <option value="sat">Saturday</option>
                <option value="sun">Sunday</option>
            </select>
            <br />
            <button type="submit" id='submit' onClick={handleSubmit}>Create Task</button>
            <br />
        </form>
    </> 
    
    : 
    
    <TodoDisplay tasks = {todoList} isSubmitted={isSubmitted} setSubmitted = {setSubmitted} />

  )
}

export default TodoData