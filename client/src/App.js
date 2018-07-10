import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Well, Image } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, Table, MenuItem, Panel, Grid, Row, Col, FormGroup, FormControl, ControlLabel, InputGroup, ProgressBar } from 'react-bootstrap';
import StatComponent from './stat_component.js';
import './App_style.css';
import TestComponent from './test.js';
import PlayerStateComponent from './baseball_stat_component.js';

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
      .then(player1_stats => this.setState({player1_stats}));
  }

  handleSubmit2(event) {
    event.preventDefault();
    fetch('/football/' + this.state.value)
      .then(res => res.json())
      .then(player1_stats => this.setState({player1_stats}))
      .then(
        fetch('/football/' + this.state.value2)
        .then(res => res.json())
        .then(player2_stats => this.setState({player2_stats})));
  }

  render(){
    return(
    <div>
    <Grid>
        <Panel className="no_border">
    <Panel.Body>
        <Row>
          <h3><Image src="./Soccer-Ball-icon.png" className="vs_icon_img" rounded /> FOOTBALL</h3>
        </Row>
        <Row>
          Please enter full name of players, eg. Steven Gerrard
        </Row>
    </Panel.Body>
    </Panel>    
        <Row>
        <form onSubmit={this.handleSubmit2}>
          <Col xs={3} md={5}>
            <FormGroup>            
            <FormControl type="text" value={this.state.value} placeholder="Enter a player's name" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col xs={4} md={1}>
            <Image src="./vs_icon.png" className="vs_icon_img" rounded/>
          </Col>
          <Col xs={7} md={5}>
            <FormGroup>
            <FormControl type="text" value={this.state.value2} placeholder="Enter a player's name" onChange={this.handleChange2} />
            </FormGroup>
          </Col>
          <Col xs={4} md={1}>
            <FormGroup>
            <Button type="submit" bsStyle="success">Go</Button>
            </FormGroup>
          </Col>
        </form>  
        </Row>
    </Grid>            
    
        {this.state.player2_stats.map(player2_stats => 
          <div key={player2_stats.name}>
        <Grid>
      <Well bsSize="small" className="styled_font">
        <Row>
          <Col xs={3} md={2}>
            Name
          </Col>
          <Col xs={4} md={3}>
            {this.state.player1_stats[0].name}
          </Col>
          <Col xs={7} md={5}>
          </Col>
          <Col xs={4} md={2}>
            {this.state.player2_stats[0].name}
          </Col>  
        </Row>
                    
        <div className="horizontal-line"></div>
        <Row>
          <Col xs={3} md={2}>
            Position
          </Col>
          <Col xs={4} md={3}>
            {this.state.player1_stats[0].position}
          </Col>
          <Col xs={7} md={5}>
          </Col>
          <Col xs={4} md={2}>
            {this.state.player2_stats[0].position}
          </Col>  
        </Row>

        <PlayerStateComponent stat='Goals' stat1={this.state.player1_stats[0].goals} stat2={this.state.player2_stats[0].goals} />  
        <PlayerStateComponent stat='Shooting Accuracy' stat1={this.state.player1_stats[0].shooting_accuracy} stat2={this.state.player2_stats[0].shooting_accuracy} />
        <PlayerStateComponent stat='Big Chances Created' stat1={this.state.player1_stats[0].big_chance_created} stat2={this.state.player2_stats[0].big_chance_created} />
        <PlayerStateComponent stat='Big Chances Missed' stat1={this.state.player1_stats[0].big_chances_miss} stat2={this.state.player2_stats[0].big_chances_miss} />
        <PlayerStateComponent stat='Accurate Long Balls' stat1={this.state.player1_stats[0].accurate_long_balls} stat2={this.state.player2_stats[0].accurate_long_balls} />
        <PlayerStateComponent stat='Tackle Success' stat1={this.state.player1_stats[0].tackle_success} stat2={this.state.player2_stats[0].tackle_success} />
        <PlayerStateComponent stat='Duels Won' stat1={this.state.player1_stats[0].duel_won} stat2={this.state.player2_stats[0].duel_won} />
        <PlayerStateComponent stat='Aerial Battle Won' stat1={this.state.player1_stats[0].aerial_battle_won} stat2={this.state.player2_stats[0].aerial_battle_won} />
        <PlayerStateComponent stat='Interceptions' stat1={this.state.player1_stats[0].interceptions} stat2={this.state.player2_stats[0].interceptions} />
        <PlayerStateComponent stat='Blocked Shots' stat1={this.state.player1_stats[0].blocked_shots} stat2={this.state.player2_stats[0].blocked_shots} />
        <PlayerStateComponent stat='Error To Goals' stat1={this.state.player1_stats[0].error_to_goal} stat2={this.state.player2_stats[0].error_to_goal} />

      </Well>
    </Grid>      
          </div>
        )}
    </div>
    );
  }
}

