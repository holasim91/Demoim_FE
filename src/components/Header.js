import React from "react"
import styled from "styled-components"
import { Container } from "../elements";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <NavBox>
          랄라
          </NavBox>
      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
 width: 100%;
 height: 110px;
 background-color: #F4F6F9;
`

const NavBox = styled.nav`
  background-color: skyblue;
  height: 110px;
  width:100%;
  display: flex;
`
