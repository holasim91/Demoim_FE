import React, { useState }from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text, Grid, Button, Container } from "../../elements";
import { history } from "../../redux/configStore";
import "../../shared/theme";
import { actionCreators as userAction } from "../../redux/modules/user";
import { ApplyProjectList, ParticipationProjectList } from "../../components";
import TabSmallTalkList from "../../components/Userpage/TabSmallTalkList";

const Userpage = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAction.loginCheckAPI());
  }, []);

  const userInfo = useSelector((state) => state.user.user)


  //Tab Menu
  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if(index !== active){
      setActive(index);
    }
  };


  return (
    <React.Fragment>
      <Container>
        <MyPageContainer>
          <Profile>
            <ProfileImg
              src={userInfo?.profileImage ? userInfo.profileImage : props.profileImage} />
          </Profile>
          <UserBox>
            <UserBoxMarks>
              <UserNickName>{userInfo?.nickname}</UserNickName>
              <UserProject>프로젝트 {userInfo?.teams ? userInfo.teams.length : 0}개 진행중</UserProject>
              <ProfileEditBtn onClick={() => {
                history.push('/userEditpage')
              }}>프로필수정</ProfileEditBtn>
            </UserBoxMarks>
            <UserBoxDesc>
              <UserDesc>{userInfo?.description}</UserDesc>
            </UserBoxDesc>
          </UserBox>
        </MyPageContainer>
        {/* Tab Menu */}
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id={0}>스몰토크</Tab>
          <Tab onClick={handleClick} active={active === 1} id={1}>프로젝트 자랑글</Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>프로젝트 히스토리</Tab>
        </Tabs>
        <Content active={active === 0}>
          <TabSmallTalkList/>
        </Content>
        <Content active={active === 1}>
          
        </Content>
        <Content active={active === 2}>
          
        </Content>

        {/* <ApplyTapBox>
          <ApplyProjectList />
        </ApplyTapBox>
        <ApplyTapBox>
          <ParticipationProjectList />
        </ApplyTapBox> */}
      </Container>
    </React.Fragment>
  );
};

Userpage.defaultProps = {
  description: "안녕하세요!",
  profileImage: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
}

//TabMenu

const Tabs = styled.div`
  margin:0 auto;
  width:500px;
  /* border:1px solid lightgray; */
  text-align:center;
  box-sizing:border-box;

  button:nth-child(1){
    width:80px;
    color:red;
  }
  @media ${props => props.theme.mobile}{
    width:345px;
    }
`;

// text-align:left;
//     width:345px;

const Tab = styled.button`
  border:none;
  outline: none;
  cursor:pointer;
  width:150px;
  text-align:center;
  margin:0 auto;
  font-size: 16px;
  font-weight: 600;
  /* border: ${props => (props.active ? "1px solid red" : "")}; */
  border-bottom: ${props => (props.active ? "4px solid #999cda" : "none")};
  background-color: ${props => (props.active ? "white" : "white")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  
  @media ${props => props.theme.tablet}{
    text-align:center;
    font-size:14px;
    width:130px;
    }
  @media ${props => props.theme.mobile}{
    text-align:center;
    font-size:12px;
    width:115px;
    }
  /* :hover {
    background-color:yellow;
  } */
`;

const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;


//팀메이킹 확인용 박스
const ApplyTapBox = styled.div`
  width:100%;
  margin:0px 0px 70px 0px;
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
      width: 40px;
      height: 40px;
      padding:5px;
    }
`;

const UserBox = styled.div`
  width:100%;
  /* border:1px solid lightgray; */


`;

const UserBoxMarks = styled.div`
  display:flex;
  padding:4px 0 0 0;
`;

const UserNickName = styled.div`
  margin: 10px 5px 0 10px;
  font-size: 18px;
  color:#000000;
  @media ${props => props.theme.mobile}{
    font-size: 14px;
    }

`;

const UserProject = styled.div`
  margin: 5px 5px 0 5px;
  padding:6px;
  font-size:12px;
  background-color:#999cda;
  color:#fefefe;
  border-radius:8px;
  @media ${props => props.theme.mobile}{
    font-size: 10px;
    }

`;

const ProfileEditBtn = styled.div`
  margin: 5px 5px 0 5px;
  padding:6px;
  font-size:12px;
  background-color:#999cda;
  color:#fefefe;
  border-radius:8px;
  border:1px solid #999cda;
  @media ${props => props.theme.mobile}{
    font-size: 10px;
    }
  &:hover{
    cursor: pointer;
    background-color:#fefefe;
    color:#999cda;
  }
`;

const UserBoxDesc = styled.div`
  width:100%;
  text-align:left;
  margin-top:5px;
  box-sizing:border-box;
  @media ${props => props.theme.mobile}{
    width: 270px;
    }
`;

const UserDesc = styled.div`
  margin: 10px;
  height: 60px;
  padding:8px;
  font-size:16px;
  background-color: #f1f1f1;
  box-sizing:border-box;
  @media ${props => props.theme.mobile}{
    font-size: 14px;
    }
  

`;




export default Userpage;