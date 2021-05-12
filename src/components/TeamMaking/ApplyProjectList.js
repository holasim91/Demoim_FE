import React from "react";
import styled from "styled-components";
import { ApplyProjectCard } from "../../components";
import { useSelector } from 'react-redux';

//유저가 지원한 팀 프로젝트 리스트
const ApplyProjectList = (props) => {

  const applyList = useSelector((state) => state.team.list);

  return (

    <Wrapper>
      <TitleBox>
        <p><span>#</span>내가 지원한 프로젝트</p>
      </TitleBox>
      <ApplicantBox>
        {applyList.length !== 0 ? (applyList.map((a) => {
          return (
            <ApplyProjectCard {...a} key={a.teamId} />
          )
        })) : (
          <NoneProject>지원한 프로젝트 내역이 없습니다.</NoneProject>
        )}
      </ApplicantBox>
    </Wrapper>
  )
}

export default ApplyProjectList;


const Wrapper = styled.div`
  margin-bottom: 70px;
`;

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
  font-size:18px;
  & span{
    color:#000000;
  }
  margin-bottom: 30px;

  @media (max-width:530px){
    width:88%;
  }

  @media ${props => props.theme.mobile}{

  font-size:16px;
}
`;

const NoneProject = styled.p`
  margin:50px 20px;
  color:#7a7786;

`;