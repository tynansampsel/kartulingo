import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function resultWord(props) {
    return (
        <div className="resultWord">
            {/* <h1>{props.card.german + " : " + props.card.indonesian}</h1> */}
            <h1>{"d"}</h1>
        </div>
    );
}

export default resultWord;
