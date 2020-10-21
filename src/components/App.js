import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
		const paragraph = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";

    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button id="click">
					<p id="para">{paragraph}</p>
				</button>

    		</div>
    	);
    }
}


export default App;

