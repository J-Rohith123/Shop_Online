import * as React from 'react';
import { useNavigate } from 'react-router';
import '../css/card.css'

export default function CardLayout(props) {
    const navigate=useNavigate()
    const item=props.product
  return (
   <div className='cardbody' onClick={()=>{ navigate('/productdetails',{state:item}) }} >
    <img src={item.images[0]} alt={item.title} /> 
    <h4>{item.title}</h4> 
    <p>{item.description}</p>
   </div>
  );
}

