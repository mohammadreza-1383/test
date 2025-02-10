import { useState } from "react";
import Tasks from "./Tasks";

function TodoApp() {
  const [Todos, setTodos] = useState([]);
  const [Newtask, setNewtask] = useState("");
const [ShowTask,setShowTask]=useState(false);
  function AddTask(e) {
    if (e.key === "Enter" && e.target.value) {
      const newTaskObj = { title: e.target.value, id: Todos.length + 1 };
      setTodos([...Todos, newTaskObj]); // اضافه کردن به لیست
      setNewtask(""); // پاک کردن ورودی
    }
  }
function handlershowtask(){
    setShowTask(!ShowTask);
}
  return (
    <>
      <input
        type="text"
        value={Newtask}
        onChange={(e) => setNewtask(e.target.value)}
        onKeyUp={AddTask}
      />
      <button onClick={handlershowtask}> ShowTask </button>
     {ShowTask ? <ul>
        {Todos.map((item)=>{
            return <Tasks key={item.id} Title={item.title}/>
        })}
      </ul> :""}
    </>
  );
}

export default TodoApp;