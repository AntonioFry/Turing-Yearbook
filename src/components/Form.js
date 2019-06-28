import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      category: 'staff',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitPerson = (event) => {
    const { name, quote, superlative, category } = this.state;
    event.preventDefault();
    const person = { name: name, quote: quote, superlative: superlative, photo: 'https://placekitten.com/200/300' };
    this.props.addPerson(person, category);
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ name: '', quote: '', superlative: '', category: '' });
  }

  render() {
    return (
      <form className="form">
        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='quote'
          name='quote'
          value={this.state.quote}
          onChange={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='superlative'
          name='superlative'
          value={this.state.superlative}
          onChange={event => this.handleChange(event)}
        />
        <select name="category" onChange={event => this.handleChange(event)}>
          <option name='staff' value='staff'>Staff</option>
          <option name='student' value='students'>Students</option>
        </select>
        <button className="add-person" onClick={event => this.submitPerson(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;