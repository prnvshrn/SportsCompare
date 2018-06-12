import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Customers extends Component{
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/football/Ryan Giggs')
      //.then(res => res.text().json())
      //.then(customers => this.setState({ customers }));
      //.then(function(res) { var abc = res.text(); console.log(abc); })
      //.then(function(customers){ this.setState({ customers }); });
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Customers/>
      </div>
    );
  }
}

export default App;
