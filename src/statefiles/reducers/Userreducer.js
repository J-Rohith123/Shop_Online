import React from 'react'

let stateinit={
    user:{email:'',name:'',id:'',phone:0,cart:[{}]},
    users:[{email:'',name:'',id:'',phone:0}],
    products:[{id:1,name:"none",images:[]}],
    loggedin:false
}
function Userreducer(state=stateinit,action) {
  switch(action.type){
    case "getproducts": return{...state,products:action.payload}

    case "getusers":return{...state,users:action.payload}

    case 'setuser': return{...state,user:{...action.payload},loggedin:true}

    case 'logOut': return{...state,user:{},loggedin:false}
    
    case 'addtocart': return{...state,user:{...state.user,cart:[...state.user.cart,action.payload]}}

    case 'updatecart': return{...state,user:{...state.user,cart:[...state.user.cart?.filter(val => val.id != action.payload.id),action.payload]}}
    
    case 'removefromcart': return{...state,user:{...state.user,cart:[...state.user.cart?.filter(val => val.id != action.payload)]}}

    default: return state
  }
}

export default Userreducer
