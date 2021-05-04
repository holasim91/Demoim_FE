import React, { useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import SmallTalkComment from "./SmallTalkComment";
import { useSelector } from "react-redux";

const SmallTalkPost = (props) => {
  const { contents, createdAt, user } = props.data;
  const [isOpen, setIsOpen] = useState(false);
  const onClickToggle = () => setIsOpen((state) => !state);
  const ChangeTimeType = (time) => time.split("T")[0];
  const currentUser = useSelector(state => state.user)
  return (
    <>
      <PostBoxWrapper>
        <PostBoxHeader>
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
            {user.nickname ? (
              <UserName>{user.nickname}</UserName>
            ) : (
              <UserName>닉네임 없음</UserName>
            )}
          </HeaderLeft>
          <HeaderRight>
            <PostDate>{ChangeTimeType(createdAt)}</PostDate>
          </HeaderRight>
        </PostBoxHeader>
        <PostContents>{contents}</PostContents>
        <PostBoxBottom>
          <CommentToggle onClick={onClickToggle}>
            {isOpen ? (
              <>
                <AiFillCaretUp style={{ paddingRight: "5px" }} />
                댓글닫기
              </>
            ) : (
              <>
                <AiFillCaretDown style={{ paddingRight: "5px" }} />
                댓글보기
              </>
            )}
          </CommentToggle>

      {    currentUser.isLogin && currentUser.user.nickname === user.nickname?(<EditToggle>
            <div className="editPost">수정하기</div>
            <div className="deletePost">삭제</div>
          </EditToggle>):''}
        </PostBoxBottom>
      </PostBoxWrapper>
      {isOpen ? <SmallTalkComment className="comment" /> : ""}
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
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
  .deletePost {
    cursor: pointer;
    :hover {
      color: #ccc;
    }
  }
`;
const PostBoxBottom = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  @media  (max-width: 375px){
    font-size: 11px;
  }
`;

const PostBoxWrapper = styled.div`
  background-color: ${({ theme }) => theme.main_gray};
  min-height: 80px;
  margin: 20px auto 0 auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 55%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  @media ${props => props.theme.tablet}{
    /* width: 550px; */
    height: 156px;
    max-width: 584px;
  }
  @media  (max-width: 375px){
    height: 125px;
  }
`;

const PostBoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  @media  (max-width: 375px){
    width: 30px;
  height: 30px;
  }

`;
const UserName = styled.div`
  padding-left: 10px;
  @media  (max-width: 375px){
    font-size: 13px;
  }

`;
const PostDate = styled.div`
  color: #7a7786;
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
  @media  (max-width: 375px){
    font-size: 12px;
  }

`;
const PostContents = styled.div`
  margin-top: 20px;
  min-height: 50px;
  padding-left: 60px;
  @media  (max-width: 375px){
    font-size: 12px;
    padding-left: 40px;

  }

`;
export default SmallTalkPost;
