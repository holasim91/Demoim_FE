import React from "react";
import styled, { css } from "styled-components"
import { NavLink as Link } from "react-router-dom";

const SubMenus = () => {
  return (
    <NavBox>
        <NavLink to='/exhibition'>프로젝트 자랑글</NavLink>
        <NavLink to='/smalltalk'>스몰토크</NavLink>
    </NavBox>
  );
};

const NavBox = styled.nav`
padding-top : 50px;
padding-right: 6%;
  display: flex;
  justify-content: center;
  font-size:20px;
`;

const LinkStyle = css`
  text-decoration: none;
  color:${props => props.theme.main_black};
  cursor: pointer;
`;


const NavLink = styled(Link)`
  ${LinkStyle}
padding-right: 20px;
  &.active{
    color: ${props => props.theme.main_color};
  }
  @media ${props => props.theme.mobile}{
    &:hover{
      text-decoration: none;
    }
  }
`;

export default SubMenus;
