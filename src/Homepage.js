import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Homepage(props) {
	
    const navigate = useNavigate();

    let lock = false

    const handleChange = (cat) => {
        props.setCategory(cat)
        lock = false
    }

    useEffect(() => {
        console.log("leeed")
        props.setCategory("")
        lock = true
    }, [])

    useEffect(() => {
        if (props.category == "" || lock) return
        console.log("bye")
        console.log(props.category)

        navigate("/flashcard")
    }, [props.category])

    return (
        <div className="Homepage">
            <h1>choose category</h1>
            <div className="category-list">
                {
                    props.flashcards.map(deck => {
                        return  <button className="category-button" onClick={()=>handleChange(deck.name)}>{deck.name}</button>
                    })
                }
            </div>
            {/* <div class="category-button" onClick={ () => {props.goToFlashcard() }}>basic</div> */}
            {/* <Link class="category-button" to="/flashcard">{deck.name}</Link> */}
        </div>
    );
}

export default Homepage;
