import React from 'react'

const TodoDisplay = ({tasks, isSubmitted, setSubmitted}) => {
  return (
    <>
    <button onClick={()=>setSubmitted(!isSubmitted)}>Back</button>
        <h2>All the added tasks are displayed here:</h2>
        <div>
            <ol type='I'>
                {tasks.map((item,index)=>{
                    return(
                        <div key={index}>
                            <hr />
                            <li>{item.username}</li>
                            <li>{item.task}</li>
                            <li>{item.date}</li>
                            <li>{item.time}</li>
                            <li>{item.day}</li>
                            <li><button>Delete Task</button></li>
                        </div>
                    )
                })}
            </ol>
        </div>
    </>
  )
}

export default TodoDisplay