import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as smalltalkActions } from "../../redux/modules/smalltalk";
import { getCookie } from "../../shared/Cookies";

const SmallTalkWrite = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [contents, setContents] = useState("");
  const token = getCookie("token");

  const onChangeTextArea = (e) => {
    setContents(e.target.value);
  };
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
              <ProfileImage
                alt="profile"
                src={
                  "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
              />
            )}
            <TextArea
              maxLength="300"
              placeholder="오늘은 어떤일이 있었나요?!"
              value={contents}
              onChange={onChangeTextArea}
            />
          </WriteTop>
          <WriteBottom>
            <Button
              padding="7px 5px"
              size="13px"
              width="51px"
              _onClick={onSubmitSmallTalk}
            >
              등록
            </Button>
          </WriteBottom>
        </>
      ) : (
        <>
          <WriteTop>
            <ProfileImage
              alt="profile"
              src={
                "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              }
            />
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
  :focus{
    outline: none;
  }
`;

export default SmallTalkWrite;
