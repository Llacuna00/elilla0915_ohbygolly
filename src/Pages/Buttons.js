//Not needed

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './Buttons.css';

export function RequestButton() {
    

    return(
        <div>
            <Link  to='/Gallery'>
                <button>Click Me</button>    
            </Link>
        </div>
    );

    /*return (
        <div>
            <button onClick={handleShowForm} id="RequestButton">Request Info</button>

            {ShowForm && (
                <a href='./src/Pages/RequestInfo.js' />
            )}
        </div>
    );*/
};

export function ReadyButton() {
    const [ShowForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!ShowForm);
    }

    return(
        <div>
           <a href='https://www.facebook.com/?_rdr'/><button>Ready to Ship</button>
        </div>
    );
};

export function GalleryButton() {
    const [ShowForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!ShowForm);
    }
    
    return(
        <div>
            <button onClick={handleShowForm} id="GalleryButton">View Gallery</button>

            {ShowForm && (
                <form class="Gallery">
                    <p>Pictures and things</p>
                </form>
            )}
        </div>
    ); 
};

export default [RequestButton, ReadyButton, GalleryButton];