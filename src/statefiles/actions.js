import axios from 'axios';

export const getProducts=()=>{
return(dispatch)=>{
  
  axios.get("https://dummyjson.com/products?limit=100").then(res =>{
    console.log(res.data)
        dispatch({type:"getproducts",payload:res.data.products})
})
}}

export const setUser=()=>{
  return(dispatch)=>{
    axios.get("http://localhost:8000/users/1")
    .then(res =>{
      dispatch({type:'setuser',payload:res.data})
    })
  }
}
export const addtocart=(product)=>{
return(dispatch)=>{
  dispatch({type:'addtocart',payload:product})
}
}