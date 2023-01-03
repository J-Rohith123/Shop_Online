
import { Logout } from '@mui/icons-material'
import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import * as actions from '../statefiles/actions'

function ResponsiveAppBar() {
  const loggedin=useSelector(state => state.loggedin)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const Logout=()=>{
    if(window.confirm('Are you sure you want to logout?')){
      dispatch(actions.logOut())
      Cookies.remove('loggedinuser')
      navigate('/')
    }
  }

  const ButtonsCheck=()=>{
    if(!loggedin){
      console.log('loggedin')
       return <button className='btn btn-large' onClick={()=> navigate('/login') } style={{border:'none',borderRadius:'5px',background:'rgb(34,193,195)',background:'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,245,253,1) 100%)',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >Login</button>
    }else{
      console.log('loggedout')
      return <button className='btn btn-large' onClick={()=> Logout()} style={{border:'none',borderRadius:'5px',background:'rgb(34,193,195)',background:'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,245,253,1) 100%)',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >Log Out</button>
    }
  }
  return (
    <div  >
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary" style={{height:'80px',padding:'10px'}} >
      <a class="navbar-brand" href="/"><img src='shopLogo.png' alt="ShopLogo" width='50px' height='50px' /></a>
  <a class="navbar-brand" href="/">Shopp</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/products">Products</a>
      </li>
      
      <li class="nav-item active">
        <a class="nav-link" href="/cart">Cart</a>
      </li>
    </ul>
    <form style={{width:'25%',display:'flex',flexDirection:'row',gap:'0'}}>
      <input class="form-control" style={{flex:3}} type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-primary" style={{flex:1}} >Search</button>
    </form>&nbsp;
    <ButtonsCheck/>
  </div>
</nav>
    </div>
  )
}

export default ResponsiveAppBar

