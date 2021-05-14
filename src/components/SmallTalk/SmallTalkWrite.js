import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "../../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as smalltalkActions } from "../../redux/modules/smalltalk";
import { getCookie } from "../../shared/Cookies";
import DefaultProfile from "../../images/def_profile.svg";

const SmallTalkWrite = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [contents, setContents] = useState("");
  const token = getCookie("token");

  const onChangeTextArea = useCallback((e) =>setContents(e.target.value),[]) 
  const onSubmitSmallTalk = () => {
    dispatch(smalltalkActions.addSmallTalkPostAPI(contents, token));
    setContents("");
  };

  return (
    <WriteWrapper>
      {user ? (
        <>
          <WriteTop>
            {user.profileImage ? (
              <ProfileImage alt="profile" src={user.profileImage} />
            ) : (
              <ProfileImage alt="profile" src={DefaultProfile} />
            )}
            <TextArea
              maxLength="300"
              placeholder="프로젝트와 관련된 이야기들을 적어보세요."
              value={contents}
              onChange={onChangeTextArea}

            />
          </WriteTop>
          <WriteBottom>
            <Button
              padding="4px 5px"
              size="13px"
              width="60px"
              _onClick={onSubmitSmallTalk}
              borderRadius="5.2px"
              margin="0px 5px 0px 0px"
            >
              등록
            </Button>
          </WriteBottom>
        </>
      ) : (
        <>
          <WriteTop>
            <ProfileImage alt="profile" src={DefaultProfile} />
            <TextArea
              maxLength="300"
              placeholder="로그인 후 입력해주세요!!"
              disabled={true}
            />
          </WriteTop>
          <WriteBottom />
        </>
      )}
    </WriteWrapper>
  );
};
const WriteTop = styled.div`
  width: 100%;
  display: flex;
`;
const WriteBottom = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row-reverse;
`;
const WriteWrapper = styled.div`
  min-height: 160px;
  margin: 20px auto 30px auto;
  padding: 17px 28px 0 24px;
  width: 55%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.07);
  background-color: #fff;
  border-radius: 10px;
  @media (max-width: 425px) {
    width: 75%;
  }

`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;
const TextArea = styled.textarea`
  border: 1px solid #c9c9d9;
  font-size: 0.875rem;
  width: 100%;
  min-height: 100px;
  resize: none;
  box-sizing: border-box;
  padding:10px;
  :focus {
    outline: none;
  }
`;


export default SmallTalkWrite;
