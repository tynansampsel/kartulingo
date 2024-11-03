import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import resultWord from './resultWord';

function Resultspage(props) {

    return (
        <div className="Resultspage">
            {
                <h1>{"You got "+props.results.correct+" out of "+props.results.all+" correct, with an accuracy of "+props.results.accuracy+"%."}</h1>
            }
            <div className="result-list">
            {
                props.results.cards.map(card => {
                    return  <div className={"resultWord " + (card.correct == true ? "resultword-correct" : "resultword-incorrect")}>
                        <h1>{card.german + " : " + card.indonesian}</h1>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default Resultspage;
