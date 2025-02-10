import { useState } from "react";
import Buton from "./Buton";
import Tamrin2 from "./Tamrin2";
// import TodoApp from "./TodoApp";
function App(){
const [count,setCount]=useState(0)
function kahesh(){
if(count>0){
    setCount(count-1)

}
}
function afzauesh(){
setCount(count+1)
}


return(

<>
<Tamrin2>
    <Buton onclick={kahesh}>
        -
    </Buton>
    <span>{count}</span>
    <Buton onclick={afzauesh}>
        +
    </Buton>
</Tamrin2>
</>


)}
export default App;