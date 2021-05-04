import React from "react";
import styled from "styled-components";
import SmallTalkCommentPost from "./SmallTalkCommentPost";

const SmallTalkComment = () => {
const dummyComment = [{
  "id": 4,
  "comments": "스몰토크 댓글",
  "user": {
    "userid": 1,
    "username": "wjdtjrwls455@naver.com",
    "nickname": "정석진",
    "profileImage": null
  },
  "createdAt": "2021-05-03T00:04:37.196",
  "modifiedAt": "2021-05-03T00:04:37.196"
},
{
  "id": 5,
  "comments": "스몰토크 댓글",
  "user": {
    "userid": 1,
    "username": "wjdtjrwls455@naver.com",
    "nickname": "정석진",
    "profileImage": null
  },
  "createdAt": "2021-05-03T00:04:37.196",
  "modifiedAt": "2021-05-03T00:04:37.196"
}]
  return (
    <CommentWrapper>
      {dummyComment.map(c => <SmallTalkCommentPost data={c} key={c.id}/>)}
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  background-color: #f2f5fa;
  min-height: 80px;
  margin: 0 auto;
  padding: 17px 28px 0 24px;
  border-radius: 10px;
  width: 55%;
`;

export default SmallTalkComment;
