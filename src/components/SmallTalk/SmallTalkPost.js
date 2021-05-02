import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SmallTalkComment from "./SmallTalkComment";
const SmallTalkPost = (props) => {
  const { contents, createdAt, user } = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const onClickToggle = () => setIsOpen((state) => !state);
  const ChangeTimeType = (time) => time.split("T")[0];
  return (
    <>
    <PostBoxWrapper>
      <PostBoxHeader>
        {user.profileImage ?<ProfileImage alt="profile" src={user.profileImage} />:<ProfileImage alt="profile" src={'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'} />}
        <TextBlock>
          {user.nickname ?<UserName>{user.nickname}</UserName>: <UserName>닉네임 없음</UserName>}
          <PostDate>{ChangeTimeType(createdAt)}</PostDate>
        </TextBlock>
      </PostBoxHeader>
      <PostContents>{contents}</PostContents>
      <PostBoxBottom>
        <CommentToggle onClick={onClickToggle}>
          {isOpen ? (
            <>
              <AiFillCaretDown style={{paddingRight: '5px'}} />
              댓글보기
            </>
          ) : (
            <>
              <AiFillCaretUp style={{paddingRight: '5px'}} />
              댓글닫기
            </>
          )}
        </CommentToggle>
        <EditToggle>
          <div className="editPost">수정하기</div>
          <div className="deletePost">삭제</div>
        </EditToggle>
      </PostBoxBottom>
      
    </PostBoxWrapper>
    {isOpen? <SmallTalkComment />:''}
    </>
   
  );
};

const CommentToggle = styled.div`
  cursor: pointer;
  :hover {
    color: #ccc;
  }
`;
const EditToggle = styled.div`
  display: flex;
  .editPost {
    padding-right: 40px;
    cursor:pointer;
    :hover {
      color: #ccc;
    }
  }
  .deletePost{
    cursor:pointer;
    :hover {
      color: #ccc;
    }
  }
`;
const PostBoxBottom = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const PostBoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.main_gray};
  min-height: 80px;
  margin: 20px auto;
  padding: 10px  40px;
  width: 55%;
`;

const PostBoxHeader = styled.div`
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
const PostContents = styled.div`
  margin-top: 20px;
  min-height: 50px;
`;
export default SmallTalkPost;
