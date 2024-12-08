import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import RequestInfo from './Pages/RequestInfo';
import ReadyToShip from './Pages/ReadyToShip';

function App() {
  return (
    <div class="App">
      <h1><img src='./graphics/GraphicLogo.png' /></h1>
      <Link to='/Home'>
        <button id='Home'>Home</button>
      </Link>
      <Link to='/RequestInfo'>
        <button id="RequestInfo">Contact Us</button>
      </Link>
      <Link to='/ReadyToShip'>
        <button id='ReadyToShip'>Shop</button>
      </Link>      
      <Link to='/Gallery'>
        <button id="Gallery">Gallery</button>
      </Link>
      
      <Routes>
  <Route path='/Home' element={ 
    <Home />} />
  <Route path='/RequestInfo' element={
    <RequestInfo />} />
  <Route path='/ReadyToShip' element={
    <ReadyToShip />} />
  <Route path='/Gallery' element={
      <Gallery />} />
  </Routes>
  </div>
  );
}


export default App;