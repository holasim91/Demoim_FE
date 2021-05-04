import React from "react";
import styled from "styled-components";

const ExhibitionComment = () => {
  return (
    <CommentWrapper>
      <CommentHeader>
        <ProfileImage
          alt="profile"
          src={
            "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          }
        />
        <TextBlock>
          <UserName>케로</UserName>
          <PostDate>2021.05.01</PostDate>
        </TextBlock>
      </CommentHeader>
      <CommentContents>
        안녕하세요 이건 대체 뭐라고 써있는건가요????
      </CommentContents>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
background-color: #f2f5fa;
  min-height: 200px;
  margin: 20px 0;
  padding: 30px;
`;
const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const UserName = styled.div`
  padding-bottom: 5px;
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
`;
const CommentContents = styled.div`
  margin-top: 10px;
`;
export default ExhibitionComment;
