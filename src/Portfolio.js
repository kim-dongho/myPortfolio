import React from 'react';
import styled from 'styled-components';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Introduce from './Introduce';
import Navbar from './Navbar';
import Project from './Project';
import Skill from './Skill';

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
      {/*Introduce*/}
      <Footer />
    </Wrapper>
  );
};

export default Portfolio;
