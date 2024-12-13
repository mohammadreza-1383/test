import { useState } from "react"

function TodoApp(){
const [tasks, setTasks]= useState([
    {
        title:"task 1",
        id: 1
    }
    ,
    {
        title:"task 2",
        id: 2
    }
    ,{
        title:"task 3",
        id: 3
    }
    ,{
        title:"task 4",
        id: 4
    }
    ,{
        title:"task 5",
        id: 5
    }
    
])
const [newTask,setNewTask]= useState("")
function handleKeyPress(p){
    if(p.key==="Enter"&& newTask.trim() !== ""){
        const task = {
            title: newTask,
            id: tasks.length + 1};
            setTasks([...tasks, task]); 
      setNewTask("")
      ;

    }

}


    return (

        <>
        <input type="text"
        value={newTask}
        onChange={function AddTask(e){
            setNewTask(e.target.value);
                   }}
                   onKeyPress={handleKeyPress} 
            placeholder="add neew task" />
        <br />
        <ul>
         {tasks.map(function(e){
            return <li key={e.id}>{e.title}</li>
         })}
        </ul>
        
        </>
    )
}
export default TodoApp