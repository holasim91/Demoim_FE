/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../elements";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { history } from "../../redux/configStore";
import EditContents from "../../components/Userpage/EditContents";

const UserEditpage = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const preview = useSelector((state) => state.image.preview);

  React.useEffect(() => {
    if (!userInfo) {
      history.goBack();
      return
    }
    //미리보기 초기화
    if (preview) {
      dispatch(imageActions.setPreview(null));
    }
  }, []);

  return (
    <React.Fragment>
      <Container>
        <EditContainer>
          <Title>
            <span>{userInfo?.nickname}</span>님의 로그
          </Title>
          <EditContents userInfo = {userInfo} preview = {preview} />
        </EditContainer>
      </Container>

    </React.Fragment>
  );
};


UserEditpage.defaultProps = {
  profileImage: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
}

const EditContainer = styled.div`
  width: 500px;
  margin:50px auto;
  text-align: center;
  box-sizing:border-box;
  @media ${props => props.theme.mobile}{
    width:100%;
  }
`;

const Title = styled.div`
  text-align:left;
  margin:50px 0 20px 0;
  color: black;
  font-weight:500;
  span{
    color:#683fee;
  }
  @media ${props => props.theme.mobile}{
      text-align:center; 
    }
`;




export default UserEditpage;