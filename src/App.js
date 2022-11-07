import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import Tavern from './Components/Tavern';
import Home from './Components/Home';
import ItemDetail from './Components/ItemDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/tavern' element={<Tavern />} />
          <Route path='/shop/api/magic-items/:id' element={<ItemDetail />} />
        </Routes>
        </div>
    </Router>
    );
}




export default App;