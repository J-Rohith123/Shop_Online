import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../css/cart.css'
import Cartcard from './Cartcard'

function Cart() {
  const user=useSelector(state=> state.user)
    const cartitems=useSelector(state=> state.user.cart)
    useEffect(()=>{
      console.log(cartitems)
    },[cartitems])
  return (
        (cartitems?.length > 0 && cartitems[0].id!==undefined)? <CartFilled/>:<CartEmpty/>
  )
  function CartFilled(){
    return(
        <div className='cartbody'>
        <div className='cartlistbody'>
        <p style={{fontWeight:600,fontFamily:'sans-serif',fontSize:'1.5rem'}}>🛒Cart</p>
        {
            cartitems?.map((item)=>{
              return  <Cartcard product={item} user={user} />
            })
        }
        </div>
        <div className='pricebody'>
         <p style={{color:'GrayText',fontSize:'20px',margin:'20px 0 10px 0',fontFamily:'sans-serif',fontWeight:700}}>PRICE DETAILS</p>
         <hr style={{border:'1px solid gray',backgroundColor:'GrayText',borderRadius:'20px'}}/>
         <div className='itemsprice'>
         <span><p>Price({cartitems.length} {cartitems.length>1? 'items':'item'}) </p><p>Rs.{cartitems.reduce((acc,curr)=> acc+(curr.price*curr.quantity),0)}</p></span>
         <span><p>Discount</p><p style={{color:'green'}}> -Rs.{(cartitems.reduce((acc,curr)=> acc+((curr.price*curr.discountPercentage/100)*curr.quantity),0)).toFixed(2)}</p></span>
         <span><p>Delivery Charges</p><p style={{color:'green'}}>Free</p></span>
         </div>
         <hr style={{border:'0.5px solid gray',backgroundColor:'GrayText',borderRadius:'20px'}}/>
         <span style={{margin:'20px 0 20px 0'}}><b>Total Amount </b>
         <p>Rs.{(cartitems.reduce((acc,curr)=> acc+(curr.price*curr.quantity),0)-cartitems.reduce((acc,curr)=> acc+((curr.price*curr.discountPercentage/100)*curr.quantity),0)).toFixed(2)}</p></span>
        </div>
        </div>
    )
    }
    function CartEmpty(){
        let navigate=useNavigate()
        return(
            <div className='emptycart'>
              <img src='cartempty.webp' alt='CartEmpty'/>
              <p style={{fontFamily:"sans-serif"}}>🛒Cart feels empty...Add some items to Checkout😊</p>
              <Button onClick={()=> navigate('/')  } >Shop Now</Button>
            </div>
        )
    }
}


export default Cart
