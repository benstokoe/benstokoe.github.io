import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Container from '../Container';
import fluidImage from '../../../propTypes/fluidImage';
import './site.scss';

const Site = ({ frontmatter: { title, image, skills }, html }) => (
  <div className="site">
    <Container>
      <div className="site__container">
        <div className="site__image">
          <Img fluid={image.childImageSharp.fluid} alt={title} />
        </div>
        <div className="site__info">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          {skills && skills.length ? (
            <div className="site__technology">
              <h5>Technology used:</h5>
              <p>{skills.join(', ')}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Container>
  </div>
);

Site.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    image: fluidImage,
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
  html: PropTypes.string,
};

Site.defaultProps = {
  frontmatter: {
    skills: [],
  },
  html: '',
};

export default Site;
