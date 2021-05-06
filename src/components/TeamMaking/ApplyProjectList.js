import React from "react";
import styled from "styled-components";
import { ApplyProjectCard } from "../../components";

const ApplyProjectList = (props) => {

  return (

    <ApplicantBox>
      <ApplyProjectCard />
    </ApplicantBox>

  )
}

export default ApplyProjectList;

const ApplicantBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  width:90%;
  margin: 0px auto;
  grid-column-gap: 2%;
  grid-row-gap: 20px;
  
  @media ${props => props.theme.tablet}{
    width:100%;
    grid-row-gap: 10px;
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  @media (max-width:530px){
    grid-template-columns: repeat(1,minmax(0,1fr));
  }
`;