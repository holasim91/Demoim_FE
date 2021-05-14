import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text, Grid, Button, Container } from "../../elements";
import { history } from "../../redux/configStore";
import "../../shared/theme";
import { actionCreators as userAction } from "../../redux/modules/user";
import EditPen from '../../images/editpen.svg';
import { TabSmallTalkList, TabExhibitionList } from "../../components";
import DoubleTabMenu from "../../components/Userpage/DoubleTabMenu";
import DefaultProfile from '../../images/def_profile.svg';
import { actionCreators as otherUserAction } from "../../redux/modules/otheruser";

const Userpage = (props) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.user)
  const userInfoId = userInfo?.id
  
  const otherId = Number(props.match.params.userId);//파람
  

  //파람이랑 나랑 같으면 내 페이지고, 아니면 다른 사람페이지
  const is_me = otherId === userInfoId ? true : false;
  

  React.useEffect(() => {
    console.log("유저페이지 Other아이디",otherId);
    console.log("유저인포", userInfo);
    console.log("유저인포아이디", userInfoId);
    console.log("is_me: ", is_me);

    //파람 ! == 나
    if(is_me){
      //여기는 나의 로그니까 그대로 로그인체크API
      dispatch(userAction.loginCheckAPI());
    }else{
      //여기는 내가 보고싶은 다른 유저의 정보를 불러와야되니까 아더체크API
      dispatch(otherUserAction.otherCheckAPI(otherId));
    }

  }, [is_me]);



  //Tab Menu
  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };


  return (
    <React.Fragment>
      <UserInfoBox className="userInfoBox">
        <Container>
          <MyPageContainer>
            <Profile>
              <ProfileImg
                src={userInfo?.profileImage ? userInfo.profileImage : DefaultProfile} />
            </Profile>
            <UserBox>
              <UserBoxMarks>
                <UserNickName>{userInfo?.nickname}</UserNickName>
                <ProfileEditBtn onClick={() => { history.push('/userEditpage') }}>
                  <EditPenIcon src={EditPen} />프로필수정
                </ProfileEditBtn>
              </UserBoxMarks>
              <UserBoxPosition>
                <UserPosition>{userInfo?.position}</UserPosition>
                <UserProject>프로젝트 {userInfo?.nowteamcnt ? userInfo.nowteamcnt : 0}개 진행중</UserProject>
              </UserBoxPosition>
              <UserBoxDesc>
                <UserDesc>{userInfo?.description}</UserDesc>
              </UserBoxDesc>
            </UserBox>
          </MyPageContainer>
        </Container>
      </UserInfoBox>
      <Container>
        {/* Tab Menu */}

        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>스몰토크</Tab>
          <Tab onClick={handleClick} active={active === 1} id={1}>프로젝트 자랑글</Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>프로젝트 히스토리</Tab>
        </Tabs>

        <Content active={active === 0}>
          <TabSmallTalkList />
        </Content>
        {/* 프로젝트자랑글 */}
        <Content active={active === 1}>
          <TabExhibitionList />
        </Content>
        <Content active={active === 2}>
          <DoubleTabMenu />
        </Content>
      </Container>
    </React.Fragment>

  );
};

Userpage.defaultProps = {
  description: "안녕하세요!",
  profileImage: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
}


const UserInfoBox = styled.div`
  width:100%;
  height: 50%;
  padding:20px 0;
  margin-bottom:35px;
  background: -webkit-linear-gradient( #F2F5FA, #ffffff);
  background: -moz-linear-gradient(#F2F5FA, #ffffff);
  background: -o-linear-gradient(#F2F5FA, #ffffff);
  background: linear-gradient(#F2F5FA, #ffffff);
`;

//TabMenu
const Tabs = styled.div`
  margin:10px auto 55px auto;
  width:800px;
  text-align:center;
  box-sizing:border-box;
  button:nth-child(1){
    width:150px;
  }
  @media ${props => props.theme.tablet}{
    width:100%;
    margin:10px auto 20px auto;
    button:nth-child(1){
    width:100px;
  }
  
    }
  @media ${props => props.theme.mobile}{
    width:400px;
  }
  @media (max-width: 420px){
    width:100%;
    button:nth-child(1){
    width:65px;
    }
  }
`;

