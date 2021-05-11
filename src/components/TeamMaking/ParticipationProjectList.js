import React from "react";
import styled from "styled-components";
import { ParticipationProjectCard } from "../../components";

const ParticipationProjectList = () => {
  return (
    <Wraaper>
      <TitleBox>
        <p><span>#</span>내가 참여중인 프로젝트</p>
      </TitleBox>
      <ParticipationBox>
        <ParticipationProjectCard />
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
  margin: 0px auto;

  @media ${props => props.theme.mobile}{
    width:88%;
  }
`;

const TitleBox = styled.div`

  color:#683fee;
  font-weight: 600;
  & span{
    color:#000000;
  }
  margin-bottom: 30px;

  @media (max-width:530px){
    width:88%;
  }
`;
