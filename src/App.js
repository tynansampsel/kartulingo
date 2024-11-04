import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Homepage from './Homepage.js';
import Flashcardpage from './Flashcardpage.js';
import Navbar from './Navbar.js';
import flashcards from './flashcards.js';
import Resultspage from './Resultspage.js';
import './css/lightmode.css';

function App() {

	const [category, setCategory] = useState("")
	const [results, setResults] = useState({})

	//const navigate = useNavigate();

	const goToFlashcard = () => {

	}

	const changeResults = (newResults) => {
		setResults(newResults)
	}

	const getCategoryIndex = (cat) => {
		return flashcards.findIndex(deck => deck.name == cat)
	}

	return (
		<React.Fragment>
			<BrowserRouter>
				<div id="main-content">
					<Navbar category={category}/>
					<Routes>
						<Route path='/' element={<Homepage flashcards={flashcards} category={category} setCategory={setCategory} />} />
						<Route path='/flashcard' element={<Flashcardpage flashcards={flashcards[getCategoryIndex(category)]} changeResults={changeResults}/>} />
						<Route path='/results' element={<Resultspage results={results}/>} />
					</Routes>
				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
