import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product () {

  const {id}=useParams()
  const [data,setData]=useState({});
  async function getlistproduct() {
    const listproduct=await fetch(`https://fakestoreapi.com/products/${id}`);
    const listProductData=await listproduct.json();
    setData(listProductData);
    
}

useEffect(() => {
    async function fetchData() {
        await getlistproduct();
    }
    fetchData();
}, []);


console.log(data)



  return (
    <div>Product/{data.title}</div>
  )
}

export default Product