import React from "react";
import styled from "styled-components";
import { ApplyCard } from "../../components";
import { useSelector } from 'react-redux';

const ApplyList = (props) => {


  const applyList = useSelector((state) => state.apply.applyList);

  if (applyList.length === 0) {
    return (
      <React.Fragment>
        <TitleBox>지원자 목록</TitleBox>
        <NoneApplyBox>
          <p>프로젝트 지원자가 없습니다 :)</p>
        </NoneApplyBox>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <TitleBox>지원자 목록</TitleBox>
      <ApplicantBox>
        {applyList.map((a) => {
          return (
            <ApplyCard {...a} key={a.applyId} />
          )
        })}
      </ApplicantBox>
    </React.Fragment>

  )
}

export default ApplyList
//리더인 경우 지원자 확인 영역
const ApplicantBox = styled.div`
  
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  width:75%;
  margin:0px auto 100px auto;
  padding:15px;
  grid-column-gap: 5%;
  grid-row-gap: 50px;
  box-sizing:border-box;


  @media ${props => props.theme.tablet}{
    width:90%;
  }

  @media ${props => props.theme.mobile}{
   width:100%;
   grid-template-columns: repeat(1,minmax(0,1fr));
   grid-row-gap: 30px;
  }
`;

const TitleBox = styled.div`
  width:100%;
  text-align: center;
  margin:70px 0px 50px 0px;
  font-size:27px;
  font-weight: 600;
  box-sizing:border-box;

  @media ${props => props.theme.tablet}{
    font-size:22px;
  }

  @media ${props => props.theme.mobile}{
   font-size:20px;
   text-align:left;
   margin:50px 0px 10px 0px;
   padding-left: 30px;
  }

`;

const NoneApplyBox = styled.div`
  text-align: center;
  margin:100px 0px 150px 0px;

  & p{
    color:#868686;
    font-size:18px;
  }

  @media ${props => props.theme.mobile}{

    & p{
      font-size:15px;
    }
  }
`;