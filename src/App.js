import React, { Component } from 'react';
import logo from './logo.svg';
import 'css/App.css';
import 'css/init.css';

import Readbook from './pages/readbook'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Readbook></Readbook>
			</div>
		);
	}
}

export default App;
