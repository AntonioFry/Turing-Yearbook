import React from 'react';
import './Person.css';

const Person = (props) => {
  const { name, photo, quote, id, superlative } = props;
  return (
    <div className='person'>
      <h2>{name}</h2>
      <img src={photo} alt="a bird"/>
      <p className="quote">{quote}</p>
      <p>{superlative}</p>
    </div>
  )
}

export default Person;
