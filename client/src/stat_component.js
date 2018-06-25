import React, { Component } from 'react';
import {Well, Grid, Col, ProgressBar, Row} from 'react-bootstrap';
import './App_style.css';

class StatComponent extends Component{
	render(){
		return(
      <div>			
                  <Grid>
                    <Well bsSize="small">
                    <Row>
                      <Col xs={2} md={2}>
                        Name
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.name1}
                      </Col>
                      <Col xs={5} md={5}>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.name2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Position
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.position1}
                      </Col>
                      <Col xs={5} md={5}>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.position2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Goals Scored
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.goals1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.goals1) * 100 / (parseInt(this.props.goals1) + parseInt(this.props.goals2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.goals2) * 100 / (parseInt(this.props.goals1) + parseInt(this.props.goals2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.goals2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Assists
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.assists1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.assists1) * 100 / (parseInt(this.props.assists1) + parseInt(this.props.assists2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.assists2) * 100 / (parseInt(this.props.assists1) + parseInt(this.props.assists2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.assists2}
                      </Col>  
                    </Row>

                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Shooting Accuracy
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.shooting_accuracy1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.shooting_accuracy1) * 100 / (parseInt(this.props.shooting_accuracy1) + parseInt(this.props.shooting_accuracy2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.shooting_accuracy2) * 100 / (parseInt(this.props.shooting_accuracy1) + parseInt(this.props.shooting_accuracy2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.shooting_accuracy2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Big Chances Created
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.big_chance_created1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.big_chance_created1) * 100 / (parseInt(this.props.big_chance_created1) + parseInt(this.props.big_chance_created2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.big_chance_created2) * 100 / (parseInt(this.props.big_chance_created1) + parseInt(this.props.big_chance_created2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.big_chance_created2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Big Chances Missed
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.big_chances_miss1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.big_chances_miss1) * 100 / (parseInt(this.props.big_chances_miss1) + parseInt(this.props.big_chances_miss2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.big_chances_miss2) * 100 / (parseInt(this.props.big_chances_miss1) + parseInt(this.props.big_chances_miss2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.big_chances_miss2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Accurate Long Balls
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.accurate_long_balls1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.accurate_long_balls1) * 100 / (parseInt(this.props.accurate_long_balls1) + parseInt(this.props.accurate_long_balls2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.accurate_long_balls2) * 100 / (parseInt(this.props.accurate_long_balls1) + parseInt(this.props.accurate_long_balls2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.accurate_long_balls2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Tackle Success
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.tackle_success1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.tackle_success1) * 100 / (parseInt(this.props.tackle_success1) + parseInt(this.props.tackle_success2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.tackle_success2) * 100 / (parseInt(this.props.tackle_success1) + parseInt(this.props.tackle_success2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.tackle_success2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Duels Won
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.duel_won1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.duel_won1) * 100 / (parseInt(this.props.duel_won1) + parseInt(this.props.duel_won2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.duel_won2) * 100 / (parseInt(this.props.duel_won1) + parseInt(this.props.duel_won2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.duel_won2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Aerial Battles Won
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.aerial_battle_won1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.aerial_battle_won1) * 100 / (parseInt(this.props.aerial_battle_won1) + parseInt(this.props.aerial_battle_won2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.aerial_battle_won2) * 100 / (parseInt(this.props.aerial_battle_won1) + parseInt(this.props.aerial_battle_won2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.aerial_battle_won2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Interceptions
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.interceptions1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.interceptions1) * 100 / (parseInt(this.props.interceptions1) + parseInt(this.props.interceptions2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.interceptions2) * 100 / (parseInt(this.props.interceptions1) + parseInt(this.props.interceptions2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.interceptions2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Blocked Shots
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.blocked_shots1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.blocked_shots1) * 100 / (parseInt(this.props.blocked_shots1) + parseInt(this.props.blocked_shots2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.blocked_shots2) * 100 / (parseInt(this.props.blocked_shots1) + parseInt(this.props.blocked_shots2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.blocked_shots2}
                      </Col>  
                    </Row>
                    
                    <div className="horizontal-line"></div>
                    <Row>
                      <Col xs={2} md={2}>
                        Errors To Goals
                      </Col>
                      <Col xs={3} md={3}>
                        {this.props.error_to_goal1}
                      </Col>
                      <Col xs={5} md={5}>
                        <ProgressBar>
                      <ProgressBar now={parseInt(this.props.error_to_goal1) * 100 / (parseInt(this.props.error_to_goal1) + parseInt(this.props.error_to_goal2))} key={1} />
                      <ProgressBar bsStyle="info" now={parseInt(this.props.error_to_goal2) * 100 / (parseInt(this.props.error_to_goal1) + parseInt(this.props.error_to_goal2))} key={2} />
                      </ProgressBar>
                      </Col>
                      <Col xs={2} md={2}>
                        {this.props.error_to_goal2}
                      </Col>  
                    </Row>
            </Well>
                  </Grid>
          </div>  
			);
	}
}

export default StatComponent;