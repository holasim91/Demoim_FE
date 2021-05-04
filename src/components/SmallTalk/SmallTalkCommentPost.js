import React from "react";
import styled from "styled-components";

const SmallTalkCommentPost = (props) => {
  const {comments, user } = props.data;
  const ChangeTimeType = (time) => time.split("T")[0];

  return (
    <>
      <CommentHeader>
        <HeaderLeft>
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

          <UserName>닉네임 없음</UserName>
        </HeaderLeft>
        <HeaderRight>
          <PostDate>{ChangeTimeType("2021-05-03T00:35:23.661")}</PostDate>
        </HeaderRight>
      </CommentHeader>
      <PostContents>{comments}</PostContents>
    </>
  );
};

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;
const UserName = styled.div`
  padding-left: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
`;
const PostContents = styled.div`
  margin-top: 20px;
  min-height: 50px;
  padding-left: 40px;
`;

const HeaderRight = styled.div`
  display: flex;
`;

export default SmallTalkCommentPost;
