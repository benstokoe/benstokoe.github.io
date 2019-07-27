import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  let wrapper;
  const props = {
    children: <p>Children</p>,
  };

  beforeEach(() => {
    wrapper = shallow(<Container {...props} />);
  });

  it('should render properly with no props', () => {
    wrapper = shallow(<Container />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
