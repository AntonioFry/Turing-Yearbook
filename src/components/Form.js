import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form>
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
      </form>
    )
  }
}

export default Form;