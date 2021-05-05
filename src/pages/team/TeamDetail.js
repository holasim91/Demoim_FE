import React from "react";
import styled, { css } from "styled-components";
import { Container, Image, Input } from "../../elements";
import { Modal, ApplyList } from "../../components";
import { useMediaQuery } from "react-responsive";
import Swal from 'sweetalert2';

const TeamDetail = () => {

  //지원하기
  //로그인 여부에 따라 모달창 막기.
  const [msg, setMsg] = React.useState("");
  const [site, setSite] = React.useState("");

  const applyTeam = () => {

    if (msg === "" || site === "") {

      return false;
    }

  }

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });

  return (
    <React.Fragment>
      <Container>
        <ContentBox>
          <TeamPostBox>
            <Title>[프로젝트] 채팅사이트를 만들고 싶습니다!</Title>
            <InfoBox>
              <InfoText>
                [모집기간] 2021.04.05~2021.04.20
              </InfoText>
              <InfoText>
                [프로젝트 기간] 2021.05.01~2021.06.04
              </InfoText>
              <InfoText>
                [인원] 프론트엔드 3명 백엔드2명 디자이너 1명
              </InfoText>
              <InfoText>
                [언어] React/Node.js
              </InfoText>
              <InfoText>
                [장소] 오프라인
              </InfoText>
            </InfoBox>
            <ContentText>
              구체적인 아이디어는 없습니다.<br />
              함께 사이드 프로젝트를 진행하실 프론트엔드, 백엔드, 디자이너분을 구합니다.<br />
              함께 기획도 하고 즐겁게 작업해봐요!
                            구체적인 아이디어는 없습니다.<br />
              함께 사이드 프로젝트를 진행하실 프론트엔드, 백엔드, 디자이너분을 구합니다.<br />
              함께 기획도 하고 즐겁게 작업해봐요!
                            구체적인 아이디어는 없습니다.<br />
              함께 사이드 프로젝트를 진행하실 프론트엔드, 백엔드, 디자이너분을 구합니다.<br />
              함께 기획도 하고 즐겁게 작업해봐요!
            </ContentText>
          </TeamPostBox>
          <LeaderBox>
            <LeaderInnerBox>
              <LeaderContent>
                <ImageBox>
                  {isMobile ? (<Image shape="circle" size="50" />) : (<Image shape="circle" size="100" />)}
                </ImageBox>
                <LeaderInfo>
                  <LeaderInfoText>
                    포돌이
                </LeaderInfoText>
                  <LeaderInfoText>
                    프론트엔드
                </LeaderInfoText>
                  <LeaderInfoText className='introduce'>
                    다양한 사람들과 같이 프로젝트하면서 경험도 많이 쌓고 배우고 싶습니다!
                    잘부탁드립니다.
                </LeaderInfoText>
                </LeaderInfo>
              </LeaderContent>
            </LeaderInnerBox>
          </LeaderBox>
        </ContentBox>
        <ModalBox>
          <Modal text="지원하기" padding="7px 18px" heading="📢 지원서 보내기" clickName="지원신청" _onClick={applyTeam}>
            <ApplyBox>
              <Input multiLine label="메세지" placeholder="100자 이내 메세지를 남겨주세요." margin="0px 0px 10px 0px" value={msg} _onChange={(e) => { setMsg(e.target.value) }} />
              <Input label="포트폴리오" placeholder="포트폴리오 참고 사이트를 입력해주세요 :)" padding="10px 10px" value={site} _onChange={(e) => { setSite(e.target.value) }} type="url" />
            </ApplyBox>
          </Modal>
        </ModalBox>

        <ApplyList />

      </Container>
    </React.Fragment>
  )
}

export default TeamDetail;

const Flex = css`
  display: flex;
  flex-direction: column;
`;


const ApplyBox2 = styled.div`
  background-color: skyblue;
  width:100%;
`;

//모집글
const ContentBox = styled.div`
  width:100%;
  margin-top:70px;
  //background-color: rgb(0,0,0,0.07);
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  gap:3%;

  @media ${props => props.theme.mobile}{
    flex-direction: column;
    min-height: auto;
    padding:0px;
    margin-bottom: 15px;
  }
  
`;

const TeamPostBox = styled.div`
  //background-color: lightgrey;
  width:67%;
  ${Flex}
  gap:30px;

  @media ${props => props.theme.tablet}{
    width:66%;
  }

  @media ${props => props.theme.mobile}{
    width:100%;
  }

`;

const InfoBox = styled.div`
  width:100%;
  //background-color: lightpink;
  ${Flex}
  padding:15px;
  box-sizing: border-box;
  gap:10px;
`;

const InfoText = styled.p`
  font-size:16px;
`
const Title = styled.p`
  font-size:20px;
  line-height: 1.4em;

  @media ${props => props.theme.mobile}{
    padding-left:15px;
  }
`

const ContentText = styled.p`
  box-sizing: border-box;
  font-size:15px;
  padding:0px 20px 30px 20px;
  line-height: 1.5em;
  
`

//리더 프로필 
const LeaderBox = styled.div`
  //background-color: lightpink;
  width:30%;
  padding-top:20px;
  @media ${props => props.theme.tablet}{
    width:34%;
  }
  @media ${props => props.theme.mobile}{
    width:100%;
    padding-top:20px;
    border:none;
    border-top:1px solid lightgray;
  }
`;

const LeaderContent = styled.div`
  ${Flex}
  align-items:center;
  gap:20px;

  @media ${props => props.theme.mobile}{
    flex-direction: row;
    align-items: flex-start;
    gap:15px;
  }
`;

const LeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;

  @media ${props => props.theme.mobile}{
    align-items: flex-start;
    gap:8px;
  }
`;
const LeaderInfoText = styled.p`
  font-size:16px;

  &.introduce{
    line-height: 1.4em;
    padding:0px 15px 0px 20px;
  }

  @media ${props => props.theme.mobile}{
    
    font-size:15px;
    
    &.introduce{
      padding:0px;
    }
  }
`;

const ImageBox = styled.div`
`;
const LeaderInnerBox = styled.div`
  border:1px solid lightgray;
  box-sizing: border-box;
  padding:15px 0px;
  min-height: 300px;

  @media ${props => props.theme.mobile}{
    border:none;
    min-height: auto;
  }
  
`;

//모달

const ModalBox = styled.div`
  width:100%;
  text-align: center;
  margin:30px 0px 50px 0px;
`;

const ApplyBox = styled.div`
  width:100%;
  margin:0px auto;
`;