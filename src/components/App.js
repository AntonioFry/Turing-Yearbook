import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: people.staff
    }
  }

  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <Cohort people={this.state.staff}/>
      </div>
    );
  }
}

export default App;
