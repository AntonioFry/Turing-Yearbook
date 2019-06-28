import React from 'react';
import { shallow, mount } from 'enzyme';
import Person from './Person';

describe('Card', () => {

  var data;
  beforeEach(function() {
    data = { id: 1, name: 'name', photo: 'image', quote: 'quote', superlative: 'superlative' }
  });

  it('match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(
      <Person
        key={data.key}
        photo={data.photo}
        name={data.name}
        quote={data.quote}
        superlative={data.superlative}
      />
    )

    expect(wrapper).toMatchSnapshot();
  });
});