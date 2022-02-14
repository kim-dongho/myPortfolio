import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import bgImg from './asset/bg.svg';

const Head = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
`;

const Info = styled(motion.div)`
  height: 70%;
  width: 80%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: bold;
  span {
    line-height: 40px;
    font-size: 24px;
  }
  span:nth-child(3) {
    margin-top: 30px;
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    span {
      font-size: 18px;
    }
    span:nth-child(3) {
      margin-top: 30px;
      font-size: 20px;
    }
  }
`;

const infoVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
    },
  },
};
const spanVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    duration: 1.5,
  },
};
const Header = () => {
  return (
    <>
      <Head id='home'>
        <Info variants={infoVariants} initial='start' animate='end'>
          <motion.span variants={spanVariants}>협력과 소통을 중요시하는</motion.span>
          <motion.span variants={spanVariants}>책임감을 가지고 일하는</motion.span>
          <motion.span variants={spanVariants}>신입 프론트엔드 개발자 김동호 입니다.</motion.span>
        </Info>
      </Head>
    </>
  );
};

export default Header;
