import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WPChunk extends Component {

	constructor(){
		super()
		this.state = {
			content: []
		}
	}

	componentDidMount(){
		axios.get(`http://localhost/wpapi/wp-json/wp/v2/homepage-chunks/${this.props.wpPostId}`).then(response => {
			console.log(response)
			this.setState({
				content: response.data.content.rendered
			})
		})
	}

	render(){
		

		return(
			<div>
				
				<h2>hi from component</h2>

				<p>{this.state.content}</p>
			</div>
		)
	}

}

export default WPChunk