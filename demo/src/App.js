import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
var parser = require('fast-xml-parser');

class App extends Component {
	state = { 
		patientId:'',
		firstName:''
	}
	
	async componentDidMount(){
		let response = await axios.get('https://s3-eu-west-1.amazonaws.com/cntts.steemtracker.com/patientcase.xml')
		var xmlStr = response.data.toString()
		var jsonObj = parser.parse(xmlStr);
		console.log(jsonObj)
		var patientId = jsonObj.patientCase.patientId
		var firstName = jsonObj.patientCase.patientFirstName

		//You can get the rest in the same way
		//patientid
		//first name
		//last name
		//revisionnumber
		//patientiob,
		//gender
		//patientdoctorname

		// console.log(patientId)
		this.setState({patientId:patientId, firstName:firstName})
	}
  	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
				{
					this.state.patientId !== '' ? (
						<section>
							<div>{this.state.patientId}</div><br/>
							<div>{this.state.firstName}</div><br/>
						</section>
					):null
				}
				
			</div>
		);
  }
}

export default App;
