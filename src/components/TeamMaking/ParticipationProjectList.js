import React from "react";
import styled from "styled-components";
import { ParticipationProjectCard, LeaderProjectCard } from "../../components";

const ParticipationProjectList = () => {
  return (
    <Wraaper>
      <TitleBox>
        <p><span>#</span>내가 참여중인 프로젝트</p>
      </TitleBox>
      <ParticipationBox>
        <ParticipationProjectCard />
      </ParticipationBox>
      <TitleBox className="participated">
        <p><span>#</span>내가 참여한 프로젝트</p>
      </TitleBox>
      <ParticipationBox>
        <LeaderProjectCard />
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
  margin: 40px auto 0px auto;

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
