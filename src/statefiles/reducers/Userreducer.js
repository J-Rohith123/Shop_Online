import React from 'react'

let stateinit={
    user:{cart:[{}]},
    users:{},
    products:[{id:1,name:"none",images:[]}]
}
function Userreducer(state=stateinit,action) {
  switch(action.type){
    case "getproducts": return{...state,products:action.payload}

    case 'setuser': return{...state,user:{...action.payload}}

    default: return state
  }
}

export default Userreducer
