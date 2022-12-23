import axios from 'axios';

export const getProducts=()=>{
return(dispatch)=>{
  axios.get("https://dummyjson.com/products").then(res =>{
        dispatch({type:"getproducts",payload:res.data.products})
})
}}