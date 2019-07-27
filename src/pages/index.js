import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import SiteList from '../components/SiteList/SiteList';
import Contact from '../components/Contact/Contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <SiteList />

    <Contact />
  </Layout>
);

export default IndexPage;
