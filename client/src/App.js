import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Well, Image } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, Table, MenuItem, Panel, Grid, Row, Col, FormGroup, FormControl, ControlLabel, InputGroup, ProgressBar } from 'react-bootstrap';
import StatComponent from './stat_component.js';
import './App_style.css';
import TestComponent from './test.js';
import PlayerStateComponent from './baseball_stat_component.js';

const ThemeContext = React.createContext({
  test: 'light',
  toggleTheme: () => {}
});

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
      <Well>
        <Row>
        <form onSubmit={this.handleSubmit2}>
          <Col xs={5} md={5}>
            <FormGroup>            
            <FormControl type="text" value={this.state.value} placeholder="Enter a player's name" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}>
            <Image src="./vs_icon.png" className="vs_icon_img" rounded/>
          </Col>
          <Col xs={5} md={5}>
            <FormGroup>
            <FormControl type="text" value={this.state.value2} placeholder="Enter a player's name" onChange={this.handleChange2} />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}>
            <FormGroup>
            <Button type="submit" bsStyle="success">Go</Button>
            </FormGroup>
          </Col>
        </form>  
        </Row>
      </Well>
    </Grid>            
    
        {this.state.player2_stats.map(player2_stats => 
          <div key={player2_stats.name}>
                <StatComponent 
                name1={this.state.player1_stats[0].name} name2={this.state.player2_stats[0].name} position1={this.state.player1_stats[0].position} position2={this.state.player2_stats[0].position}
                goals1={this.state.player1_stats[0].goals} goals2={this.state.player2_stats[0].goals} assists1={this.state.player1_stats[0].assists} assists2={this.state.player2_stats[0].assists} 
                shooting_accuracy1={this.state.player1_stats[0].shooting_accuracy} shooting_accuracy2={this.state.player2_stats[0].shooting_accuracy}  
                big_chance_created1={this.state.player1_stats[0].big_chance_created} big_chance_created2={this.state.player2_stats[0].big_chance_created}
                big_chances_miss1={this.state.player1_stats[0].big_chances_miss} big_chances_miss2={this.state.player2_stats[0].big_chances_miss}
                accurate_long_balls1={this.state.player1_stats[0].accurate_long_balls} accurate_long_balls2={this.state.player2_stats[0].accurate_long_balls}
                tackle_success1={this.state.player1_stats[0].tackle_success} tackle_success2={this.state.player2_stats[0].tackle_success}
                duel_won1={this.state.player1_stats[0].duel_won} duel_won2={this.state.player2_stats[0].duel_won} 
                aerial_battle_won1={this.state.player1_stats[0].aerial_battle_won} aerial_battle_won2={this.state.player2_stats[0].aerial_battle_won}
                interceptions1={this.state.player1_stats[0].interceptions} interceptions2={this.state.player2_stats[0].interceptions}
                blocked_shots1={this.state.player1_stats[0].blocked_shots} blocked_shots2={this.state.player2_stats[0].blocked_shots}
                error_to_goal1={this.state.player1_stats[0].error_to_goal} error_to_goal2={this.state.player2_stats[0].error_to_goal}
                />
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
        <Row>
          <Image src="./baseball_icon.png" className="vs_icon_img" />
        </Row>
        <Row>
        <form onSubmit={this.handleSubmit2}>
          <Col xs={5} md={5}>
            <FormGroup>            
            <FormControl type="text" value={this.state.value} placeholder="Enter a player's name" onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}>
            <Image src="./vs_icon.png" className="vs_icon_img" rounded/>
          </Col>
          <Col xs={5} md={5}>
            <FormGroup>
            <FormControl type="text" value={this.state.value2} placeholder="Enter a player's name" onChange={this.handleChange2} />
            </FormGroup>
          </Col>
          <Col xs={1} md={1}>
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
      <Well bsSize="small">
        <Row>
          <Col xs={2} md={2}>
            Name
          </Col>
          <Col xs={3} md={3}>
            {this.state.player1_stats[0].name}
          </Col>
          <Col xs={5} md={5}>
          </Col>
          <Col xs={2} md={2}>
            {this.state.player2_stats[0].name}
          </Col>  
        </Row>
                    
        <div className="horizontal-line"></div>
        <Row>
          <Col xs={2} md={2}>
            Position
          </Col>
          <Col xs={3} md={3}>
            {this.state.player1_stats[0].position}
          </Col>
          <Col xs={5} md={5}>
          </Col>
          <Col xs={2} md={2}>
            {this.state.player2_stats[0].position}
          </Col>  
        </Row>

        <PlayerStateComponent stat='AB' stat1={this.state.player1_stats[0].AB} stat2={this.state.player2_stats[0].AB} />  
        <PlayerStateComponent stat='R' stat1={this.state.player1_stats[0].R} stat2={this.state.player2_stats[0].R} />
        <PlayerStateComponent stat='H' stat1={this.state.player1_stats[0].H} stat2={this.state.player2_stats[0].H} />
        <PlayerStateComponent stat='HR' stat1={this.state.player1_stats[0].HR} stat2={this.state.player2_stats[0].HR} />
        <PlayerStateComponent stat='AB' stat1={this.state.player1_stats[0].AB} stat2={this.state.player2_stats[0].AB} />
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
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
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
      </div>
    );
  }
}

export default App;
