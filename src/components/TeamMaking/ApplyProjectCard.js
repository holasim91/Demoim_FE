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
          <p><span>프로젝트 기간</span> {projectBegin} ~ {projectEnd}</p>
          <p><span>인원</span> {front !== 0 && `프론트엔드 ${front}명 `}
            {back !== 0 && `백엔드 ${back}명 `}
            {designer !== 0 && `디자이너 ${designer}명 `}
            {planner !== 0 && `기획자 ${planner}명 `}
          </p>
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
`;