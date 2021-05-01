import React from "react";
import styled, { css } from "styled-components";
import { Container } from "../../elements";

const TeamDetail = () => {
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
            </ContentText>
          </TeamPostBox>
          <LeaderBox>

          </LeaderBox>
        </ContentBox>
      </Container>
    </React.Fragment>
  )
}

export default TeamDetail;


const Flex = css`
  display: flex;
  flex-direction: column;
`;

//모집글
const ContentBox = styled.div`
  width:100%;
  margin-top:70px;
  background-color: rgb(0,0,0,0.07);
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  gap:3%;

  @media ${props => props.theme.mobile}{
    flex-direction: column;
    min-height: auto;
  }
  
`;

const TeamPostBox = styled.div`
  background-color: lightgrey;
  width:65%;
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
  background-color: lightpink;
  ${Flex}
  padding:15px;
  box-sizing: border-box;
  gap:10px;
`;

const InfoText = styled.p`
  font-size:14px;
`
const Title = styled.p`
  font-size:18px;
`

const ContentText = styled.p`
  box-sizing: border-box;
  font-size:14px;
  padding:0px 10px;
  line-height: 1.5em;
  
`

//리더 프로필 
const LeaderBox = styled.div`
  background-color: lightpink;
  width:32%;

   @media ${props => props.theme.tablet}{
    width:34%;
  }
  @media ${props => props.theme.mobile}{
    width:100%;
  }

`;

