import React from "react";
import styled from "styled-components";
import { Image } from "../../elements";

const ParticipationProjectCard = (props) => {
  return (
    <Grid>
      <Titlebox>
        [프로젝트] 채팅 사이트를 만들고 싶습니다!
        </Titlebox>
      <TeamBox>
        <TeamInfoBox>
          <ProjectInfoBox>
            <p><span>모집 기간</span> 2021.05.01 - 2021.05.12</p>
            <p><span>프로젝트 기간</span> 2021.05.01 - 2021.05.12</p>
            <p><span>인원</span> 프론트엔드 1명 백엔드 1명</p>
            <p><span>언어</span> React/Spring</p>
            <p><span>장소</span> 온라인</p>
          </ProjectInfoBox>
        </TeamInfoBox>
        <MemberBox>
          <p className="bold">프로젝트 참여자</p>
          <ParticipationMemberBox>
            <ParticipationMember>
              <div>
                <Image size="40" />
              </div>
              <MemberInfoBox>
                <p className="nickname bold">닉네임</p>
                <p className="position">프론트엔드</p>
              </MemberInfoBox>
            </ParticipationMember>
            <ParticipationMember>
              <div>
                <Image size="40" />
              </div>
              <MemberInfoBox>
                <p className="nickname bold">닉네임</p>
                <p className="position">프론트엔드</p>
              </MemberInfoBox>
            </ParticipationMember>
          </ParticipationMemberBox>
        </MemberBox>
      </TeamBox>
      <LeaderSelectBox>
        <ProjectDeleteBtn>프로젝트 취소</ProjectDeleteBtn>
      </LeaderSelectBox>
    </Grid>
  )
}

export default ParticipationProjectCard;

const Grid = styled.div`
  width:100%;
  box-sizing: border-box;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  gap:10px;
  margin:0px auto;

  @media ${props => props.theme.mobile}{
    width:75%;
  }

   @media (max-width:530px){
    width:100%;
  }
`;

const TeamBox = styled.div`
  width:100%;
  box-sizing:border-box;
  display: flex;
  gap:2%;
  padding:7px 17px 25px 17px;

  @media ${props => props.theme.tablet}{
    flex-direction: column;
    gap:0;
  }
`;

const Titlebox = styled.div`
  margin-bottom: 0px;
  font-weight: 500;
  padding-left: 17px;
`;

const TeamInfoBox = styled.div`
  width:60%;
  min-height: 220px;
  background-color: rgba(241,241,241,0.7);
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.tablet}{
    width:100%;
    margin-bottom: 10px;
    padding:0px;
    min-height:160px;
  }
`;

const MemberBox = styled.div`
  width:40%;
  padding:15px;
  background-color: #ffffff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  & p{
    text-align: center;
  }

  & .bold{
    font-weight: 500;
  }

  @media ${props => props.theme.tablet}{
    width:100%;
  }
`;

const ProjectInfoBox = styled.div`
  box-sizing: border-box;
  padding:12px;
  font-size:14px;
  width:100%;
  & span{
    background-color:#e5ecf7;
    padding:2px 7px;
    border-radius: 12px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
  }

  & p{
    line-height: 2.2em;
  }

  @media ${props => props.theme.mobile}{
    font-size:12px;
    font-weight: 500;
    & p{
      line-height: 2.19em;
    }
  }
`;

const ParticipationMemberBox = styled.div`
  display: grid;
  width:100%;
  margin-top:15px;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-row-gap: 10px;
`;


const ParticipationMember = styled.div`
  min-height: 40px;
  display: flex;
  align-items: center;
`;

const MemberInfoBox = styled.div`
  line-height: 1.2em;
  & .position{
    font-size:12px;
    color:#7a7786;
  }

`;

const LeaderSelectBox = styled.div`
  width:100%;
  text-align: center;
`;

const ProjectDeleteBtn = styled.button`
  padding:4px 7px;
  border-radius:10px;
  background-color: #ffffff;
  border:1.5px solid rgba(122, 119, 134, 0.5);
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;