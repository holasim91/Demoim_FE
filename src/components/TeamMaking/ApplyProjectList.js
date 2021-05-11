import React from "react";
import styled from "styled-components";
import { ApplyProjectCard } from "../../components";

const ApplyProjectList = (props) => {

  return (

    <React.Fragment>
      <TitleBox>
        <p><span>#</span>내가 지원한 프로젝트</p>
      </TitleBox>
      <ApplicantBox>
        <ApplyProjectCard />
      </ApplicantBox>
    </React.Fragment>
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
    width:88%;
    grid-template-columns: repeat(1,minmax(0,1fr));
  }
`;

const TitleBox = styled.div`

  color:#683fee;
  font-weight: 600;
  & span{
    color:#000000;
  }
  margin-bottom: 30px;
  
`;
