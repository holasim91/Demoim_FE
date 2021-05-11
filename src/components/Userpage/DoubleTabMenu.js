import React, { useState } from 'react';
import styled from "styled-components";
import { TabTeamApplyHistory, TabTeamLeaderHistory, TabTeamParticipateHistory } from "../../components";

const DoubleTabMenu = () => {

  //프로젝트히스토리-Double Tab Menu 
  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    console.log("더블탭", index);
    if (index !== active) {
      setActive(index);
    }
  };


  return (
    <React.Fragment>

      <DoubleTabs>
        <Connect></Connect>
        <DubTab onClick={handleClick} active={active === 0} id={0}>지원 프로젝트</DubTab>
        <DubTab onClick={handleClick} active={active === 1} id={1}>참여중/참여완료</DubTab>
        <DubTab onClick={handleClick} className="connects" active={active === 2} id={2}>리더 프로젝트</DubTab>
      </DoubleTabs>
      <DubContents active={active === 0}><TabTeamApplyHistory /></DubContents>
      <DubContents active={active === 1}><TabTeamParticipateHistory /></DubContents>
      <DubContents active={active === 2}><TabTeamLeaderHistory /></DubContents>

    </React.Fragment>

  );
};



const DoubleTabs = styled.div`
  position:relative;
  display:flex;
  width:400px;
  margin:-30px auto 60px auto;
  background-color:#f2f5fa;
  /* border:1px solid lightgray; */
`;

const Connect = styled.div`
  position: absolute;
    top: -11px;
    right: 55px;
    width: 20px;
    height: 20px;
  background-color: #f2f5fa;
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
  z-index: 1;
`;

const DubTab = styled.button`
  width:120px;
  margin:0 auto;
  padding:5px;
  text-align:center;
  border:none;
  outline: none;
  cursor:pointer;
  font-weight: ${props => (props.active ? "600" : "500")};
  color: ${props => (props.active ? "#000000" : "#b2b0b7;")};
  background-color: #f2f5fa;
  &.connects{
    position:relative;
    z-index:5;
  }
`;

const DubContents = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;



export default DoubleTabMenu;