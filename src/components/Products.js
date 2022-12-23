import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardLayout from './card'
import '../css/products.css'

function Products() {
  const products=useSelector(state =>state.products)
  useEffect(()=>{
    console.log(products)
  },[products])
  return (
    <div className='productsbody'>
      {
        products?.map((product)=>{
         return <CardLayout key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Products
