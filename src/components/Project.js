import styled from 'styled-components';
import image1, { image2, image3 } from '../ProjectPhoto';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Projects = styled.div`
  display: flex;
  background-color: #4b4453;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const ProjectItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProjectItem = styled.div`
  background-color: white;
  display: flex;
  width: 80vw;
  height: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  @media screen and (max-width: 968px) {
    height: auto;
    align-items: center;
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px;
  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

const ProjectImg = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

const ImgBox = styled(motion.div)`
  height: 100%;
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 70%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 200px;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 18px;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Button = styled.div`
  border-radius: 20px;
  margin: 10px;
`;

const ProjectInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 40px;
  span:first-child {
    font-size: 24px;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    span:first-child {
      font-size: 20px;
      text-align: center;
    }
  }
`;

const ProjectInfoSub = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  line-height: 25px;
  span {
    margin: 10px;
    text-indent: 5px;
  }
`;

const ProjectInfoExtra = styled.div`
  display: grid;
  width: 100%;
  margin: 10px;
  grid-template-columns: 25% 75%;
  gap: 10px;
  & > * {
    margin: 10px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  span:nth-child(odd) {
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const firstVariant = {
  set: (fBack) => ({
    x: fBack ? 300 : -300,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  end: (fBack) => ({
    x: fBack ? -300 : 300,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  }),
};
const Project = () => {
  const [fVisible, setFVisible] = useState(1);
  const [sVisible, setSVisible] = useState(1);
  const [tVisible, setTVisible] = useState(1);
  const [fBack, setFBack] = useState(false);
  return (
    <Projects id='project'>
      <span
        style={{
          fontSize: '36px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontWeight: 'bold',
          margin: '20px',
          color: 'white',
        }}
      >
        Project
      </span>
      <AnimatePresence>
        <ProjectItems>
          {/* Project 1 */}
          <ProjectItem>
            <ProjectImg>
              <AnimatePresence custom={fBack}>
                {image1.map((el) =>
                  fVisible === el.key ? (
                    <>
                      <ImgBox key={el.key} variants={firstVariant} initial='set' animate='visible' exit='end'>
                        <img src={el.data} alt='' />
                      </ImgBox>
                      <ButtonWrapper>
                        <Button
                          onClick={() => {
                            setFBack(false);
                            setFVisible(fVisible === 1 ? image1.length : fVisible - 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </Button>
                        <span>
                          {fVisible} / {image1.length}
                        </span>
                        <Button
                          onClick={() => {
                            setFBack(true);
                            setFVisible(fVisible === image1.length ? 1 : fVisible + 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </ButtonWrapper>
                    </>
                  ) : null
                )}
              </AnimatePresence>
            </ProjectImg>
            <ProjectInfo>
              <ProjectInfoTitle>
                <span>캠퍼스 주변 원룸 정보 웹 어플리케이션</span>
                <span>2021.11 - 2021.12 (개인 프로젝트)</span>
              </ProjectInfoTitle>
              <ProjectInfoSub>
                <span>
                  <b>사용자들이 직접 등록한 학교 주변 원룸 정보들을 볼 수 있는 웹 어플리케이션입니다.</b> 신입생들이나 자취를 시작하려는 학생들에게 도움이 되었으면 하는 마음으로 진행한 프로젝트입니다.
                </span>
                <span>
                  이 프로젝트를 진행하면서 어려웠던 점은 같은 원룸에 사는 사람들에 대한 정보를 불러오는 것이였습니다. 마커가 동일한 위치에 겹쳐서 찍히기 때문에 마커에 클릭 이벤트로 같은 위치에 있는
                  마커들에 대한 정보를 불러와야 했고 DB에 저장되어있는 위도 경도 값을 소수점 11번째, 12번째 자리에서 반올림 하였을 때 같은 위치라면 그 데이터들을 배열로 묶어 저장하고 보여주는 방식으로
                  구현하였습니다.
                </span>
                <span>이 프로젝트를 진행하면서 API를 이용하여 다양한 기능들을 구현하고 응용하는 방법 대해서 배웠고, React hook들을 많이 사용해봄으로써 React에 대한 이해도를 높일 수 있었습니다.</span>
              </ProjectInfoSub>
              <ProjectInfoExtra>
                <span>&#10003; GitHub </span>
                <a href='https://github.com/kim-dongho/oneroom' target='_blank'>
                  https://github.com/kim-dongho/oneroom
                </a>
                <span>&#10003; HomePage </span>
                <a href='https://master.d30msslrj4vyg2.amplifyapp.com/' target='_blank'>
                  https://master.d30msslrj4vyg2.amplifyapp.com
                </a>
                <span>&#10003; Front-End </span>
                <span>React, CSS3</span>
                <span>&#10003; DataBase </span>
                <span>FireBase</span>
                <span>&#10003; 구현 기능 </span>
                <span>로그인, 정보등록, 내정보보기, KAKAO Map Api Event</span>
              </ProjectInfoExtra>
            </ProjectInfo>
          </ProjectItem>
          {/* Project 2 */}
          <ProjectItem>
            <ProjectImg>
              <AnimatePresence custom={fBack}>
                {image2.map((el) =>
                  sVisible === el.key ? (
                    <>
                      <ImgBox key={el.key} variants={firstVariant} initial='set' animate='visible' exit='end'>
                        <img src={el.data} alt='' />
                      </ImgBox>
                      <ButtonWrapper>
                        <Button
                          onClick={() => {
                            setFBack(false);
                            setSVisible(sVisible === 1 ? image2.length : sVisible - 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </Button>
                        <span>
                          {sVisible} / {image2.length}
                        </span>
                        <Button
                          onClick={() => {
                            setFBack(true);
                            setSVisible(sVisible === image2.length ? 1 : sVisible + 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </ButtonWrapper>
                    </>
                  ) : null
                )}
              </AnimatePresence>
            </ProjectImg>
            <ProjectInfo>
              <ProjectInfoTitle>
                <span>회의록 자동 변환 프로젝트</span>
                <span>2021.09 - 2021.11 (팀 프로젝트 / Front-End 개발 담당)</span>
              </ProjectInfoTitle>
              <ProjectInfoSub>
                <span>
                  학과 졸업 프로젝트로 진행한 회의록 자동 변환 프로젝트 입니다.
                  <b>녹음을 진행하면 음성을 텍스트로 변환하여 요약 후 회의록 양식 페이지에 요약 데이터가 삽입되는 웹 어플리케이션 입니다.</b>
                </span>
                <span>
                  React를 사용하여 전체적인 경로 설정 및 페이지를 구현하였습니다. 마이크 버튼을 누르면 녹음을 가능하게하고 정지 버튼을 누르면 녹음이 중지되고 회의록 생성 페이지로 넘어가는 것을
                  구현하였습니다.
                </span>
                <span>
                  프로젝트를 진행하면서 처음으로 팀원들 간에 GIT으로 코드 공유를 해봤던 프로젝트였고, 각자 담당한 파트를 나눠서 개발 후 합쳐보면서 각각의 코드는 잘 실행되는데 합쳤을 때 코드가 실행이
                  안되는 경우가 있었습니다. 이와 같은 상황을 해결하기 위해 버전, 패키지를 맞춰 실행해보면서 해결하였습니다. 팀으로 개발할 때 주의해야 할 점들을 배운 좋은 경험이였던 것 같습니다.
                </span>
              </ProjectInfoSub>
              <ProjectInfoExtra>
                <span>&#10003; GitHub </span>
                <a href='https://github.com/woomin-Shim/MeetingNotes-Summary' target='_blank'>
                  https://github.com/woomin-Shim/MeetingNotes-Summary
                </a>
                <span>&#10003; Front-End </span>
                <span>React, CSS3</span>
                <span>&#10003; Back-End </span>
                <span>Django, Node.js</span>
                <span>&#10003; 구현 기능 </span>
                <span>웹 어플리케이션 개발, 녹음 기능, 회의록 생성, 인쇄</span>
              </ProjectInfoExtra>
            </ProjectInfo>
          </ProjectItem>
          {/* Project 3 */}
          <ProjectItem>
            <ProjectImg>
              <AnimatePresence custom={fBack}>
                {image3.map((el) =>
                  tVisible === el.key ? (
                    <>
                      <ImgBox key={el.key} variants={firstVariant} initial='set' animate='visible' exit='end'>
                        <img src={el.data} alt='' />
                      </ImgBox>
                      <ButtonWrapper>
                        <Button
                          onClick={() => {
                            setFBack(false);
                            setTVisible(tVisible === 1 ? image3.length : tVisible - 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleLeft} />
                        </Button>
                        <span>
                          {tVisible} / {image3.length}
                        </span>
                        <Button
                          onClick={() => {
                            setFBack(true);
                            setTVisible(tVisible === image3.length ? 1 : tVisible + 1);
                          }}
                        >
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                      </ButtonWrapper>
                    </>
                  ) : null
                )}
              </AnimatePresence>
            </ProjectImg>
            <ProjectInfo>
              <ProjectInfoTitle>
                <span>위치기반 급식카드 및 무료급식소 사용처 알림 프로젝트</span>
                <span>2021.09 - 2021.10 (팀 프로젝트 / Front-End 담당)</span>
              </ProjectInfoTitle>
              <ProjectInfoSub>
                <span>
                  학과 동기와 두명이서 진행한 위치기반 급식카드 및 무료급식소 사용처 알림 프로젝트 입니다.
                  <b>내 위치 데이터를 이용하여 내 주변 반경 5km안의 급식카드 사용처, 무료 급식소 데이터들을 불러오는 웹 어플리케이션 입니다.</b>
                </span>
                <span>
                  이 프로젝트에서 어려웠던 점은 CORS 에러를 해결하는 것이였습니다. 서버에서 클라이언트로 바로 데이터를 받으려고 하니 CORS에러가 발생하였고 Express의 CORS 에러를 잡는 코드를 삽입하여
                  해결하였습니다. CORS 에러로 어려움을 겪으면서 CORS에 대해 공부할 수 있었던 좋은 기회였습니다.
                </span>
                <span>코드 공유 및 에러 공유를 하면서 서로에게 배우는 것이 많았던 프로젝트였고, REST API를 사용해 볼 수 있었던 좋은 기회를 가져다준 프로젝트였습니다.</span>
              </ProjectInfoSub>
              <ProjectInfoExtra>
                <span>&#10003; GitHub </span>
                <a href='https://github.com/kim-dongho/web-project' target='_blank'>
                  https://github.com/kim-dongho/web-project
                </a>
                <span>&#10003; Front-End </span>
                <span>React, CSS3</span>
                <span>&#10003; Back-End </span>
                <span>Node.js Express</span>
                <span>&#10003; DataBase </span>
                <span>MongoDB</span>
                <span>&#10003; 구현 기능 </span>
                <span>웹 어플리케이션 구현, 지도에 내 위치 및 무료급식소 급식카드사용처 표시</span>
              </ProjectInfoExtra>
            </ProjectInfo>
          </ProjectItem>
        </ProjectItems>
      </AnimatePresence>
    </Projects>
  );
};

export default Project;
