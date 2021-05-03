import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";
import "../shared/theme";

const Mypage = (props) => {
  
  const userInfo = useSelector((state) => state.user.user)
  console.log(userInfo);
  
  return (
    <React.Fragment>
      <MyPageContainer>
        <Profile>
          <ProfileImg src={props.profileImage}/>
          <ProfileUserBox>
            <UserNickName>
            {props.nickname}
            </UserNickName>
            <UserProject>
              프로젝트 1개 진행중
            </UserProject>
            <ProfileEditBtn>프로필수정</ProfileEditBtn>
          </ProfileUserBox>
        </Profile>
      </MyPageContainer>
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

`;

const Profile = styled.div`

`;

const ProfileImg = styled.img`

`;

const ProfileUserBox = styled.div`

`;

const UserNickName = styled.div`

`;

const UserProject = styled.div`

`;

const ProfileEditBtn = styled.div`

`;





export default Mypage;