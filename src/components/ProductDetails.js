import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import '../css/productdetail.css'
import StarIcon from '@mui/icons-material/Star';

function ProductDetails() {
    const state=useLocation().state
    const [currentimage,setcurrentimage]=useState(0)
    useEffect(()=>{
     console.log(state)
    },[]) 
  return (
    <div className='productcontainer'>
      <div className='imagesection'>
       <div className='images'>
         <div className='previews'>
          {
            state.images.map((imagestr,i) =>{
                if(i==currentimage)  return <img key={i} src={imagestr} style={{border:"5px solid rgb(116, 208, 238)" }} alt={"none"}/>
                return <img key={i} src={imagestr} onMouseOverCapture={()=> setcurrentimage(i)} alt={"none"}/>
            })
          }
         </div>
         <img src={state.images[currentimage]} alt={state.title}/>
       </div>
       <div className='buttons'>
       <Button variant="contained">Add to Cart</Button>
       <Button variant="contained">Buy Now</Button>
       </div>
      </div>
      <div className='detailsection'>
        <h2  style={{padding:0,margin:0}}>{state.title}</h2>
        <p style={{margin:0,display:'flex',fontSize:'small',color:'white',borderRadius:'10px',padding:'5px',alignItems:'center',background:'rgb(97, 218, 243)',width:'fit-content'}} >{state.rating} <StarIcon fontSize='small' htmlColor='white'/></p>
        <p style={{padding:0,margin:0}}>{state.description}</p>
      </div>
    </div>
  )
}

export default ProductDetails
