import React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from './asset/favicon.ico';
import styled from 'styled-components';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/Skill';

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
`;

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>DH's Portfolio</title>
        <link rel='icon' href='./asset/favicon.ico' />
      </Helmet>
      <Wrapper>
        <Navbar />
        <Header />
        <About />
        <Skill />
        <Project />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Portfolio;
