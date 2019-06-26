import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props);
  const cards = props.people.map(person => {
    return <Person key={props.id} photo={person.photo} name={person.name}
    quote={person.quote} superlative={person.superlative} />
  })
  
  return (
    <main className='cohort'>
      <h2>Cohort</h2>
      <section className="people">
        {cards}
      </section>
    </main>
  )
}

export default Cohort;
