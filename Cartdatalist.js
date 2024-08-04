import React from 'react';
import App from './App.css';

export default function Cartdatalist(props) {
  return (
    <>
    <div className="cart">
    <img src={props.image}></img>
    <h1>{props.category}</h1>
    <h1 id="title">{props.title}</h1>
    <h1>{props.price}</h1>
    </div>
    </>
  )
}
