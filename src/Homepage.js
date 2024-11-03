import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Homepage(props) {




    return (
        <div className="Homepage">
            <h1>choose category</h1>
            <div className="category-list">
                <Link class="category-button" to="/flashcard">basic</Link>
            </div>
            {/* <div class="category-button" onClick={ () => {props.goToFlashcard() }}>basic</div> */}
        </div>
    );
}

export default Homepage;
