import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Skills = styled.div`
  height: 130vh;
  background-color: #daebf2;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const SkillItems = styled.div`
  display: grid;
  grid-template-columns: 20vw 30vw;
  width: 50vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
    grid-template-columns: 30vw 60vw;
  }
`;
const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  svg {
    font-size: 70px;
  }
  span {
    text-align: center;
    margin-top: 10px;
    color: black;
    text-transform: uppercase;
  }
`;

const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 30px;
  color: black;
  font-weight: bold;
  span {
    font-size: 16px;
  }
`;
const Skill = () => {
  return (
    <Skills id='skill'>
      <span
        style={{
          fontSize: '36px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 'bold',
        }}
      >
        Skills
      </span>
      <SkillItems>
        <SkillItem>
          <FontAwesomeIcon icon={faHtml5} style={{ color: '#e8642c' }} />
          <span>HTML5</span>
        </SkillItem>
        <SkillInfo>
          <span>&#10003; 마크업 언어에 대한 이해가 있습니다.</span>
        </SkillInfo>
        <SkillItem>
          <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#0077c3' }} />
          <span>Css3</span>
        </SkillItem>
        <SkillInfo>
          <span>&#10003; Media Query를 사용하여 반응형 웹을 만들 수 있습니다.</span>
          <span>&#10003; Styled-Components에 대한 이해가 있습니다.</span>
          <span>&#10003; React library인 Framer-motion을 이용한 애니메이션을 구현해 본 경험이 있습니다.</span>
        </SkillInfo>
        <SkillItem>
          <FontAwesomeIcon icon={faJs} style={{ color: '#de9d27' }} />
          <span>JavaScript</span>
        </SkillItem>
        <SkillInfo>
          <span>&#10003; ES5, ES6에 대한 이해가 있습니다. </span>
          <span>&#10003; DOM 객체 제어가 가능합니다.</span>
        </SkillInfo>
        <SkillItem>
          <FontAwesomeIcon icon={faReact} style={{ color: '#5ed3f3' }} />
          <span>React</span>
        </SkillItem>
        <SkillInfo>
          <span>&#10003; 여러가지 React Hook을 써서 프로젝트를 해봤습니다.</span>
          <span>&#10003; 아이디어가 떠올랐을 때 React를 활용하여 웹 어플리케이션으로 제작해본 경험이 있습니다.</span>
          <span>&#10003; React의 특징에 대해 이해하고 사용하고 있습니다. </span>
        </SkillInfo>
      </SkillItems>
    </Skills>
  );
};

export default Skill;
