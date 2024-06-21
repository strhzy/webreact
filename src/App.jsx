import { useEffect, useState } from 'react'
import './App.css'
import CartItem from './components/CartItem'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Overlay from './components/Overlay';
import React from 'react';

export const AppContext = React.createContext({})

function App() {
  
  const [catalogue, setCatalogue] =  useState([])
  const [overlayItems, setoverlayItems] = useState([])
  const [search, setSearch] = useState([])

  useEffect(()=>{
    async function axiosData() {
      const catalogueData = await axios.get('http://localhost:3001/catalogue')
      const overlayData = await axios.get('http://localhost:3001/overlays')
      


      setCatalogue(catalogueData.data);
      setoverlayItems(overlayData.data)
    }
    axiosData();
  },[])

  const isAdded = (myId) =>{
    return overlayItems.some((objIsAdded) => objIsAdded.myId == myId)
  }

  const deleteItem = (id) =>{
    axios.delete(`http://localhost:3001/overlays/${id}`)
    setoverlayItems((over) => overlayItems.filter(item => Number(item.id)))
  } 

  const total_price = overlayItems.reduce((total, obj)=> total + parseFloat(obj.price), 0);

  return (

    <AppContext.Provider
    value={{
      catalogue,
      setCatalogue,
      overlayItems,
      setoverlayItems,
      isAdded
    }}
    >
      <div>
        <Header/>
          <Routes>
            <Route
              path='/catalogue'
              element={
                <CartItem item={catalogue} 
                overlayItems={overlayItems} 
                setoverlayItems={setoverlayItems}
                setSearch={setSearch}
                search={search}
                />
              }
              />
            <Route
              path='/overlay'
              element={
                <Overlay 
                overlayItems={overlayItems}
                deleteItem={deleteItem}
                total_price={total_price}/>
              }
              />
          </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App