const Tab = styled.button`
  width:200px;
  margin:0 40px;
  font-size: 20px;
  font-weight: 600;
  text-align:center;
  border:none;
  outline: none;
  cursor:pointer;
  color: ${props => (props.active ? "#000000" : "#b2b0b7;")};
  border-bottom: ${props => (props.active ? "4px solid #683fee" : "none")};
  background-color: ${props => (props.active ? "transparent" : "transparent")};
  height: ${props => (props.active ? "2em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  
  @media ${props => props.theme.tablet}{
    margin:0 auto;
    text-align:center;
    font-size:16px;
    width:150px;
    }
  @media ${props => props.theme.mobile}{
    text-align:center;
    font-size:14px;
    width:130px;
    }
  @media (max-width: 420px){
    text-align:center;
    font-size:13px;
    width:120px;
  }

`;

const Content = styled.div`
  ${props => (props.active ? "" : "display:none;")}
  
`;


const MyPageContainer = styled.div`
  display: flex;
  width:600px;
  height:150px;
  text-align:center;
  margin: 100px auto 10px auto;
  padding: 10px auto;
  @media ${props => props.theme.mobile}{
      width:345px;
      margin:25px auto 0 auto;
    }
  
`;

const Profile = styled.div`
  margin:10px;
  @media ${props => props.theme.mobile}{
    margin:10px 0;
    }

`;

const ProfileImg = styled.img`
    width: 65px;
    height: 65px;
    padding: 10px;
    border-radius: 100px;
    @media ${props => props.theme.mobile}{
      width: 60px;
      height: 60px;
      padding:5px;
    }
`;

const UserBox = styled.div`
  width:100%;
  padding-top:15px;
  /* border:1px solid lightgray; */

  @media ${props => props.theme.mobile}{
    padding-top:8px;
    }
`;

const UserBoxMarks = styled.div`
  display:flex;
  justify-content:space-between;
  padding:4px 0 0 0;
`;

const UserNickName = styled.div`
  margin: 10px 5px 0 10px;
  font-size: 18px;
  font-weight:600;
  letter-spacing: 1px;
  color:#000000;
  @media ${props => props.theme.mobile}{
    font-size: 16px;
    font-weight:500;
    }

`;


const EditPenIcon = styled.img`
  width:20px;
  height:20px;
  padding-right:2px;
  @media (max-width: 420px){
    padding-right:2px;
  }
`;

const ProfileEditBtn = styled.div`
  margin: 10px 5px 0 10px;
  /* padding:6px; */
  font-size: 18px;
  font-weight:600;
  letter-spacing: 1px;
  color:#000000;
  @media ${props => props.theme.mobile}{
    margin: 0px 8px 0 0px;
    font-size: 14px;
    font-weight:500;
    }
  @media (max-width: 420px){
    margin: 0px 50px 0 0px;
    font-size:12px;
  }
  &:hover{
    cursor: pointer;
  }
`;


const UserBoxPosition = styled.div`
  display:flex;
`;

const UserPosition = styled.div`
  margin: 10px 10px 0 5px;
  padding: 1px 16px;
  line-height: 200%;
  text-align: center;
  background-color: #999cda;
  color: #ffffff;
  font-size: 12px;
  border-radius: 18px;

  @media ${props => props.theme.mobile}{
    padding:1px 10px;
    }
`;

const UserProject = styled.div`
  margin: 10px 10px 0 5px;
  padding: 0 16px;
  line-height: 230%;
  text-align: center;
  background-color:#c8dbf8;
  color:#000000;
  font-size: 12px;
  border-radius: 18px;
  @media ${props => props.theme.mobile}{
    font-size: 12px;
    }
`;

const UserBoxDesc = styled.div`
  width:100%;
  text-align:left;
  margin-top:10px;
  box-sizing:border-box;
  @media ${props => props.theme.mobile}{
    width: 270px;
    }
`;

const UserDesc = styled.div`
  margin: 10px;
  height: 60px;
  padding:8px 8px 0 0;
  font-size:16px;
  /* background-color: #f1f1f1; */
  box-sizing:border-box;
  @media ${props => props.theme.mobile}{
    font-size: 14px;
    letter-spacing:0.5px;
    line-height:18px;
    }
  

`;




export default Userpage;