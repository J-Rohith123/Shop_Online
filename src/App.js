import { useEffect, useLayoutEffect } from 'react';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import * as actions from './statefiles/actions'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Products from './components/Products'
import Home from './components/Home'
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup'
import Cookies from 'js-cookie';

function App() {
    const dispatch=useDispatch()
    
  useLayoutEffect(()=>{
    dispatch(actions.getProducts())
    dispatch(actions.getUsers())
    let cookieuser=Cookies.get('loggedinuser')
    if(cookieuser!==undefined){
      dispatch(actions.setUser(cookieuser))
    }
   },[])

  return (
    <div className="App">
    <BrowserRouter>
    <ResponsiveAppBar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
