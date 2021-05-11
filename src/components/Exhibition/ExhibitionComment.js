import React from "react";
import styled from "styled-components";

const ExhibitionComment = (props) => {
  // console.log(props.comment)
  const { commentId, comments, user, createdAt } = props.comment;
  const ChangeTimeType = (time) => time?.split("T")[0];

  return (
    <CommentWrapper>
      <CommentHeader>
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
        <TextBlock>
          <UserName>{user.nickname}</UserName>
          <PostDate>{ChangeTimeType(createdAt)}</PostDate>
        </TextBlock>
      </CommentHeader>
      <CommentContents>{comments}</CommentContents>
      {/* <PostBoxBottom>
            <EditToggle>
              <div className="editPost" onClick={onClickCommentUpdate}>
                수정하기
              </div>
              <div className="deletePost" onClick={onClickDeleteComment}>
                삭제
              </div>
            </EditToggle>
        </PostBoxBottom> */}

    </CommentWrapper>
  );
};
// 
const CommentWrapper = styled.div`
  background-color: #F1F1F1;
  min-height: 80px;
  margin: 75px auto 100px auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 80%;
`;
const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
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
