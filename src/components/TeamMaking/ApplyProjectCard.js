import React from "react";
import styled from "styled-components";

//마이페이지용 
const ApplyProjectCard = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Titlebox>
          [프로젝트] 채팅 사이트를 만들고 싶습니다!
        </Titlebox>
        <ProjectInfoBox>
          <p><span>모집 기간</span> 2021.05.01 - 2021.05.12</p>
          <p><span>프로젝트 기간</span> 2021.05.01 - 2021.05.12</p>
          <p><span>인원</span> 프론트엔드 1명 백엔드 1명</p>
          <p><span>언어</span> React/Spring</p>
          <p><span>장소</span> 온라인</p>
        </ProjectInfoBox>
        <BtnBox>
          <ApplyCancelBtn>지원취소</ApplyCancelBtn>
        </BtnBox>
      </Grid>
    </React.Fragment>
  )
}

/*
<p><span>모집 기간</span> 2021.05.05 ~ 2021.05.21</p>
<p><span>프로젝트 기간</span> 2021.05.30 ~ 2021.06.20</p>
<p><span>인원</span> 프론트엔드 1명 백엔드2명 디자이너1명 기획자 1명</p>
*/

export default ApplyProjectCard;

const Grid = styled.div`
  width:100%;
  box-sizing: border-box;
  padding:15px;
  display: flex;
  flex-direction: column;
  border:1px solid black;
  

  & p {
    line-height: 1.3em;
  }
  @media (max-width:380px){
    padding:12px;
    }
`;

const ProjectInfoBox = styled.div`
  background-color: rgba(241, 241, 241, 0.7);
  box-sizing: border-box;
  padding:12px;
  font-size:14px;

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
  /* & td{
    padding:5px 0px;
    font-size:0.9em;
    height: 20px;
  }
  & td:nth-child(1){
    width:31%;
  }

  & span{
    background-color: #e5ecf7;
    padding:1px 6px;
    border-radius: 10px;
    font-size:500;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
  }

  @media (max-width:668px){
    & td:nth-child(1){
      width:45%;
  }
  }
  @media ${props => props.theme.mobile}{
    & td{
      font-size:0.8em;
    }
    & td:nth-child(1){
      width:31%;
    }
  } */
`;

const BtnBox = styled.div`
  text-align: center;
  margin-top:18px;
`;

const ApplyCancelBtn = styled.button`
  background-color: #ffffff;
  border:1.5px solid rgba(122, 119, 134, 0.5);
  font-size: 14px;
  border-radius: 10px;
  padding:2px 10px;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  @media ${props => props.theme.mobile}{
    font-size: 12px;
  }
`;

const Titlebox = styled.div`
 margin-bottom: 15px;
 font-weight: 500;
`;