class BaseballPlayerPanel extends Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
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

  handleSubmit2(event) {
    event.preventDefault();
    fetch('/baseball/' + this.state.value)
      .then(res => res.json())
      .then(player1_stats => this.setState({player1_stats}))
      .then(
        fetch('/baseball/' + this.state.value2)
        .then(res => res.json())
        .then(player2_stats => this.setState({player2_stats})));
  }

  render(){
    return(
    <div>
    <Grid>
    <Panel className="no_border">
    <Panel.Body>
        <Row>
          <h3><Image src="./baseball_icon.png" className="vs_icon_img" rounded /> BASEBALL</h3>
        </Row>
        <Row>
          Please enter full name of players, eg. David Ortiz
        </Row>
    </Panel.Body>
    </Panel>    
        <Row>
        <form onSubmit={this.handleSubmit2}>
          <Col xs={7} md={5}>
            <FormGroup>            
            <FormControl type="text" value={this.state.value} placeholder="Enter a player's name" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col xs={2} md={1}>
            <Image src="./vs_icon.png" className="vs_icon_img" rounded /> 
          </Col>
          <Col xs={7} md={5}>
            <FormGroup>
            <FormControl type="text" value={this.state.value2} placeholder="Enter a player's name" onChange={this.handleChange2} />
            </FormGroup>
          </Col>
          <Col xs={2} md={1}>
            <FormGroup>
            <Button type="submit" bsStyle="success">Go</Button>
            </FormGroup>
          </Col>
        </form>  
        </Row>
    </Grid>

    {this.state.player2_stats.map(player2_stats =>
      <div key={player2_stats.name}>
    <Grid>
      <Well bsSize="small" className="styled_font">
        <Row>
          <Col xs={3} md={2}>
            Name
          </Col>
          <Col xs={4} md={3}>
            {this.state.player1_stats[0].name}
          </Col>
          <Col xs={7} md={5}>
          </Col>
          <Col xs={4} md={2}>
            {this.state.player2_stats[0].name}
          </Col>  
        </Row>
                    
        <div className="horizontal-line"></div>
        <Row>
          <Col xs={3} md={2}>
            Position
          </Col>
          <Col xs={4} md={3}>
            {this.state.player1_stats[0].position}
          </Col>
          <Col xs={7} md={5}>
          </Col>
          <Col xs={4} md={2}>
            {this.state.player2_stats[0].position}
          </Col>  
        </Row>

        <PlayerStateComponent stat='AB' stat1={this.state.player1_stats[0].AB} stat2={this.state.player2_stats[0].AB} />  
        <PlayerStateComponent stat='R' stat1={this.state.player1_stats[0].R} stat2={this.state.player2_stats[0].R} />
        <PlayerStateComponent stat='H' stat1={this.state.player1_stats[0].H} stat2={this.state.player2_stats[0].H} />
        <PlayerStateComponent stat='HR' stat1={this.state.player1_stats[0].HR} stat2={this.state.player2_stats[0].HR} />
        <PlayerStateComponent stat='RBI' stat1={this.state.player1_stats[0].RBI} stat2={this.state.player2_stats[0].RBI} />
        <PlayerStateComponent stat='SB' stat1={this.state.player1_stats[0].SB} stat2={this.state.player2_stats[0].SB} />
        <PlayerStateComponent stat='AVG' stat1={this.state.player1_stats[0].AVG} stat2={this.state.player2_stats[0].AVG} />
        <PlayerStateComponent stat='OBP' stat1={this.state.player1_stats[0].OBP} stat2={this.state.player2_stats[0].OBP} />
        <PlayerStateComponent stat='OPS' stat1={this.state.player1_stats[0].OPS} stat2={this.state.player2_stats[0].OPS} />

      </Well>
    </Grid>  
    </div>
    )}    
    
    </div>
    );
  }
}

class NavbarComponent extends Component{
  constructor(){
    super();
    this.state = {
      current:'Default'
    }
  }

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
          <NavItem eventKey={1} href="#" id='Football' onClick={this.props.handler}>
            Football
          </NavItem>
          <NavItem eventKey={2} href="#" id='Baseball' onClick={this.props.handler}>
            Baseball
          </NavItem>
          <NavItem eventKey={3} href="#">
            Basketball
          </NavItem>
          <NavItem eventKey={4} href="#">
            American Football
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

class AppFooter extends Component{
  render(){
    return(
      <Navbar fixedBottom collapseOnSelect>
    <Navbar.Text>
      Developed by Pranav Sharan
    </Navbar.Text>
     <Nav pullRight>
      <NavItem eventKey={1} href="https://github.com/prnvshrn/SportsCompare">
        GitHub
      </NavItem>
      <NavItem eventKey={2} href="https://www.linkedin.com/in/pranav-sharan">
        LinkedIn
      </NavItem>
    </Nav>
      </Navbar>
      );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_tab: 'Football'
    };
    this.handler = this.handler.bind(this);
  }


  handler(e){
      this.setState({
      current_tab: e.target.id
    })
  }

  render() {
    let show_panel;

    switch(this.state.current_tab){
      case 'Football':
      show_panel = <PlayerPanel/>;
      break;

      case 'Baseball':
      show_panel = <BaseballPlayerPanel/>;
      break;
    }

    return (      
      <div className="App">
      <NavbarComponent handler={this.handler}/>
      {show_panel}  
      <AppFooter/> 
      </div>
    );
  }
}

export default App;
