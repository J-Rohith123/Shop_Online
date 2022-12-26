import { useEffect, useLayoutEffect } from 'react';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import * as actions from './statefiles/actions'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Products from './components/Products'
import Home from './components/Home'
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './components/ProductDetails';

function App() {
    const dispatch=useDispatch()
    
  useLayoutEffect(()=>{
    dispatch(actions.getProducts())
    dispatch(actions.setUser())

   },[])

  return (
    <div className="App">
    <BrowserRouter>
    <ResponsiveAppBar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
