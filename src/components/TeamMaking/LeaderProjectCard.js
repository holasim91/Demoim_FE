import React from "react";
import styled from "styled-components";

const LeaderProjectCard = (props) => {
  return (
    <Grid>
      <CompleteMark>
        <p>참여완료</p>
      </CompleteMark>

      <ProjectBox>
        <p className="title">[프로젝트] 채팅사이트를 만들고 싶습니다. 함께 하실 분을 구해요!</p>
        <ProjectInfoTable>
          <tbody>
            <tr>
              <td>프로젝트 기간</td>
              <td>2021.04.05~2021.04.20</td>
            </tr>
            <tr>
              <td>참여인원</td>
              <td>프론트엔드 2명 백엔드 3명 기획자 1명 디자이너 2명</td>
            </tr>
          </tbody>
        </ProjectInfoTable>
      </ProjectBox>

    </Grid>
  )
}

export default LeaderProjectCard;

const Grid = styled.div`
  width:95%;
  box-sizing: border-box;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  gap:10px;
  margin:0px auto;
  background-color: rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  justify-content: center;
  
  @media ${props => props.theme.mobile}{
    width:70%;
  }


  @media (max-width:530px){
    width:93%;
  }
`;

const CompleteMark = styled.div`
  width:100px;
  height: 100px;
  background-color: #d8d8d8;
  transform: rotate(45deg);
  position: absolute;
  top:-50px;
  left:-50px;

  & p{
    position: relative;
    transform: rotate(-90deg);
    text-align: center;
    top:43px;
    left:38px;
    font-size:15px;
    font-weight: 600;
  }

  @media ${props => props.theme.mobile}{

    top:-55px;
    left:-55px;
    & p{
      font-size: 13px;
      top:45px;
    }
  }
`;

const ProjectBox = styled.div`
  margin: 0px auto;
  width:70%;
  box-sizing: border-box;
  & .title{
    color: #b2b0b7;
    line-height: 1.2em;
  }

  @media ${props => props.theme.tablet}{
    font-size:14px;
  }

  @media (max-width:430px){
    width:80%;
    margin:35px auto 35px auto;

    & .title{
      font-size:13px;
      line-height: 1.2em;
    }
  }
`;

const ProjectInfoTable = styled.table`
  margin-top:15px;
  font-size:14px;
  color: #b2b0b7;
  & td{
    padding:5px 0px;
  }

  & td:nth-child(1){
    width:27%;
  }

    @media ${props => props.theme.tablet}{
    font-size:12px;
  }

    @media ${props => props.theme.mobile}{
      
      font-size:12px;
      & td:nth-child(1){
        width:38%;
      }
  }
`;
