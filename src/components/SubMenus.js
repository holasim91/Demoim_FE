import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

const SubMenus = () => {
  const findDetalkBox = document.querySelector(".detalkBox").querySelector("a");
  const current = window.location.pathname.split("/")[1];
  useEffect(() => {
    if (current === "smalltalk" || current === "exhibition") {
      findDetalkBox.classList.add("active");
    }
    return () => {
      findDetalkBox.classList.remove("active");
    };
  }, [current, findDetalkBox]);
  return (
    <NavBox>
      <NavLink to="/exhibition">프로젝트 자랑</NavLink>
      <NavLink to="/smalltalk">스몰토크</NavLink>
    </NavBox>
  );
};

const NavBox = styled.nav`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const LinkStyle = css`
  text-decoration: none;
  color: ${(props) => props.theme.main_black};
  cursor: pointer;
`;

const NavLink = styled(Link)`
  ${LinkStyle}
  padding-right: 20px;
  &.active {
    color: ${(props) => props.theme.main_color};
  }
  @media ${(props) => props.theme.mobile} {
    &:hover {
      text-decoration: none;
    }
  }
`;

export default SubMenus;
