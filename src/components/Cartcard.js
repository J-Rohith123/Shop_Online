import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import '../css/cartcard.css'
import * as actions from '../statefiles/actions'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Cartcard(props) {
  const dispatch=useDispatch()
    let product=props.product
    let discountedprice=product.price-(product.price*product.discountPercentage/100)
    
  return (
    <div className='cartcard'> {/*root */}
    <div className='content'>  {/*parent1 */}
        <div className='imgbody'>
     <img src={(product?.images?.length>0)? product?.images[0]:product.title} alt={product.title}/></div>
     <div className='details'>
     <h2>{(!product?.title?.includes(product.brand))? product.brand : null} {product.title}</h2>
     <p style={{margin:0,fontSize:'100%'}}><span style={{textDecorationLine:'line-through',color:'GrayText'}}>Rs.{product.price}</span><b style={{fontSize:'140%'}}> Rs.{discountedprice.toFixed(2)}</b> <span style={{color:'blueviolet',fontWeight:700}}>{product.discountPercentage}% Off</span></p>
     </div>
    </div>
    <div className='buttons'>
    <div className='quantity'>
    <button onClick={()=> dispatch(actions.updateCart({...product,quantity:product.quantity-1}))} disabled={(product.quantity==1)?true:false} >➖</button>
    <p>{product.quantity}</p>
    <button onClick={()=>dispatch(actions.updateCart({...product,quantity:product.quantity+1}))} >➕</button>
    </div>
    <Button variant='contained' color='error' onClick={()=>dispatch(actions.removeFromCart(product.id))} ><DeleteIcon/>&nbsp;Remove from Cart</Button>
    <Button variant='contained' ><FavoriteIcon/>&nbsp;Move to Favorites</Button>
    </div>
    </div>
  )
}

export default Cartcard
