import React, { useState } from 'react';
import './Gallery.css';
import picture from '../graphics/WordLogo.png';
import ShopItem from '../Components/ShopItem';

export default function Gallery() {
    
    return (
        <div id="gallery-container">
			<ShopItem src={picture} orient='desc' to='/ReadyToShip'>
				<h3>Item description</h3>
			</ShopItem>
			<ShopItem src={picture} orient='item' to='/ReadyToShip'>
				<h3>Item description</h3>
			</ShopItem>
			<ShopItem src={picture} orient='Item' to='/ReadyToShip'>
				<h3>Item description</h3>
			</ShopItem>
			<ShopItem src={picture} orient='desc' to='/ReadyToShip'>
				<h3>Item description</h3>
			</ShopItem>
        </div>
    );
  }