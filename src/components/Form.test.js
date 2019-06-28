import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';
import { exportAllDeclaration } from '@babel/types';

describe('Form', () => {

  var wrapper;
  var mockFunction;
  beforeEach(function() {
    mockFunction = jest.fn();
    wrapper = shallow(<Form addPerson={mockFunction} />)
  });

  it('match the snapshot with all the data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke addPerson when button is clicked', () => {

    wrapper.find(".add-person").simulate('click');

  });
})