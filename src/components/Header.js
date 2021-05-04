import React from "react"
import styled, { css } from "styled-components"
import { Container } from "../elements";
import { NavLink as Link, Link as ActiveNoneLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MobileBar } from "../elements";
import { AiOutlineBell } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";


//로그인 후 00님의 로그 추가되면 데스크탑 버전 
//NavMenu에 .addUserLog 클래스 사용해주세요!
//알림 아이콘은 밑에 만들어놓은 Bell 사용해주세요!

//link 주소 정해지면 정확하게 맞추기!
const Header = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);
  // const userInfo = useSelector((state) => state.user.user);
  // console.log("헤더유저인포:",userInfo);

  const LogOut = () => {
    dispatch(actionCreators.logout());
  };

  const [open, setOpen] = React.useState(false);
  const openBar = () => setOpen(true);
  const closeBar = () => setOpen(false);



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
          <NavMenu className={isLogin ? "addUserLog" : ""}>
            <NavLink to='/service'>
              서비스소개
            </NavLink>
            <NavLink to='/team'>
              팀 메이킹
            </NavLink>
            <PcDetalkBox>
              <NavLink to='/exhibition' >
                De Talk
            </NavLink>
            </PcDetalkBox>
            {isLogin ?
              (<NavLink to='/mypage'> 나의 로그 </NavLink>)
              : ""}
          </NavMenu>
          {isLogin ? (
            <UserMenu>
              <NoneActiveLink to='/'>
                <Bell />
              </NoneActiveLink>
              <LogOutBtn onClick={LogOut}>
                로그아웃
            </LogOutBtn>
            </UserMenu>
          ) : (
            <UserMenu>
              <NoneActiveLink to='/signup'>
                회원가입
            </NoneActiveLink>
              <NoneActiveLink to='/login'>
                로그인
            </NoneActiveLink>
            </UserMenu>
          )}
        </NavBox>

        <MobileBar open={open} close={closeBar}>
          <MobileMenu>
            <Logo>
              <span>De</span>moim

            </Logo>
            <Line />
            <NoneActiveLink to='/service' onClick={closeBar}>
              서비스소개
            </NoneActiveLink>
            <NoneActiveLink to='/team' onClick={closeBar}>
              팀 메이킹
            </NoneActiveLink>
            <NoneActiveLink to='/exhibition' onClick={closeBar}>
              De Talk
            </NoneActiveLink>
            {isLogin ? 
              (<NavLink to='/mypage'> 나의 로그 </NavLink>)
              :""}

            {isLogin ? (
              <MobileUserMenu>
                <NoneActiveLink to='/'>
                  <Bell/>
                </NoneActiveLink>
                <LogOutBtn onClick={LogOut}>
                  로그아웃
                </LogOutBtn>
              </MobileUserMenu>
            ) : (
              <MobileUserMenu>
              <NoneActiveLink to='/signup' className='userMenu' onClick={closeBar}>
                회원가입
              </NoneActiveLink>
              <NoneActiveLink to='/login' className='userMenu' onClick={closeBar}>
                로그인
              </NoneActiveLink>
            </MobileUserMenu>
            )}
          </MobileMenu>
        </MobileBar>
      </Container>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 108px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.06);
  z-index:30;
  position: sticky;
  position:-webkit-sticky;
  top:0;
  left:0;
  background-color: white;

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
  position: relative;
  top:-10px;
  left:50px;

  span{
    color:${props => props.theme.main_color};
  }

  @media ${props => props.theme.mobile}{
    font-size:5vw;
    position: relative;
    top:0;
    left:0;
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

  @media ${props => props.theme.mobile}{
    &:hover{
      text-decoration: none;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  white-space: nowrap;
  align-items:flex-end; 
  gap : 77px;
  font-size:1.06em;
  padding:0px 0px 20px 0px;
  color: ${props => props.theme.main_black};

  &.addUserLog{
    gap:45px;
  }

  @media ${props => props.theme.mobile}{
    display: none;
  }
`;
const UserMenu = styled.div`
  display: flex;
  gap: 35px;
  margin-bottom: 55px;
  position: relative;
  font-size: 0.9em;
  @media ${props => props.theme.mobile}{
    display: none;
  }
`;
const NoneActiveLink = styled(ActiveNoneLink)`
  ${LinkStyle}
  font-size:13px;

  &.detalk{
    margin-right:10px;
    font-size:14px;
  }

  @media ${props => props.theme.mobile}{
    font-size:3.7vw;
    
    &.userMenu{
      font-size:3vw;
      color:#7c7788;
      
    }
  }
`;

const LogOutBtn = styled.p`
  cursor:pointer;
  font-size:13px;
  @media ${props => props.theme.mobile}{
    font-size:3.7vw;
    }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4em;
  gap:26px;
`;

const MobileUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  margin-top: 3.5em;
  
`;

const Bell = styled(AiOutlineBell)`
  font-size: 1.5em;
  position: relative;
  top:-5px;
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

const Line = styled.p`
  width:100%;
  height: 1px;
  background-color:#f1f1f1;
`;

const PcDetalkBox = styled.div`
  position: relative;
`;