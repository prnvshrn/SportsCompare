import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Well } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, Table, MenuItem, Panel, Grid, Row, Col, FormGroup, FormControl, ControlLabel, InputGroup, ProgressBar } from 'react-bootstrap';
import StatComponent from './stat_component.js';

class PlayerPanel extends Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);

    this.state = {
      value : '',
      player1_stats: [],
      value2: '',
      player2_stats: [],
      test: 'test'
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleChange2(f) {
    this.setState({ value2: f.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/football/' + this.state.value)
      .then(res => res.json())
      .then(player1_stats => this.setState({player1_stats}, () => console.log('Customers fetched...', player1_stats)));
  }

  handleSubmit2(event) {
    event.preventDefault();
    fetch('/football/' + this.state.value2)
      .then(res => res.json())
      .then(player2_stats => this.setState({player2_stats}, () => console.log('Customers fetched...', player2_stats)));
  }

  render(){
    return(
    <div>
    <Grid>
    <Row className="show-grid">
    <Col xs={6} md={6}>
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title>Player 1</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} placeholder="Enter a player's name" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>      
    </Panel.Body>
    </Panel>
    </Col>

    <Col xs={6} md={6}>
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title>Player 2</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <form onSubmit={this.handleSubmit2}>
          <input type="text" value={this.state.value2} placeholder="Enter a player's name" onChange={this.handleChange2} />
        <input type="submit" value="Submit" />
      </form>
    </Panel.Body>
    </Panel>
    </Col>
    </Row>
    </Grid>            
    
        {this.state.player2_stats.map(player2_stats => 
          <div key={player2_stats.name}>
                <StatComponent stat={'Goals'} stat1={this.state.player1_stats[0].goals} stat2={this.state.player2_stats[0].goals} />
                <StatComponent stat={'Shooting Accuracy'} stat1={this.state.player1_stats[0].shooting_accuracy} stat2={this.state.player2_stats[0].shooting_accuracy} />
                <StatComponent stat={'Big Chances Missed'} stat1={this.state.player1_stats[0].big_chances_miss} stat2={this.state.player2_stats[0].big_chances_miss} />
                <StatComponent stat={'Error to Goals'} stat1={this.state.player1_stats[0].error_to_goal} stat2={this.state.player2_stats[0].error_to_goal} />
                <StatComponent stat={'Interceptions'} stat1={this.state.player1_stats[0].interceptions} stat2={this.state.player2_stats[0].interceptions} />
                <StatComponent stat={'Blocked Shots'} stat1={this.state.player1_stats[0].blocked_shots} stat2={this.state.player2_stats[0].blocked_shots} />
                <StatComponent stat={'Big Chances Created'} stat1={this.state.player1_stats[0].big_chance_created} stat2={this.state.player2_stats[0].big_chance_created} />
                <StatComponent stat={'Assists'} stat1={this.state.player1_stats[0].assists} stat2={this.state.player2_stats[0].assists} />
                <StatComponent stat={'Tackle Success'} stat1={this.state.player1_stats[0].tackle_success} stat2={this.state.player2_stats[0].tackle_success} />
                <StatComponent stat={'Duels Won'} stat1={this.state.player1_stats[0].duel_won} stat2={this.state.player2_stats[0].duel_won} />
                <StatComponent stat={'Aerial Battles Won'} stat1={this.state.player1_stats[0].aerial_battle_won} stat2={this.state.player2_stats[0].aerial_battle_won} />
                <StatComponent stat={'Accurate Long Balls'} stat1={this.state.player1_stats[0].accurate_long_balls} stat2={this.state.player2_stats[0].accurate_long_balls} />  
          </div>
        )}
    
    </div>
    );
  }
}

class NavbarComponent extends Component{
  render(){
    return(
      <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">SportsCompare</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
       <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Football
          </NavItem>
          <NavItem eventKey={2} href="#">
            Baseball
          </NavItem>
          <NavItem eventKey={3} href="#">
            Basketball
          </NavItem>
          <NavItem eventKey={4} href="#">
            American Football
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

class App extends Component {
  render() {
    return (      
      <div className="App">
      <NavbarComponent/>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <PlayerPanel/>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
