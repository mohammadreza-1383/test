import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home(){
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
    <ul>

    {product.map(function(item){
        return <li key={item.id}><Link to={`/product/${item.id}`}>{item.title}</Link>  </li>
    })}

    </ul>
  )
}

export default Home