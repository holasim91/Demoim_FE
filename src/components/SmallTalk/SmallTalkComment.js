import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../../elements";
import SmallTalkCommentPost from "./SmallTalkCommentPost";

const SmallTalkComment = (props) => {
  const {comments} = props
  const user = useSelector(state=> state.user)
  return (
    <CommentWrapper>

      {comments.map((c) => (
        <SmallTalkCommentPost data={c} key={c.id} />
      ))}

<CommentWriteArea>
  <WriteTop>
      {user && user.profileImage ? (
              <ProfileImage alt="profile" src={user.profileImage} />
            ) : (
              <ProfileImage
                alt="profile"
                src={
                  "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
              />
            )}
      <CommentTextArea maxLength={300}/>
      </WriteTop>
      <CommentWriteBottom>
            <Button
              padding="7px 5px"
              size="13px"
              width="51px"
              _onClick={()=>{console.log('등록!')}}
            >
              등록
            </Button>
          </CommentWriteBottom>
      </CommentWriteArea>
    </CommentWrapper>
  );
};

const WriteTop = styled.div`
  width: 100%;
  display: flex;
`;

const CommentWriteBottom = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;


const CommentWriteArea = styled.div`
  width: 100%;
align-items: center;
display: flex;
flex-direction:column;
padding-bottom: 10px;
`

const CommentTextArea = styled.textarea`
  border: 1px solid #c9c9d9;
  font-size: 0.875rem;
  width: 90%;
  min-height: 100px;
  resize: none;

`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;

const CommentWrapper = styled.div`
  background-color: #f2f5fa;
  min-height: 80px;
  margin: 0 auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 55%;
`;

export default SmallTalkComment;
