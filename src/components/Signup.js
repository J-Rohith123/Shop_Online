import { Button } from '@mui/material'
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import '../css/signup.css'
import * as Yup from 'yup'
import * as actions from '../statefiles/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Signup() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [errmsg,seterrmsg]=useState('')
  const users=useSelector(state => state.users)
  const validationschema=Yup.object({
    name:Yup.string().min(3,'Username should contain atleast 3 characters').max(25,"Username should contain atmost 25 characters").required('Username is mandatory'),
    email:Yup.string().email('Please enter a valid Email').required('Email is mandatory'),
    phone:Yup.number().required('Phone number is mandatory'),
    password:Yup.string().min(6,'Password must have atleast 6 characters').required('Please enter your password')
  })

  const submittedform=(values)=>{
   dispatch(actions.addUser({...values,cart:[]}))
   navigate('/login')
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:{name:'',email:'',phone:'',password:''},
    validationSchema:validationschema ,
    onSubmit:(values)=>{ submittedform(values) }
  })

  return (
    <div className='signupcontainer'>
    <div className='signupbody'>
      { errmsg? <p>{errmsg}</p>:null }
      <h2 style={{margin:0,fontFamily:'sans-serif'}} >Register</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' >User Name<sup>*</sup><br/></label>
        <input 
         name='name'
         type='text'
         autoFocus
         autoComplete='off'
         value={values.name}
         onChange={handleChange}
         onBlur={handleBlur}
        />
        { (errors.name && touched.name)? <p className='errormsg'>{errors.name}</p> : null }
        
        
        <label htmlFor='phone' >Mobile Number<sup>*</sup><br/></label>
        <input 
         name='phone'
         type='number'
         value={values.phone}
         onChange={handleChange}
         onBlur={handleBlur}
         autoComplete='off'
        />
        { errors.phone && touched.phone? <p className='errormsg'>{errors.phone}</p> : null }
        
        <label htmlFor='email' >Email<sup>*</sup><br/></label>
        <input 
         name='email'
         type='email'
         value={values.email}
         onChange={handleChange}
         onBlur={handleBlur}
         autoComplete='off'
        />
        { errors.email && touched.email? <p className='errormsg'>{errors.email}</p> : null }
        
        <label htmlFor='password' >Password<sup>*</sup><br/></label>
        <input 
         name='password'
         type='password'
         value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         autoComplete='off'
        />
        { errors.password && touched.password? <p className='errormsg'>{errors.password}</p> : null }
        
        <Button variant='contained' className='button' type='submit' >Register</Button>
        <p style={{fontSize:'0.75rem',fontFamily:'sans-serif'}} >Already a User?<a href='/login'>Login Here</a></p>
      </form> 
    </div>
    </div>
  )
}

export default Signup
