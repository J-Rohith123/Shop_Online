import React from 'react'

let stateinit={
    user:{cart:[{}]},
    users:{},
    products:[]
}
function Userreducer(state=stateinit,action) {
  switch(action){
    case "getproducts": return{...state,products:action.payload}

    default: return state
  }
}

export default Userreducer
