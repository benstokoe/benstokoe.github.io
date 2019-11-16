import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Site from '../Site/Site';
import './sitelist.scss';

const SiteList = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <div className="site__list" id="sites">
    {edges.map(({ node: { id, frontmatter, html } }) => (
      <Site key={id} frontmatter={frontmatter} html={html} />
    ))}

    <p className="site__note">
      Please note that site designs may differ from the screenshots.
    </p>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fileAbsolutePath: { regex: "/sites/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                image {
                  childImageSharp {
                    resize(width: 1500, height: 1500) {
                      src
                    }
                    fluid(maxWidth: 786) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                skills
                url
              }
              html
            }
          }
        }
      }
    `}
    render={data => <SiteList data={data} {...props} />}
  />
);
