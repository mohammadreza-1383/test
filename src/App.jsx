import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Route1 from "./Route1";
import Route2 from "./Route2";
import Route3 from "./Route3";
import Subrout from "./Subrout";
function App(){
    const [product,setProduct]=useState([]);

async function getlistproduct() {
    const listproduct=await fetch("https://fakestoreapi.com/products");
    const listProductData=await listproduct.json();
    setProduct(listProductData);
    
}

useEffect(() => {
    async function fetchData() {
        await getlistproduct();
    }
    fetchData();
}, []);

  
  return(

 <>
 <Header />
<Routes>
    
<Route path="/route-1" element={<Route1 />} />

<Route path="/route-2" element={<Route2 />}>
<Route path=":id" element={<Subrout />} />

</Route>
<Route path="/route-3" element={<Route3 />} />



</Routes>
</> 


)}
export default App;