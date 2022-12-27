import { Button } from '@mui/material'
import React from 'react'
import '../css/cartcard.css'

function Cartcard(props) {
    let product=props.product
    let discountedprice=product.price-(product.price*product.discountPercentage/100)
  return (
    <div className='cartcard'> {/*root */}
    <div className='content'>  {/*parent1 */}
        <div className='imgbody'>
     <img src={product.thumbnail} alt={product.title}/></div>
     <div className='details'>
     <h2>{(!product?.title?.includes(product.brand))? product.brand : null} {product.title}</h2>
     <p style={{margin:0,fontSize:'100%'}}><span style={{textDecorationLine:'line-through',color:'GrayText'}}>Rs.{product.price}</span><b style={{fontSize:'140%'}}> Rs.{discountedprice.toFixed(2)}</b> <span style={{color:'blueviolet',fontWeight:700}}>{product.discountPercentage}% Off</span></p>
     </div>
    </div>
    <div className='buttons'>
    <div className='quantity'>
    <button >➖</button>
    <p>{product.quantity}</p>
    <button >➕</button>
    </div>
    <Button variant='contained' >Remove from Cart</Button>
    <Button variant='contained' >Save for Later</Button>
    </div>
    </div>
  )
}

export default Cartcard
