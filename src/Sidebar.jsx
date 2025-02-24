import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
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
    
    

  return (
    <ul>{product.map(function(item){
        return <li key={item.id}>
            <NavLink to={`/route-2/${item.id}`}   className={({ isActive, isPending }) =>
    isPending ? "text-gray-600" : isActive ? "text-blue-400" : ""
  } >{item.title} </NavLink>
        </li>
    })}</ul>
  )
}

export default Sidebar