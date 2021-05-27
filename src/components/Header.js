import React, { useEffect } from "react";
import styled, { css } from "styled-components"
import { Container } from "../elements";
import { NavLink as Link, Link as ActiveNoneLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MobileBar } from "../elements";
import { AiOutlineBell } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";
import { actionCreators as alarmAction } from "../redux/modules/alarm";
import KorLogo from '../images/demoim_kor.svg'
const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const userCheck = useSelector((state) => state.user.user);
  const alarmCnt = useSelector((state)=> state.alarm.alarmCnt);

  
  const LogOut = () => {
    setOpen(false);
    dispatch(actionCreators.logout());
  };

  useEffect(() => {
    dispatch(alarmAction.setAlarmCntAPI());
  }, [dispatch]);


  function AlarmCountChk(){
    dispatch(alarmAction.setAlarmCntAPI());
  }

// 
  setInterval(AlarmCountChk, 6000, 1000)




  const [open, setOpen] = React.useState(false);
  const openBar = () => setOpen(true);
  const closeBar = () => setOpen(false);



  return (
    <Wrapper>
      <Container>
        <Bars onClick={openBar} />
        <NavBox>
          <NavLogoLink to='/'>
            <Logo>
              <span>De</span>moim
              <KoreanLogo src={KorLogo}/>
            </Logo>
          </NavLogoLink>
          <NavMenu className={isLogin ? "addUserLog" : ""}>
            <NavLink to='/service' className='service'>
              서비스 소개
            </NavLink>
            <NavLink to='/team' className='team'>
              팀 메이킹
            </NavLink>
            <PcDetalkBox className='detalkBox'>
              <NavLink to='/exhibition' className='detalk' >
                De Talk
            </NavLink>
            </PcDetalkBox>
            {isLogin ?
              (<NavLink to={`/userpage/${userCheck?.id}`} className='user'> 나의 로그 </NavLink>)
              : ""}
          </NavMenu>
          {isLogin ? (
            <UserMenu>
              <NoneActiveLink to={`/alarm/${userCheck?.id}`}>
                {alarmCnt === 0 ? "":(<NewBell/>) }
                <BellWraper>
                  <Bell/>
                  {alarmCnt === 0 ? "":(
                    <Tooltip className="tooltip"> 
                      {alarmCnt} 개의 <br/> 새로운 알람이 있습니다.
                    </Tooltip>
                  )}
                </BellWraper>
              </NoneActiveLink>
              <LogOutBtn onClick={LogOut}>
                로그아웃
              </LogOutBtn>
            </UserMenu>
          ) : (
            <UserMenu>
              <NoneActiveLink to='/certification'>
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
            <NoneActiveLink to='/service'className='service' onClick={closeBar}>
              서비스 소개
            </NoneActiveLink>
            <NoneActiveLink to='/team' className='team' onClick={closeBar}>
              팀 메이킹
            </NoneActiveLink>
            <NoneActiveLink to='/exhibition' className='detalk' onClick={closeBar}>
              De Talk
            </NoneActiveLink>
            {isLogin ?
              (<NoneActiveLink to={`/userpage/${userCheck?.id}`} onClick={closeBar}> 나의 로그 </NoneActiveLink>)
              : ""}

            {isLogin ? (
              <MobileUserMenu>
                <NoneActiveLink to={`/alarm/${userCheck?.id}`} className='userMenu' onClick={closeBar}>
                  <BellWraper>
                    {alarmCnt === 0 ? "":(<NewBell/>) }
                    <Bell/>
                    {alarmCnt === 0 ? "":(
                      <Tooltip className="tooltip"> 
                        {alarmCnt} 개의 <br/> 새로운 알람이 있습니다.
                      </Tooltip>
                    )}
                  </BellWraper>
                </NoneActiveLink>
                <LogOutBtn onClick={LogOut} className='userMenu'>
                  로그아웃
                </LogOutBtn>
              </MobileUserMenu>
            ) : (
              <MobileUserMenu>
                <NoneActiveLink to='/certification' className='userMenu' onClick={closeBar}>
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
const KoreanLogo = styled.img `
position: absolute;
top: -20px;
@media ${props => props.theme.mobile}{
  top: -10px;
  padding-left: 7px;
  }

`
const Wrapper = styled.div`
  width: 100%;
  height: 108px;
  box-shadow: 0px 6px 20px 0px rgba(0, 0, 0, 0.06);
  z-index:30;
  position: sticky;
  position:-webkit-sticky-sticky;
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
  /* left:50px; */
  span{
    color:${props => props.theme.main_color};
  }
  @media ${props => props.theme.mobile}{
    font-size:30px;
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

const NavLogoLink = styled(Link)`
  ${LinkStyle}
  @media (max-width: 1200px){ 
    color: black;
    /* margin: 0 0px 0 10px; */
    font-size: 15px;
    font-weight: 400;
  }
  &.active {
    color: ${(props) => props.theme.main_color};
  }
  @media ${(props) => props.theme.mobile} {
    &:hover {
      text-decoration: none;
    }
  }
`;

const NavLink = styled(Link)`
  ${LinkStyle};

  @media (max-width: 1200px){ 
      margin: 0 20px 0 20px;
      font-size: 15px;
      font-weight: 400;
      color: black;
    }
    &.active {
      color: ${(props) => props.theme.main_color};
  }

  @media (max-width: 855px){ 
      margin: 0 10px 0 10px;
      font-size: 15px;
      font-weight: 400;
      color: black;
    }
    &.active {
      color: ${(props) => props.theme.main_color};
  }

  @media ${(props) => props.theme.mobile} {
    &:hover {
      text-decoration: none;
    }
  }

  
`;

const NavMenu = styled.div`
  display: flex;
  white-space: nowrap;
  align-items:flex-end; 
  gap : 50px;
  font-size:1.06em;
  padding:0px 0px 20px 0px;
  color: ${props => props.theme.main_black};
  &.addUserLog{
    gap:45px;
  }

  @media (max-width: 1200px){ 
    
    display: flex;
    white-space: nowrap;
    align-items:flex-end; 
    gap : 0;
    font-size:1.06em;
    padding:0px 0px 20px 30px;
    color: black;
    &.addUserLog{
      gap:45px;
    }
  }
  @media ${props => props.theme.mobile}{
    display: none;
  }
`;

const UserMenu = styled.div`
  position: relative; 
  display: flex;
  gap:35px;
  margin-bottom: 55px;

  @media ${props => props.theme.tablet}{
    position: relative;
    display: flex;
    justify-content: center;
    gap:0;
    
  }
  @media ${props => props.theme.mobile}{
    display: none;
  }
  
`;

const NoneActiveLink = styled(ActiveNoneLink)`
  ${LinkStyle}
  font-size:13px;
  
  @media (max-width: 1200px){ 
    font-size:13px;
    width:54px;
    font-weight: 400;
    margin: 0 0 0 5px;
  }
  @media ${props => props.theme.mobile}{
    font-size:20px;
    color: black;
    width: 100px;
    margin: 20px 0 0 0;
    &.userMenu{
      font-size:15px;
      color:#7c7788;
    }
  }
`;

const LogOutBtn = styled.p`
  cursor:pointer;
  font-size:13px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4em;
  gap: 26px;
`;

const MobileUserMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap:30px;
  margin-top: 3.5em;
  
`;
const BellWraper = styled.div`
    position: relative;
    &:hover {
      .tooltip{
        display: block;
      }
    }
    @media ${props => props.theme.mobile}{
      position: relative;
    }
`;


const Bell = styled(AiOutlineBell)`
  font-size: 20px;
  position: relative;
  top:-5px;

  @media ${props => props.theme.tablet}{
    font-size: 20px;
    position: absolute;
    top:-5px;
  
    color: #000000;
  }
  @media ${props => props.theme.mobile}{
    font-size: 30px;
    position: relative;
    top:-5px;
    color: black;
    right: 0px;
  }
`;


const Tooltip = styled.div`
  display: none;
  text-align: center;
  line-height:15px;
  position: absolute;
  top: 30px;
  left: -60px;
  width: 120px;
  height: 30px;
  padding: 10px;
  border: 1px solid #dedfff;
  background-color: #dedfff;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 550;
  &:after {
	content: '';
	position: absolute;
	border-style: solid;
	border-width: 0 6px 10px 6px;
	border-color: #dedfff transparent;
	display: block;
	z-index: 1;
	top: -11px; 
	left: 62px; 
	}
  @media (max-width: 1200px){ 
    display: none;
    text-align: center;
    line-height:15px;
    position: absolute;
    top: 30px;
    left: -58px;
    width: 120px;
    height: 30px;
    padding: 10px;
    border: 1px solid #dedfff;
    background-color: #dedfff;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 550;
    &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 6px 10px 6px;
    border-color: #dedfff transparent;
    display: block;
    z-index: 1;
    top: -11px; 
    left: 62px; 
    }
  }
  @media ${props => props.theme.mobile}{
    
    top: -3px;
    left: 50px;
    width: 200px;
    height: 10px;
    line-height:1;
    
    color: black;
    br {
      display: none;
    }
    
    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 0 6px 10px 6px;
      transform: rotate(33deg);
      border-color: #dedfff transparent;
      display: block;
      z-index: 1;
      top: 9px; 
      left: -9px; 
      }
  }
`;
const NewBell = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  top: -8px;
  right: 80px;
  background-color: ${props => props.theme.main_color};
  @media (max-width: 1200px){ 
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: -8px;
    right: 80px;
    background-color: ${props => props.theme.main_color};
  }
  @media ${props => props.theme.mobile}{
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.theme.main_color};
    left: 30px;
  }
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
