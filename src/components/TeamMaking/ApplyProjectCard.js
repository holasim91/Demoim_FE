import React from "react";
import styled from "styled-components";

//마이페이지용 
const ApplyProjectCard = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <ProjectTable>
          <tbody>
            <tr>
              <td>[프로젝트]</td>
              <td>채팅앱을 만들고 싶습니다!</td>
            </tr>
            <tr>
              <td>모집 기간</td>
              <td>2021.05.05 ~ 2021.05.21</td>
            </tr>
            <tr>
              <td>프로젝트 기간</td>
              <td>2021.05.22 ~ 2021.06.11</td>
            </tr>
            <tr>
              <td>인원</td>
              <td>백엔드 1명 프론트엔드 2명 디자이너 1명 기획자 1명</td>
            </tr>
          </tbody>
        </ProjectTable>
        <BtnBox>
          <button>지원취소</button>
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
`;

const ProjectTable = styled.table`
  border:1px solid black;

  & td{
    padding:5px 0px;
    font-size:0.9em;
  }
  & td:nth-child(1){
    width:31%;
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
  }
`;

const BtnBox = styled.div`
  text-align: center;
  margin-top:15px;
`;