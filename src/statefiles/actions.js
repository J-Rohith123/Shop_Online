import axios from 'axios';

export const getProducts=async()=>{
let products=await axios.get("https://dummyjson.com/products")
  console.log(products)
    return(dispatch)=>{
        dispatch({type:"getproducts",payload:products})
    }
}