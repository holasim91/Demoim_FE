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
  grid-template-columns: repeat(1,minmax(0,1fr));
  width:65%;
  margin: 0px auto;
  grid-row-gap: 45px;
  
  @media ${props => props.theme.tablet}{
    
    grid-row-gap: 20px;
  }

  @media (max-width:530px){
    width:88%;
  }
`;

const TitleBox = styled.div`

  color:#683fee;
  font-weight: 600;
  width:65%;
  margin:60px auto 0px auto;
  & span{
    color:#000000;
  }
  margin-bottom: 30px;

  @media (max-width:530px){
    width:88%;
  }
`;
