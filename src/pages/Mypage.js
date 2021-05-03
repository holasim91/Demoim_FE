import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Text,Grid, Button, Container } from "../elements";
import { history } from "../redux/configStore";
import "../shared/theme";

const Mypage = (props) => {
  
  const userInfo = useSelector((state) => state.user.user)
  console.log("마이페이지",userInfo);
  
  return (
    <React.Fragment>
      <Container>
        <MyPageContainer>
          
          <Profile>
            <ProfileImg src={props.profileImage}/>
          </Profile>
          <UserBox>
            <UserBoxMarks>
              <UserNickName>{props.nickname}</UserNickName>
              <UserProject>프로젝트 1개 진행중</UserProject>
              <ProfileEditBtn>프로필수정</ProfileEditBtn>
            </UserBoxMarks>
            <UserBoxDesc>
              <UserDesc>안녕하세요! 프론트엔드 개발자 준비중입니다 : )</UserDesc>
            </UserBoxDesc>
          </UserBox>
          
        </MyPageContainer>
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
  
`;

const Profile = styled.div`
  margin:10px;

`;

const ProfileImg = styled.img`
    width: 65px;
    height: 65px;
    padding: 10px;
    border-radius: 100px;
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

`;

const UserProject = styled.div`
  margin: 5px 5px 0 5px;
  padding:6px;
  font-size:12px;
  background-color:#999cda;
  color:#fefefe;
  border-radius:8px;

`;

const ProfileEditBtn = styled.div`
  margin: 5px 5px 0 5px;
  padding:6px;
  font-size:12px;
  background-color:#999cda;
  color:#fefefe;
  border-radius:8px;
  &:hover{
    cursor: pointer;
    background-color:#fefefe;
    color:#999cda;
    border:1px solid purple;
  }
`;

const UserBoxDesc = styled.div`
  width:100%;
  text-align:left;
  margin-top:5px;
  box-sizing:border-box;
`;

const UserDesc = styled.div`
  margin: 10px;
  height: 60px;
  padding:8px;
  font-size:16px;
  background-color: #f1f1f1;
  box-sizing:border-box;
  

`;




export default Mypage;