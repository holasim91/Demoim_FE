import React from "react"
import styled, { css } from "styled-components"
import { Container } from "../elements";
import { NavLink as Link, Link as ActiveNoneLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MobileBar } from "../elements";

//link 주소 정해지면 정확하게 맞추기!
const Header = () => {

  const [open, setOpen] = React.useState(false);

  const openBar = () => {
    setOpen(true);
  }

  const closeBar = () => {
    setOpen(false);
  }

  return (
    <Wrapper>
      <Container>
        <Bars onClick={openBar} />
        <NavBox>
          <NavLink to='/'>
            <Logo>
              <span>De</span>moim
            </Logo>
          </NavLink>
          <NavMenu>
            <NavLink to='/service'>
              서비스소개
            </NavLink>
            <NavLink to='/team'>
              팀 메이킹
            </NavLink>
            <NavLink to='/detalk'>
              De Talk
            </NavLink>
          </NavMenu>
          <UserMenu>
            <NoneActiveLink to='/singup'>
              회원가입
            </NoneActiveLink>
            <NoneActiveLink to='/login'>
              로그인
            </NoneActiveLink>
          </UserMenu>
        </NavBox>

        <MobileBar open={open} close={closeBar}>
          <MobileMenu>
            <NoneActiveLink to='/service'>
              서비스소개
            </NoneActiveLink>
            <NoneActiveLink to='/team'>
              팀 메이킹
            </NoneActiveLink>
            <NoneActiveLink to='/team'>
              De Talk
            </NoneActiveLink>
            <MobileUserMenu>
              <NoneActiveLink to='/singup' className='userMenu'>
                회원가입
              </NoneActiveLink>
              <NoneActiveLink to='/login' className='userMenu'>
                로그인
              </NoneActiveLink>
            </MobileUserMenu>
          </MobileMenu>
        </MobileBar>
      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
 width: 100%;
 height: 110px;
 box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.04);
 position: relative;
 z-index:30;
  @media ${props => props.theme.mobile}{
    height: 70px;
  }
`;

const NavBox = styled.nav`
  height: 110px;
  width:100%;
  display: flex;
  align-items:flex-end;
  justify-content: space-between;

  @media ${props => props.theme.mobile}{
    height: 70px;
    justify-content: space-around;
    align-items: center;
    padding-top:6px;
    position: relative;
    top:-20px;
  }
`;
const Logo = styled.p`
  ${props => props.theme.logo}
  color: ${props => props.theme.main_black};

  span{
    color:${props => props.theme.main_color};
  }

  @media ${props => props.theme.mobile}{
    font-size: 1.56em;
  }
`;

const LinkStyle = css`
  text-decoration: none;
  color:${props => props.theme.main_black};
  cursor: pointer;
`;

const NavLink = styled(Link)`
  ${LinkStyle}
  &.active{
    color: ${props => props.theme.main_color};
  }
`;

const NavMenu = styled.div`
  display: flex;
  white-space: nowrap;
  align-items:flex-end; 
  gap : 77px;
  font-size:15px;
  padding:0px 0px 17px 0px;
  color: ${props => props.theme.main_black};
 
  @media ${props => props.theme.mobile}{
    display: none;
  }
`;
const UserMenu = styled.div`
  display: flex;
  gap: 35px;
  margin-bottom: 55px;

  @media ${props => props.theme.mobile}{
    display: none;
  }
`;

const NoneActiveLink = styled(ActiveNoneLink)`
  ${LinkStyle}
  font-size:13px;

  @media ${props => props.theme.mobile}{
    font-size:1.2em;

    &.userMenu{
      font-size: 1em;
    }
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  gap:26px;
`;

const MobileUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap:14px;
  margin-top: 3em;
`;

const Bars = styled(FaBars)`
  
  display: none;
  color:${props => props.theme.main_black};
  

  @media ${props => props.theme.mobile}{
    display: block;
    cursor: pointer;
    font-size: 1.31em;
    transform: translate(-75%,75%);
    position: relative;
    top:8px;
  }
`;

