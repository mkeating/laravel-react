import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WPChunk from './WPChunk'

class App extends Component {

	render() {
		return (

			<BrowserRouter>

				<div>
					
					<h1>Hi There</h1>

					<WPChunk wpPostId="6"/>

					<WPChunk wpPostId="7"/>

				</div>

			</BrowserRouter>

		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))