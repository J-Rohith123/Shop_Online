import { useEffect } from 'react';
import './App.css';
import ResponsiveAppBar from './components/NavBar';
import * as actions from './statefiles/actions'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import Products from './components/Products'
import Home from './components/Home'

function App() {
  useEffect(()=>{
   actions.getProducts()
  },[])
  return (
    <div className="App">
    <BrowserRouter>
    <ResponsiveAppBar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
