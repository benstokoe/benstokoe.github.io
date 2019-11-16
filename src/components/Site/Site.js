import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Container from '../Container';
import fluidImage from '../../../propTypes/fluidImage';
import './site.scss';

// <div dangerouslySetInnerHTML={{ __html: html }} />
const Site = ({ frontmatter: { title, image, skills, url }, html }) => (
  <div className="site">
    <Container>
      <div className="site__container">
        <div className="site__image">
          <Img fluid={image.childImageSharp.fluid} alt={title} />
        </div>
        <div className="site__info">
          <h2>{title}</h2>
          {skills && skills.length ? (
            <div className="site__technology">
              <h5>Technology used:</h5>
              <p>{skills.join(', ')}</p>
            </div>
          ) : (
            ''
          )}
          {url ? (
            <a className="site__visit" href={url} target="__blank">
              Visit site
            </a>
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
    url: PropTypes.string,
  }),
  html: PropTypes.string,
};

Site.defaultProps = {
  frontmatter: {
    skills: [],
    url: '',
  },
  html: '',
};

export default Site;
