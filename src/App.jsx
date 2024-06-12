import { useEffect, useState } from 'react'
import './App.css'
import CartItem from './components/CartItem'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Overlay from './components/Overlay';

function App() {
  
  const [cart, setCart] =  useState([])
  const [overlayItems, setoverlayItems] = useState([])
  const [search, setSearch] = useState([])

  useEffect(()=>{
    async function axiosData() {
      const cartData = await axios.get('http://localhost:3001/cart')
      const overlayData = await axios.get('http://localhost:3001/overlays')


      setCart(cartData.data);
      setoverlayItems(overlayData.data)
    }
    axiosData();
  },[])

  return (
    <div>
      <Header/>
        <Routes>
          <Route
            path='/cart'
            element={
              <CartItem item={cart}/>
            }
          />
          <Route
            path='/overlay'
            element={
              <Overlay overlayItems={overlayItems}/>
            }
          />
        </Routes>
    </div>
  );
}

export default App
