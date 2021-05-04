import React, { useState } from 'react'
import styled from "styled-components";

const SmallTalkEditForm = (props) => {
  const {current} = props
  const [contents, setContents] = useState(current);
  const onUpdateTextArea = (e) => {
    setContents(e.target.value);
  };
  return (
    <>
      <UpdateTextArea value={contents} onChange={onUpdateTextArea}/>
      <button>수정</button>
      <button>취소</button>
    </>
  )
}
const UpdateTextArea = styled.textarea`
  margin-top: 20px;
  min-height: 50px;
  padding-left: 60px;
  @media  (max-width: 375px){
    font-size: 12px;
    padding-left: 40px;

  }

`
export default SmallTalkEditForm
