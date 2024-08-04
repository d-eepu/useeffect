import React, { useEffect, useState } from 'react'
import Cartdatalist from './Cartdatalist';
// import App from './App.css'

export default function Datalist() {
    let [cart,updateCart]=useState([])
    useEffect(()=>{
        getData();
    },[])
    async function getData(){
        let result= await fetch("https://fakestoreapi.com/products");
        let cartdata=await result.json();
        console.log(cartdata);
        updateCart(cartdata);
    }
  return (
    <>
    <div className='data1'>
    {
        cart.map((data)=>{
            return <Cartdatalist {...data}></Cartdatalist>
        })
    }
    </div>
    </>
  )
}
