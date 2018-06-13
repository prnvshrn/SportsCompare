import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel, Grid, Row, Col, FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';

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
  render(){
    return(
    <div>
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title>Player 1</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <form>
        <FormGroup
          controlId="formBasicText">
          <InputGroup>
            <FormControl type="text" placeholder="Enter players' name"/>
            <InputGroup.Addon>Go</InputGroup.Addon>
          </InputGroup>
          <FormControl.Feedback />
        </FormGroup>
        </form>
      </Panel.Body>
    </Panel>
    </div>
    );
  }
}

class PlayerPanel2 extends Component{
  render(){
    return(
    <div>
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title>Player 2</Panel.Title>
      </Panel.Heading>
      <Panel.Body>Player1
      </Panel.Body>
    </Panel>
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
          <Col xs={6} md={6}>
            <PlayerPanel/>
          </Col>
          <Col xs={6} md={6}>
            <PlayerPanel2/>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
