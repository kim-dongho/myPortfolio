import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
const FooterWrapper = styled.div`
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterIcon = styled.div`
  svg {
    font-size: 50px;
    margin: 20px;
  }
  a {
    color: black;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIcon>
        <a href='https://github.com/kim-dongho' target='_blank'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100004785730057' target='_blank'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </FooterIcon>
      <span>Copyright&copy;2021 by Kim Dong Ho</span>
    </FooterWrapper>
  );
};

export default Footer;
