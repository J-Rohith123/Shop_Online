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
export const addtocart=(product,user)=>{
    axios.put(`http://localhost:8000/users/${user.id}`,{...user,cart:[...user.cart,product]}).catch(err =>console.log(err))
return(dispatch)=>{
  dispatch({type:'addtocart',payload:product})
}
}
export const updateCart=(product,user)=>{
  axios.put(`http://localhost:8000/users/${user.id}`,{...user,cart:[...user.cart.filter(val => val.id!=product.id),product]}).catch(err =>console.log(err))
  return(dispatch)=>{
    dispatch({type:'updatecart',payload:product})
  }
}
export const removeFromCart=(id,user)=>{
  axios.put(`http://localhost:8000/users/${user.id}`,{...user,cart:[...user.cart.filter(val => val.id!=id)]}).catch(err =>console.log(err))
  return(dispatch)=>{
    dispatch({type:'removefromcart',payload:id})
  }
  }
export const addUser=(value)=>{
  axios.post("http://localhost:8000/users",value).catch(err => console.log(err))
}