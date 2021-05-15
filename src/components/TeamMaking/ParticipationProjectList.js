import React from "react";
import styled from "styled-components";
import { ParticipationProjectCard, CompleteProjectCard } from "../../components";
import { useSelector } from 'react-redux';

const ParticipationProjectList = () => {

  const participationList = useSelector((state) => state.team.teamParticipationList);

  return (
    <Wraaper>
      <TitleBox>
        <p><span>#</span>내가 참여중인 프로젝트</p>
      </TitleBox>
      <ParticipationBox>
        {participationList?.activateProject !== null ?
          (participationList?.activateProject?.map((p) => {
            return <ParticipationProjectCard {...p} key={p.teamId} />
          })) :
          (<NoneProjectInfo>참여중인 프로젝트가 없습니다.</NoneProjectInfo>)}
      </ParticipationBox>
      <TitleBox className="participated">
        <p><span>#</span>내가 참여한 프로젝트</p>
      </TitleBox>
      <ParticipationBox>
        {participationList?.finishedProject?.length !== 0 ?
          (participationList?.finishedProject?.map((f) => {
            return (
              <CompleteProjectCard {...f} key={f.teamId} />
            )
          })) :
          (<NoneProjectInfo>참여하신 프로젝트가 없습니다.</NoneProjectInfo>)}
      </ParticipationBox>

    </Wraaper>
  )
}

export default ParticipationProjectList;

const ParticipationBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1,minmax(0,1fr));
  width:100%;
  grid-row-gap: 45px;

  @media ${props => props.theme.tablet}{

  grid-row-gap: 20px;
  }
`;

const Wraaper = styled.div`
  display: flex;
  flex-direction: column;
  width:65%;
  margin: 40px auto 80px auto;

  @media ${props => props.theme.mobile}{
    width:88%;
  }

`;

const TitleBox = styled.div`

  color:#683fee;
  font-weight: 600;
  font-size:18px;
  margin-bottom: 30px;
  & span{
    color:#000000;
  }

  &.participated{
    margin-top:40px;
  }

@media ${props => props.theme.mobile}{
    width:73%;
    margin:0 auto 30px auto;
    font-size:16px;
  }
  @media (max-width:530px){
    width:100%;
  }
`;

const NoneProjectInfo = styled.p`
  color:#7a7786;
  margin:50px 20px;
`;