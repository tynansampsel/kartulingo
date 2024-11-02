import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Homepage from './Homepage.js';
import Flashcardpage from './Flashcardpage.js';
import Navbar from './Navbar.js';
import flashcards from './flashcards.js';

function App() {

	const [category, setCategory] = useState({})

	const goToFlashcard = () => {

	}

	return (
		<React.Fragment>
			<BrowserRouter>
				<div id="main-content">
					<Navbar/>
					<Routes>
						<Route path='/' element={<Homepage goToFlashcard={goToFlashcard} />} />
						<Route path='/flashcard' element={<Flashcardpage flashcards={flashcards[0]} />} />
					</Routes>
				</div>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
