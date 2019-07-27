import { shape, number, string } from 'prop-types';

export default shape({
  childImageSharp: shape({
    fluid: shape({
      aspectRatio: number,
      src: string,
      srcSet: string,
      sizes: string,
    }),
  }),
});
