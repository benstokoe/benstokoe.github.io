import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container>
      <h1>{siteTitle}</h1>

      <nav>
        <ul>
          <li>
            <AnchorLink href="#sites">Work</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
