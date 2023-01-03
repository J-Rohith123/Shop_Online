import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import '../css/login.css'
import * as actions from '../statefiles/actions'

function Login() {
  const navigate=useNavigate()
  const users=useSelector(state => state.users)
  const dispatch=useDispatch()
  const [errmsg,seterrmsg]=useState('')
  useEffect(()=>{
    dispatch(actions.getUsers())
   },[])
const submitedLogin=(e)=>{
e.preventDefault()

let userinfo={}
users&&users?.map(user=>{
  if(e.target[0].value == user.email){
    userinfo=user
  } 
})

if(userinfo.id==undefined){
 seterrmsg("Email not Registered")
 setTimeout(()=>{
  seterrmsg("")
 },3000)
}else{
  if(e.target[1].value==userinfo.password){
    dispatch(actions.setUser(userinfo.id))
    navigate('/')
  }else{
    seterrmsg("Incorrect Password")
 setTimeout(()=>{
  seterrmsg("")
 },3000)
  }
}
}

  return (
    <div>
       <div className='logincontainer'>
    <div className='loginbody'>
      { errmsg? <p style={{fontFamily:'sans-serif',color:'red'}} >{errmsg}</p>:null }
      <h2 style={{margin:0,fontFamily:'sans-serif'}} >Log in</h2>
      
      <form onSubmit={submitedLogin}>
        <label htmlFor='email' >Email<sup>*</sup><br/></label>
        <input 
         name='email'
         type='email'
         autoComplete='off'
        />
        <label htmlFor='password' >Password<sup>*</sup><br/></label>
        <input 
         name='password'
         type='password'
         autoComplete='off'
        />
        <Button variant='contained' className='button' type='submit' >Log in</Button>
        <p style={{fontSize:'0.75rem',fontFamily:'sans-serif'}} >Not a User yet?<a href='/signup'>Sign up Here</a></p>
      </form> 
    </div>
    </div>
    </div>
  )
}

export default Login
