import React from "react";
import styled from "styled-components";
import { ParticipationProjectCard } from "../../components";
const ParticipationProjectList = () => {
  return (
    <ParticipationBox>
      <ParticipationProjectCard />
    </ParticipationBox>
  )
}

export default ParticipationProjectList;

const ParticipationBox = styled.div`
  display: flex;
  flex-direction: column;
  width:90%;
  margin: 0px auto;
  
  @media ${props => props.theme.tablet}{
    width:100%;
  }
`;