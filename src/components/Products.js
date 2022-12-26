import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardLayout from './card'
import '../css/products.css'

function Products() {
  const products=useSelector(state =>state.products)
  const [displayproducts,setdisplayproducts]=useState([...products])
  const categories=["smartphones","mens-shoes","mens-shirts","womens-shoes","womens-dresses","tops","furniture","home-decoration","groceries","skincare","fragrances","laptops"]
  const [selectedcates,setselectedcates]=useState([])
  useEffect(()=>{
   if(selectedcates.length >0){
    setdisplayproducts([...products.filter(item => selectedcates.includes(item.category))])
   }else{
    setdisplayproducts(products)
   }
  },[selectedcates])
  return (
    <div className='productspage'>
      <div className='categories'>
      { 
        selectedcates?.sort().map((cate)=>{
          return <p key={cate}>{cate} <b style={{fontSize:'small',fontFamily:'sans-serif',color:'white',background:'red',borderRadius:'50%',padding:'0 3px 0 3px'}} onClick={()=> setselectedcates(selectedcates.filter(item => item!=cate)) }>x</b></p>
        })
      }
      {
        categories?.sort().map((cate)=>{
          if(!selectedcates.includes(cate))
           return <p key={cate} onClick={()=> setselectedcates([...selectedcates,cate])} >{cate}</p>
        })
      }
      </div>
    <div className='productsbody'>
      {
        displayproducts?.map((product)=>{
         return <CardLayout key={product.id} product={product} />
        })
      }
    </div>
    </div>
  )
}

export default Products
