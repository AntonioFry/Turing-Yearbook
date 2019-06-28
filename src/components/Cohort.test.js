import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {

  var props;
  beforeEach(function() {
    props = {
      people: [
        { id: 1, name: 'name', photo: 'image', quote: 'quote', superlative: 'superlative' },
        { id: 2, name: 'name', photo: 'image', quote: 'quote', superlative: 'superlative' }
      ]
    }
  });

  it('match the snapshot with all the data passed in correctly', () => {
    const wrapper = shallow(
    <Cohort
      people={props.people}
    />)

    expect(wrapper).toMatchSnapshot();
  });
})