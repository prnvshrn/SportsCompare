import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, Table, MenuItem, Panel, Grid, Row, Col, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';

var player1Data = [];

class Customers extends Component{
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/football/Ryan Giggs')
      .then(res => res.json())
      .then(customers => this.setState({customers}));
  }

  render(){
    return(
        <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer._id}>{customer.name}</li>
        )}
        </ul>
        </div>
      );
  }
}

function handleClick() {
  alert('You have clicked on me');
}


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
      
    
        {this.state.player1_stats.map(player1_stats => 
          <div key={player1_stats.name}>
                <Table responsive>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{player1_stats.name}</td>
                  </tr>
                  <tr>
                    <td>Position</td>
                    <td>{player1_stats.position}</td>
                  </tr>
                  <tr>
                    <td>Goals</td>
                    <td>{player1_stats.goals}</td>
                  </tr>
                  <tr>
                    <td>Shooting Accuracy</td>
                    <td>{player1_stats.shooting_accuracy}</td>
                  </tr>
                  <tr>
                    <td>Big Chances Missed</td>
                    <td>{player1_stats.big_chances_miss}</td>
                  </tr>
                  <tr>
                    <td>Error to Goals</td>
                    <td>{player1_stats.error_to_goal}</td>
                  </tr>
                  <tr>
                    <td>Interceptions</td>
                    <td>{player1_stats.interceptions}</td>
                  </tr>
                  <tr>
                    <td>Blocked Shots</td>
                    <td>{player1_stats.blocked_shots}</td>
                  </tr>
                  <tr>
                    <td>Big chances created</td>
                    <td>{player1_stats.big_chance_created}</td>
                  </tr>
                  <tr>
                    <td>Assists</td>
                    <td>{player1_stats.assists}</td>
                  </tr>
                  <tr>
                    <td>Tackle Success</td>
                    <td>{player1_stats.tackle_success}</td>
                  </tr>
                  <tr>
                    <td>Duels won</td>
                    <td>{player1_stats.duel_won}</td>
                  </tr>
                  <tr>
                    <td>Aerial Battle won</td>
                    <td>{player1_stats.aerial_battle_won}</td>
                  </tr>
                  <tr>
                    <td>Accurate Long Balls</td>
                    <td>{player1_stats.accurate_long_balls}</td>
                  </tr>
                </tbody>
                </Table>
          </div>
        )}
    
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
      
    
        {this.state.player2_stats.map(player2_stats => 
          <div key={player2_stats.name}>
                <Table responsive>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{player2_stats.name}</td>
                  </tr>
                  <tr>
                    <td>Position</td>
                    <td>{player2_stats.position}</td>
                  </tr>
                  <tr>
                    <td>Goals</td>
                    <td>{player2_stats.goals}</td>
                  </tr>
                  <tr>
                    <td>Shooting Accuracy</td>
                    <td>{player2_stats.shooting_accuracy}</td>
                  </tr>
                  <tr>
                    <td>Big Chances Missed</td>
                    <td>{player2_stats.big_chances_miss}</td>
                  </tr>
                  <tr>
                    <td>Error to Goals</td>
                    <td>{player2_stats.error_to_goal}</td>
                  </tr>
                  <tr>
                    <td>Interceptions</td>
                    <td>{player2_stats.interceptions}</td>
                  </tr>
                  <tr>
                    <td>Blocked Shots</td>
                    <td>{player2_stats.blocked_shots}</td>
                  </tr>
                  <tr>
                    <td>Big chances created</td>
                    <td>{player2_stats.big_chance_created}</td>
                  </tr>
                  <tr>
                    <td>Assists</td>
                    <td>{player2_stats.assists}</td>
                  </tr>
                  <tr>
                    <td>Tackle Success</td>
                    <td>{player2_stats.tackle_success}</td>
                  </tr>
                  <tr>
                    <td>Duels won</td>
                    <td>{player2_stats.duel_won}</td>
                  </tr>
                  <tr>
                    <td>Aerial Battle won</td>
                    <td>{player2_stats.aerial_battle_won}</td>
                  </tr>
                  <tr>
                    <td>Accurate Long Balls</td>
                    <td>{player2_stats.accurate_long_balls}</td>
                  </tr>
                </tbody>
                </Table>
          </div>
        )}
    
    </Panel.Body>
    </Panel>
    </Col>

    </Row>
    </Grid>
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
