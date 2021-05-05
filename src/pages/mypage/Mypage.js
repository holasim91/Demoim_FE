import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text,Grid, Button, Container } from "../../elements";
import { history } from "../../redux/configStore";
import "../../shared/theme";
import { actionCreators as userAction } from "../../redux/modules/user";


const Mypage = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAction.loginCheckAPI());

  },[]);
  
  const userInfo = useSelector((state) => state.user.user)
  // console.log("마이페이지",userInfo);
  // const projectNum = userInfo?.teams.length

  return (
    <React.Fragment>
      <Container>
        <MyPageContainer>
          <Profile>
            <ProfileImg 
            src={userInfo?.profileImage ? userInfo.profileImage : props.profileImage}/>
          </Profile>
          <UserBox>
            <UserBoxMarks>
              <UserNickName>{userInfo?.nickname}</UserNickName>
              <UserProject>프로젝트 {userInfo?.teams ? userInfo.teams.length : 0}개 진행중</UserProject>
              <ProfileEditBtn onClick={() => {
                history.push('/myeditpage')
              }}>프로필수정</ProfileEditBtn>
            </UserBoxMarks>
            <UserBoxDesc>
              <UserDesc>{userInfo?.desc}</UserDesc>
            </UserBoxDesc>
          </UserBox>
        </MyPageContainer>
        {/* <MypageSubmenus/> */}
        
      </Container>
    </React.Fragment>
  );
};

Mypage.defaultProps = {
  id:1,
  username:"g0garden@naver.com",
  nickname:"저녁은불족발",
  position:"프론트엔드",
  desc:"안녕하세요!",
  profileImage:'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
}

const MyPageContainer = styled.div`
  display: flex;
  width:600px;
  height:150px;
  text-align:center;
  margin: 100px auto;
  padding: 10px auto;
  @media ${props => props.theme.mobile}{
      width:345px;
      margin:25px auto;
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




export default Mypage;