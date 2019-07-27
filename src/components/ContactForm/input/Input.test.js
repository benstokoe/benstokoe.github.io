import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  let wrapper;
  const props = {
    error: false,
    disabled: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it('should render properly with no props', () => {
    wrapper = shallow(<Input />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly for textarea', () => {
    wrapper.setProps({
      type: 'textarea',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly for input', () => {
    wrapper.setProps({
      type: 'input',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render properly with error', () => {
    wrapper.setProps({
      type: 'input',
      error: true,
    });

    expect(wrapper).toMatchSnapshot();
  });
});
