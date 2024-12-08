import React, { useState } from 'react';
import './Gallery.css';
import picture from '../graphics/WordLogo.png';

export default function Gallery() {
    
    return (
        <div id="gallery-container">
            <div id="gallery-item">
                <img src={picture} alt="item" />
                <h3>Item description</h3>
            </div>
            <div id="gallery-item">
                <img src={picture} alt="item" />
                <h3>Item description</h3>
            </div>
            <div id="gallery-item">
                <img src={picture} alt="item" />
                <h3>Item description</h3>
            </div>
            <div id="gallery-item">
                <img src={picture} alt="item" />
                <h3>Item description</h3>
            </div>
            <div id="gallery-item">
                <img src={picture} alt="item" />
                <h3>Item description</h3>
            </div>
        </div>
    );
  }