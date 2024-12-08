import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
//pages
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import RequestInfo from './Pages/RequestInfo';
import ReadyToShip from './Pages/ReadyToShip';
//images
import Logo from './graphics/GraphicLogo.png';

function App() {
  return (
    <div class="App">
      <img src={Logo} width="100%" />
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

  <footer>
    <p>Oh By Golly</p>
  </footer>
  </div>
  );
}


export default App;