import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Subrout() {
    const [product,setProduct]=useState({});
    const {id}=useParams()
    async function getlistproduct() {
        const listproduct=await fetch(`https://fakestoreapi.com/products/${id}`);
        const listProductData=await listproduct.json();
        setProduct(listProductData);
        
    }
    
    useEffect(() => {
        async function fetchData() {
            await getlistproduct();
        }
        fetchData();
    }, [id]);
    
console.log(product)
  return (
    <div>{product.price}</div>
  )
}

export default Subrout