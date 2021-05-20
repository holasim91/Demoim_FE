import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch } from "react-redux";
import { actionCreators as applyActions } from "../../redux/modules/apply";
import { history } from "../../redux/configStore";

//마이페이지용 유저가 지원한 팀프로젝트 카드.
const ApplyProjectCard = (props) => {

  const dispatch = useDispatch();
  const { title, createdAt, recruit, begin, end, location, stack, teamId, front, back, designer, planner } = props;

  const DeleteApply = () => {
    dispatch(applyActions.deleteApplyAPI(teamId));
  }

  let recruitBegin = moment(createdAt).format('YYYY.MM.DD');
  let recruitEnd = moment(recruit).format('YYYY.MM.DD');
  let projectBegin = moment(begin).format('YYYY.MM.DD');
  let projectEnd = moment(end).format('YYYY.MM.DD');

  return (
    <React.Fragment>
      <Grid>
        <Titlebox onClick={() => history.push(`/team/detail/${teamId}`)}>
          [프로젝트] {title}
        </Titlebox>
        <ProjectInfoBox>
        <p><span>모집 기간</span> {recruitBegin} ~ {recruitEnd}</p>
        <ProjectBox>
            <ProjectTitle><span>프로젝트 기간</span></ProjectTitle>
            <ProjectPeriod>{projectBegin} ~ {projectEnd}</ProjectPeriod>                
          </ProjectBox>
          <MemberInfoBox>
            <MemberTitle><span>인원</span></MemberTitle>
            <MemberPosition>
            {front !== 0 && `프론트엔드 ${front}명 `}
            {back !== 0 && `백엔드 ${back}명 `}
            {designer !== 0 && `디자이너 ${designer}명 `}
            {planner !== 0 && `기획자 ${planner}명 `}
            </MemberPosition>
          </MemberInfoBox>
          <p><span>언어</span> {stack}</p>
          <p><span>장소</span> {location}</p>
        </ProjectInfoBox>
        <BtnBox>
          {/* isMe를 기준으로 다른 사용자 페이지에선 보여주지 않음 */}
          <ApplyCancelBtn onClick={DeleteApply}>지원취소</ApplyCancelBtn>
        </BtnBox>
      </Grid>
    </React.Fragment>
  )
}



export default ApplyProjectCard;

const Grid = styled.div`
  width:100%;
  box-sizing: border-box;
  padding:15px;
  display: flex;
  flex-direction: column;
  

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
  cursor: pointer;
`;

//리팩토링필요
const ProjectBox = styled.div`
  display:flex;
`;

const ProjectTitle = styled.p`
display:inline-block;
  font-size:15px;
  line-height: 1.4em;
  width:100px;

  & span{
    background-color:#e5ecf7;
    padding:2px 10px;
    font-size:0.8em;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.27);
    margin-right: 5px;
    font-weight: 500;
  }
  @media (max-width:420px){
    width:95px;
      font-size:12px;
  }
`;

const ProjectPeriod = styled.div`
    font-size: 15px;
    margin-left: 0px;
    padding-top: 10px;
  @media ${props => props.theme.tablet}{
    font-size:15px;
    margin-left: 0px;
    padding-top: 10px;
  }
  @media ${props => props.theme.mobile}{
    font-size:12px;
    margin-left: 0px;
    padding-top: 12px;
  }

  @media (max-width:420px){
    font-size:12px;
    padding-top:8px;
    margin-left: -12px;
    }
`;


const MemberInfoBox = styled.div`
  display:flex;
  
`;

const MemberTitle = styled.p`
  display:inline-block;
  font-size:15px;
  line-height: 1.4em;
  width:60px;

  & span{
    background-color:#e5ecf7;
    padding:2px 10px;
    font-size:0.8em;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.27);
    margin-right: 5px;
    font-weight: 500;
  }
  @media (max-width:420px){
      width:70px;
      font-size:12px;
  }
`;

const MemberPosition = styled.div`
  font-size: 15px;
  line-height:1.4em;
  margin-left: -8px;
  padding-top: 6px;
  @media ${props => props.theme.mobile}{
    font-size:12px;
    margin-left: -8px;
    padding-top: 8px;
  }
  @media (max-width:420px){
    font-size:12px;
    margin-left: 0px;
    }

`;
