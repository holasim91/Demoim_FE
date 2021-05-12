import React, { useState } from 'react';
import styled from "styled-components";
import { TabTeamApplyHistory, TabTeamLeaderHistory, TabTeamParticipateHistory } from "../../components";
import { actionCreators as teamActions } from "../../redux/modules/team";
import { useDispatch } from 'react-redux';
const DoubleTabMenu = () => {

  //프로젝트히스토리-Double Tab Menu 
  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  const dispatch = useDispatch();

  React.useEffect(() => {

    //isMe로 한번 더 나눠주기.
    if (active === 0) {
      //로그인한 유저의 지원한 팀프로젝트 목록 리스트 가져오기.
      console.log('active:: 0, 로그인한 유저의 지원 프로젝트 목록을 가져옵니다.')
      dispatch(teamActions.getUserApplyListAPI());

    } else if (active === 1) {

      console.log('active:: 1, 로그인한 유저의 참여중인 프로젝트 목록을 가져옵니다.')
      dispatch(teamActions.getUserParticipateListAPI());
    } else {
      //2 일때 ...
      console.log('active:: 2, 로그인한 유저가 리더인 프로젝트 목록을 가져옵니다.')
      dispatch(teamActions.getUserLeaderListAPI());
    }

  }, [active]);


  return (
    <React.Fragment>
      {/* 탭 */}
      <DoubleTabs>
        <Connect></Connect>
        <DubTab onClick={handleClick} active={active === 0} id={0}>지원 프로젝트</DubTab>
        <DubTab onClick={handleClick} active={active === 1} id={1}>참여중/참여완료</DubTab>
        <DubTab onClick={handleClick} className="connects" active={active === 2} id={2}>리더 프로젝트</DubTab>
      </DoubleTabs>

      {/* 각 탭의 컨텐츠들 */}
      <DubContents active={active === 0}>
        <TabTeamApplyHistory />
      </DubContents>
      <DubContents active={active === 1}>
        <TabTeamParticipateHistory />
      </DubContents>
      <DubContents active={active === 2}>
        <TabTeamLeaderHistory />
      </DubContents>

    </React.Fragment>

  );
};



const DoubleTabs = styled.div`
  position:relative;
  display:flex;
  width:450px;
  font-size:8px;
  margin:-30px auto 60px auto;
  background-color:#f2f5fa;
  @media ${props => props.theme.tablet}{
    margin:0 auto;
    text-align:center;
    width:400px;
    }
  @media ${props => props.theme.mobile}{
    margin:0 auto;
    text-align:center;
    width:355px;
    }
  @media (max-width: 420px){
    text-align:center;
    font-size:4px;
    width:280px;
  }
`;

const Connect = styled.div`
  position: absolute;
    top: -11px;
    right: 30px;
    width: 20px;
    height: 20px;
  background-color: #f2f5fa;
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
  z-index: 1;
  @media (max-width: 420px){
    top: -5px;
    right: 30px;
    width: 10px;
    height: 10px;
  }
`;

const DubTab = styled.button`
  width:150px;
  margin:0 auto;
  padding:10px;
  text-align:center;
  border:none;
  outline: none;
  cursor:pointer;
  font-size:14px;
  font-weight: ${props => (props.active ? "600" : "500")};
  color: ${props => (props.active ? "#000000" : "#b2b0b7;")};
  background-color: #f2f5fa;
  @media ${props => props.theme.tablet}{
    text-align:center;
    font-size:12px;
    width:120px;
    }
  @media (max-width: 420px){
    text-align:center;
    font-size:4px;
    width:105px;
  }
  &.connects{
    position:relative;
    z-index:5;
  }
`;

const DubContents = styled.div`
  ${props => (props.active ? "" : "display:none")};
`;



export default DoubleTabMenu;