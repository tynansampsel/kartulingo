import React from 'react';
import { Link } from 'react-router-dom';
import './css/App.css';
//import './css/Navbar.css';
//import Generator from './Homepage.js';
import logo from './logo.png';

function Navbar(props) {
	return (
		<div className="Navbar">
				<Link to="/#" className="logo">
					<img className="logo" src={logo} alt="logo" />
				</Link>
				<h1 className='category-name'> - basic</h1>
		</div>
	);
}

export default Navbar;