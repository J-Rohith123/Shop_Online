import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/login.css'
import * as actions from '../statefiles/actions'

function Login() {
  const users=useSelector(state => state.users)
  const dispatch=useDispatch()
  const [errmsg,seterrmsg]=useState('')
  useEffect(()=>{
    dispatch(actions.setUser())
   },[])
const submitedLogin=(e)=>{
e.preventDefault()
console.log(e.target[0].value)
let userinfo={}
users&&users?.map(user=>{
  if(e.target[0].value == user.email) userinfo=user
})
if(userinfo.id){
  console.log('object')
 seterrmsg("Email not Registered")
}else{
 
}
}

  return (
    <div>
       <div className='logincontainer'>
    <div className='loginbody'>
      { errmsg? <p>{errmsg}</p>:null }
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
        <Button variant='contained' className='button' type='submit' >Register</Button>
        <p style={{fontSize:'0.75rem',fontFamily:'sans-serif'}} >Not a User yet?<a href='/signup'>Sign up Here</a></p>
      </form> 
    </div>
    </div>
    </div>
  )
}

export default Login
