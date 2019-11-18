import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/about/About';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <About data={data} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    perGourasImage: file(
      relativePath: { eq: "assets/images/per-gouras-03.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    philipImage: file(
      relativePath: { eq: "assets/images/philip-fehrecke.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    reneImage: file(relativePath: { eq: "assets/images/rene-wellmann.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    sorchaImage: file(
      relativePath: { eq: "assets/images/sorcha-thompson.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
