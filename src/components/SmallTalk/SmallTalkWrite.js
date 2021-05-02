import React from "react";
import styled from "styled-components";
import { Button } from "../../elements";
const SmallTalkWrite = () => {
  return (
    <WriteWrapper>
      <WriteTop>
        <ProfileImage
          src={
            "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          }
        />
        <TextArea maxLength="300" />
      </WriteTop>
      <WriteBottom>
        <Button padding="7px 5px" size="15px" width="84px">
          글작성
        </Button>
      </WriteBottom>
    </WriteWrapper>
  );
};
const WriteTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const WriteBottom = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row-reverse;
`;
const WriteWrapper = styled.div`
  background-color: ${({ theme }) => theme.main_gray};
  min-height: 90px;
  margin: 20px auto;
  padding: 10px 40px;
  width: 55%;
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;
const TextArea = styled.textarea`
  padding: 13px 16px;
  border: 1px solid #c9c9d9;
  font-size: 0.875rem;
  border-radius: 4px;
  width: 100%;
  min-height: 120px;
  resize: none;
`;

export default SmallTalkWrite;
