import React from 'react';
import PropTypes from 'prop-types';
import './container.scss';

const Container = ({ children }) => <div className="container">{children}</div>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
