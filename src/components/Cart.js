import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../css/cart.css'
import Cartcard from './Cartcard'

function Cart() {
    
    const cartitems=useSelector(state=> state.user.cart)
  return (
        (cartitems?.length > 0)? <CartFilled/>:<CartEmpty/>
  )
  function CartFilled(){
    return(
        <div className='cartbody'>
        <div className='cartlistbody'>
        <p style={{fontWeight:600,fontFamily:'sans-serif',fontSize:'1.5rem'}}>🛒Cart</p>
        {
            cartitems?.map((item)=>{
              return  <Cartcard product={item} />
            })
        }
        </div>
        <div className='pricebody'>
         <p>price</p>
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
