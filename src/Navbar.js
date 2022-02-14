import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Nav = styled.div`
  position: fixed;
  width: 100vw;
  background-color: #fff;
  color: black;
  z-index: 999;
  span {
    font-weight: bold;
  }
`;

const Button = styled(motion.div)`
  margin: 20px;
  font-size: 24px;
  span {
    padding: 20px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 968px) {
    font-size: 24px;
    span {
      padding-left: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      opacity: 0;
    }
  }
`;
const NavItems = styled(motion.div)`
  width: 30vw;
  height: 100vh;
  text-transform: uppercase;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  a {
    margin: 10px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ItemLink = styled(motion.a)`
  margin: 20px;
  cursor: pointer;
  font-weight: bold;
`;
const links = [
  {
    name: 'Home',
    to: 'home',
    id: 1,
  },
  {
    name: 'About Me',
    to: 'about',
    id: 2,
  },
  {
    name: 'Skill',
    to: 'skill',
    id: 3,
  },
  {
    name: 'Project',
    to: 'project',
    id: 4,
  },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Nav style={{ color: 'black', width: clicked ? '30vw' : '100vw' }}>
      <Button
        whileHover={{ x: 30 }}
        onClick={() => {
          setClicked(!clicked);
          console.log(clicked);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
        <span>Portfolio</span>
      </Button>
      {clicked ? (
        <>
          <NavItems initial={{ x: -500 }} animate={{ x: 0 }} exit={{ x: -500 }}>
            {links.map((item) => (
              <Link to={item.to} spy={true} smooth={true}>
                <ItemLink key={item.id} whileHover={{ x: 10 }}>
                  ㅡ {item.name}
                </ItemLink>
              </Link>
            ))}
          </NavItems>
        </>
      ) : null}
    </Nav>
  );
};

export default Navbar;
