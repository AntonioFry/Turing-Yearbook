import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.photo} alt="a bird"/>
      <p className="quote">{props.quote}</p>
      <p>{props.superlative}</p>
    </div>
  )
}

export default Person;
