//this page allows the user to view items ready for sale
import React, { useState } from 'react';
import './ReadyToShip.css';
import picture from '../graphics/WordLogo.png';

export default function ReadyToShip() {
    
    return (
        <div id="grid-container">
            <div id="grid-item">
                <img src={picture} alt="item" />
                <h2>Item description</h2>
                <h3>Item price</h3>
            </div>
            <div id="grid-item">
                <img src={picture} alt="item" />
                <h2>Item description</h2>
                <h3>Item price</h3>
            </div>
            <div id="grid-item">
                <img src={picture} alt="item" />
                <h2>Item description</h2>
                <h3>Item price</h3>
            </div>
            <div id="grid-item">
                <img src={picture} alt="item" />
                <h2>Item description</h2>
                <h3>Item price</h3>
            </div>
            <div id="grid-item">
                <img src={picture} alt="item" />
                <h2>Item description</h2>
                <h3>Item price</h3>
            </div>
        </div>
    );
}
