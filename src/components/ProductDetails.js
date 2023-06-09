import { Button, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import '../css/productdetail.css'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../statefiles/actions'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function ProductDetails() {
    const state=useLocation().state
    const navigate=useNavigate()
    const user=useSelector(state=> state.user)
    const cartitems=useSelector(state=> state.user.cart)
    const dispatch=useDispatch()
    let discountedprice=state.price-(state.price*state.discountPercentage/100)
    const [currentimage,setcurrentimage]=useState(0)
    useEffect(()=>{
     console.log(state)
     dispatch(actions.getProducts())
     cartitems.map((item)=>{
       if(item.id===state.id) 
       document.getElementById('add').innerHTML='🛒 Go to Cart'
     })
    },[cartitems])  
    const incart=()=>{
      navigate('/cart')
    }
    const CartAddProduct=()=>{
      let confirm=false
      cartitems.map((item)=>{
         if(item.id===state.id) 
         confirm=true
       })
       if(!confirm){
       dispatch(actions.addtocart({...state,quantity:1},user))
       document.getElementById('add').innerHTML='Go to Cart'
       }
    }
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
       <div className='buttons' >
       <Button variant="contained" id='add' onClick={()=>{cartitems.map((item)=>{ if(item.id==state.id){incart()}});CartAddProduct()}}><ShoppingCartIcon/>&nbsp;Add to Cart</Button>
       <Button variant="contained"><AttachMoneyIcon/>&nbsp;Buy Now</Button>
       </div>
      </div> 
      <div className='detailsection'>
        <p  style={{padding:0,fontSize:'28px',margin:0}}>{(!state?.title?.includes(state.brand))? state.brand : null} {state.title}</p>
        <p style={{margin:0,display:'flex',fontSize:'small',color:'white',borderRadius:'10px',padding:'5px',alignItems:'center',background:'rgb(97, 218, 243)',width:'fit-content'}} >{state.rating} <StarIcon fontSize='inherit' htmlColor='white'/></p>
        <p style={{padding:0,margin:0}}>{state.description}</p>
        <p style={{marginTop:'2%',color:'blueviolet',fontWeight:'800'}}>{state.discountPercentage}% off</p>
        <p style={{margin:0,fontSize:'150%'}}><b style={{fontSize:'200%'}}>Rs.{discountedprice.toFixed(2)}</b> <span style={{textDecorationLine:'line-through',color:'GrayText'}}>Rs.{state.price}</span></p>
      </div>
    </div>
  )
}

export default ProductDetails
