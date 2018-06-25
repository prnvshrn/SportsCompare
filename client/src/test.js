import React, { Component } from 'react';
import {Well, Grid, Col, ProgressBar, Row} from 'react-bootstrap';
import './App_style.css';

class TestComponent extends Component{
	render(){
		return(
			<div>
				{this.props.name1}
			</div>
		);
	}
}

export default TestComponent;