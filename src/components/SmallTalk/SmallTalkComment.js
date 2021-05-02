import React from "react";
import styled from "styled-components";

const SmallTalkComment = () => {
  return (
    <CommentWrapper>
    CommentHi
    </CommentWrapper>
  )
};

const CommentWrapper = styled.div`
  background-color: ${({ theme }) => theme.main_gray};
  min-height: 90px;
  margin: 20px auto;
  padding: 40px 40px 10px 40px;
  width: 55%;

`

export default SmallTalkComment;
