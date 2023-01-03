import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardLayout from './card'
import '../css/products.css'
import * as actions from '../statefiles/actions'

function Products() {
  const dispatch=useDispatch()
  const products=useSelector(state =>state.products)
  const [displayproducts,setdisplayproducts]=useState([...products])
  const categories=["smartphones","mens-shoes","automotive","motorcycle","womens-jewellery","lighting","mens-watches","womens-watches","womens-bags","mens-shirts","womens-shoes","womens-dresses","tops","furniture","home-decoration","groceries","skincare","sunglasses","fragrances","laptops"]
  const [selectedcates,setselectedcates]=useState([])
  useEffect(()=>{
    dispatch(actions.getProducts())
    console.log(products)
   },[])
   useEffect(()=>{
    setdisplayproducts(products)
   },[products])

  useEffect(()=>{
   if(selectedcates.length >0){
    setdisplayproducts([...products.filter(item => selectedcates.includes(item.category))])
   }else{
    setdisplayproducts(products)
   }
   products.map((item)=>console.log(item.category))
   
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
