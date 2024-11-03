import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Homepage from './Homepage.js';
import Flashcardpage from './Flashcardpage.js';
import Navbar from './Navbar.js';
import flashcards from './flashcards.js';
import Resultspage from './Resultspage.js';

function App() {

	const [category, setCategory] = useState({})
	const [results, setResults] = useState({})

	//const navigate = useNavigate();

	const goToFlashcard = () => {

	}

	const changeResults = (newResults) => {
		setResults(newResults)
		
	}

	return (
		<React.Fragment>
			<BrowserRouter>
				<div id="main-content">
					<Navbar/>
					<Routes>
						<Route path='/' element={<Homepage goToFlashcard={goToFlashcard} />} />
						<Route path='/flashcard' element={<Flashcardpage flashcards={flashcards[0]} changeResults={changeResults}/>} />
						<Route path='/results' element={<Resultspage results={results}/>} />
					</Routes>
				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
