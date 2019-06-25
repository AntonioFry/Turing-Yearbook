import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props);
  const cards = props.people.map(person => {
    return <Person key={props.id} image={person.photo} name={person.name}
    quote={person.quote} superlative={person.superlative} />
  })
  
  return (
    <main>
      <h2>Cohort</h2>
        {cards}
    </main>
  )
}

export default Cohort;
