import React from "react";
import styled from "styled-components";
import moment from "moment";
import { history } from "../../redux/configStore";

const CompleteProjectCard = (props) => {


  const { title, begin, end, front, back, designer, planner, teamId } = props;

  let projectBegin = moment(begin).format('YYYY.MM.DD');
  let projectEnd = moment(end).format('YYYY.MM.DD');

  return (
    <Grid>
      <CompleteMark>
        <p>참여완료</p>
      </CompleteMark>

      <ProjectBox>
        <p className="title" onClick={() => history.push(`/team/detail/${teamId}`)}>[프로젝트] {title}</p>
        <ProjectInfoTable>
          <tbody>
            <tr>
              <td>프로젝트 기간</td>
              <td>{projectBegin}~{projectEnd}</td>
            </tr>
            <tr>
              <td>참여인원</td>
              <td>{front !== 0 && `프론트엔드 ${front}명 `}
                {back !== 0 && `백엔드 ${back}명 `}
                {designer !== 0 && `디자이너 ${designer}명 `}
                {planner !== 0 && `기획자 ${planner}명 `}</td>
            </tr>
          </tbody>
        </ProjectInfoTable>
      </ProjectBox>

    </Grid>
  )
}

export default CompleteProjectCard;

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
  -webkit-transform:rotate(45deg);
  -moz-transform:(45deg);
  -ms-transform: rotate(45deg);
  -o-transform:rotate(45deg);
  position: absolute;
  top:-50px;
  left:-50px;

  & p{
    position: relative;
    transform: rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    -moz-transform:(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform:rotate(-90deg);
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
    cursor: pointer;
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
    width:40%;
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
