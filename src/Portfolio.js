import React from 'react';
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
    <Wrapper>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Footer />
    </Wrapper>
  );
};

export default Portfolio;
