import React from "react";
import { HistoryMember } from "../../components";
import { history } from "../../redux/configStore";
import moment from "moment";
import styled from "styled-components";
import { actionCreators as teamActions } from "../../redux/modules/team";
import { useDispatch } from 'react-redux';

const ParticipationProjectCard = (props) => {


  const { title, teamId, member, back, front, designer, planner, begin, end, createAt, recruit, stack, location, isLeader } = props;

  const dispatch = useDispatch();

  let recruitBegin = moment(createAt).format('YYYY.MM.DD');
  let recruitEnd = moment(recruit).format('YYYY.MM.DD');
  let projectBegin = moment(begin).format('YYYY.MM.DD');
  let projectEnd = moment(end).format('YYYY.MM.DD');

  return (
    <Grid>
      <Titlebox onClick={() => history.push(`/team/detail/${teamId}`)}>
        [프로젝트] {title}
      </Titlebox>
      <TeamBox>
        <TeamInfoBox>
          <ProjectInfoBox>
            <p><span>모집 기간</span> {recruitBegin} ~ {recruitEnd}</p>
            <p><span>프로젝트 기간</span> {projectBegin} ~ {projectEnd}</p>
            <p><span>인원</span> {front !== 0 && `프론트엔드 ${front}명 `}
              {back !== 0 && `백엔드 ${back}명 `}
              {designer !== 0 && `디자이너 ${designer}명 `}
              {planner !== 0 && `기획자 ${planner}명 `}</p>
            <p><span>언어</span> {stack}</p>
            <p><span>장소</span> {location}</p>
          </ProjectInfoBox>
        </TeamInfoBox>
        <MemberBox>
          <p className="bold">프로젝트 참여자</p>
          <ParticipationMemberBox>
            {member?.map((m) => {
              return (
                <HistoryMember {...m} key={m.userId} />
              )
            })}
          </ParticipationMemberBox>
        </MemberBox>
      </TeamBox>
      <LeaderSelectBox>
        {isLeader && <ProjectDeleteBtn onClick={() => dispatch(teamActions.deleteTeamMakingAPI(teamId, 'log'))}>프로젝트 취소</ProjectDeleteBtn>
        }
      </LeaderSelectBox>
    </Grid>
  )
}

export default ParticipationProjectCard;

const Grid = styled.div`
  width:100%;
  box-sizing: border-box;
  display: flex;
  min-height: 200px;
  flex-direction: column;
  gap:10px;
  margin:0px auto;

  @media ${props => props.theme.mobile}{
    width:75%;
  }

   @media (max-width:530px){
    width:100%;
  }
`;

const TeamBox = styled.div`
  width:100%;
  box-sizing:border-box;
  display: flex;
  gap:2%;
  padding:7px 17px 25px 17px;

  @media ${props => props.theme.tablet}{
    flex-direction: column;
    gap:0;
  }
`;

const Titlebox = styled.div`
  margin-bottom: 0px;
  font-weight: 500;
  padding-left: 17px;
  cursor: pointer;
`;

const TeamInfoBox = styled.div`
  width:60%;
  min-height: 220px;
  background-color: rgba(241,241,241,0.7);
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.tablet}{
    width:100%;
    margin-bottom: 10px;
    padding:0px;
    min-height:160px;
  }
`;

const MemberBox = styled.div`
  width:40%;
  padding:15px;
  background-color: #ffffff;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  & p{
    text-align: center;
  }

  & .bold{
    font-weight: 500;
  }

  @media ${props => props.theme.tablet}{
    width:100%;
  }
`;

const ProjectInfoBox = styled.div`
  box-sizing: border-box;
  padding:12px;
  font-size:14px;
  width:100%;
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
`;

const ParticipationMemberBox = styled.div`
  display: grid;
  width:100%;
  margin-top:15px;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-row-gap: 10px;
`;

const LeaderSelectBox = styled.div`
  width:100%;
  text-align: center;
`;

const ProjectDeleteBtn = styled.button`
  padding:4px 7px;
  border-radius:10px;
  background-color: #ffffff;
  border:1.5px solid rgba(122, 119, 134, 0.5);
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;