import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faUser, faCalendar, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const AboutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 120vh;
  }
`;

const AboutIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: white;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  span {
    text-align: center;
    padding: 10px;
  }
`;

const AboutInfos = styled.div`
  width: 40%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;

const AboutInfo = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 30% 70%;
  svg {
    font-size: 50px;
    margin-right: 10px;
  }
`;

const AboutInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
  }
  span:first-child {
    font-size: 24px;
  }
  span:last-child {
    font-size: 14px;
    line-height: 40px;
  }
`;

const About = () => {
  return (
    <AboutWrapper id='about'>
      <span
        style={{
          fontSize: '36px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 'bold',
        }}
      >
        About Me
      </span>
      <AboutIntro>
        <span>안녕하세요. 신입 Front-End 개발자 김동호입니다.</span>
        <span>코딩을 했을 때 바로 웹 페이지에 결과가 보이는 것에 재미를 느껴 Front-End 개발자가 되기로 결심했습니다.</span>
        <span>&#10071; 책임감 있게 맡은 업무를 해내겠습니다.</span>
        <span>&#10071; 트렌드에 뒤처지지 않는 개발자가 되겠습니다.</span>
        <span>&#10071; 협력과 소통을 중요시 하겠습니다.</span>
        <span>현재 React를 이용하여 개발하고 있고, TypeScript를 공부중입니다.</span>
      </AboutIntro>
      <AboutInfos>
        <AboutInfo>
          <FontAwesomeIcon icon={faUser} />
          <AboutInfoWrapper>
            <span>이름</span>
            <span>김동호</span>
          </AboutInfoWrapper>
        </AboutInfo>
        <AboutInfo>
          <FontAwesomeIcon icon={faCalendar} />
          <AboutInfoWrapper>
            <span>생년월일</span>
            <span>97.08.26</span>
          </AboutInfoWrapper>
        </AboutInfo>
        <AboutInfo>
          <FontAwesomeIcon icon={faPhoneAlt} />
          <AboutInfoWrapper>
            <span>전화번호</span>
            <span>010-4031-8456</span>
          </AboutInfoWrapper>
        </AboutInfo>
        <AboutInfo>
          <FontAwesomeIcon icon={faEnvelope} />
          <AboutInfoWrapper>
            <span>이메일</span>
            <span>dongho_k@naver.com</span>
          </AboutInfoWrapper>
        </AboutInfo>
      </AboutInfos>
    </AboutWrapper>
  );
};

export default About;
