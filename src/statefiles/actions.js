import axios from 'axios';
import Cookies from 'js-cookie';

export const getProducts=()=>async(dispatch)=>{
  let response=await axios.get("https://dummyjson.com/products?limit=100")
  dispatch({type:"getproducts",payload:response.data.products})
}
export const getUsers=()=>async(dispatch)=>{
    let res=await axios.get("http://localhost:8000/users")
          dispatch({type:"getusers",payload:res.data})
  }

export const setUser=(id)=>async(dispatch)=>{
    let res=await axios.get(`http://localhost:8000/users/${id}`)
    Cookies.set('loggedinuser',id,{ expires:1 })
    dispatch({type:'setuser',payload:res.data})
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
export const logOut=()=>{
  return(dispatch)=>{
    dispatch({type:'logOut'})
  }
}