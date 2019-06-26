import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      <Form />
      </header>
      <main>
        <Cohort people={this.state.staff} />
        <Cohort people={this.state.students} />
      </main>
      </div>
    );
  }
}

export default App;
