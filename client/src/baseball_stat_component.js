import React, { Component } from 'react';
import {Well, Grid, Col, ProgressBar, Row} from 'react-bootstrap';
import './App_style.css';

class PlayerStatComponent extends Component{
	render(){
		return(
			<div>
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        {this.props.stat}
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.stat1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.stat1) * 100 / (parseInt(this.props.stat1) + parseInt(this.props.stat2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.stat2) * 100 / (parseInt(this.props.stat1) + parseInt(this.props.stat2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.stat2}
                      </Col>  
                    </Row>
                    
            </div>        
			);
	}
}

export default PlayerStatComponent;