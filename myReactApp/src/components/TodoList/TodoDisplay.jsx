import React, { useState } from 'react'

const TodoDisplay = ({tasks, isSubmitted, setSubmitted}) => {
    
    const [taskList,setTaskList] = useState(tasks); 

    const handleDelTask=(i)=>{
        // setTaskList(taskList=>{
        //     let newList = taskList.filter((item,index)=>index != i);
        //     console.log(taskList, newList);
        //     return ([...newList])
        // })

        setTaskList(taskList=>{
            taskList.splice(i,1);
            console.log(taskList);
            return([...taskList]);
        })
    }
    
  return (
    <>
    <button onClick={()=>setSubmitted(!isSubmitted)}>Back</button>
        <h2>All the added tasks are displayed here:</h2>
        <div>
            <ul type='none'>
                {taskList.map((item,index)=>{
                    return(
                        <div key={index}>
                            <hr />
                            <li>{item.username}</li>
                            <li>{item.task}</li>
                            <li>{item.date}</li>
                            <li>{item.time}</li>
                            <li>{item.day}</li>
                            <li><button onClick={()=>handleDelTask(index)}>Delete Task</button></li>
                        </div>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default TodoDisplay