import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";

const SubMenus = (props) => {
  const {currentPath} = props
  console.log('submenu', currentPath)
  return (
    <SubMenusWrapper>
      <SubMenuUl>
        <li onClick={()=>history.push('/exhibition')}>프로젝트 자랑글</li>
        <li onClick={()=>history.push('/')}>스몰토크</li>
      </SubMenuUl>
    </SubMenusWrapper>
  );
};

const SubMenusWrapper = styled.div`
  padding-top: 20px;
  padding-left: 55%;
  @media ${(props) => props.theme.mobile} {
    /* display: none; */
  }
`;
const SubMenuUl = styled.div`
  list-style: none;
  display: flex;
  li {
    cursor: pointer;
    :first-child {
      padding-right: 20px;
    }
    :hover{
      font-weight:500;
    }
  }
`;
export default SubMenus;
