import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  let wrapper;
  const props = {};

  beforeEach(() => {
    wrapper = shallow(<ContactForm {...props} />);
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
