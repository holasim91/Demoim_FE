import React, { useState } from "react";
import styled from "styled-components";
import { Editor } from "../../components";
import { Container } from "../../elements";

const ExhibitionWrite = () => {
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onEditorChange = (value) => setContents(value);
  return (
    <>
      <Container>
        <WriteWrapper>
        <WriteTitle>프로젝트 자랑글 작성</WriteTitle>
        <ExhibitionTitle value={title} onChange={onChangeTitle} placeholder='제목을 입력해주세요'/>
        <Editor value={contents} onChange={onEditorChange}/>
        </WriteWrapper>
        </Container>
    </>
  );
};


const WriteWrapper = styled.div`
width: 80%;
margin: 0 auto;
`
const WriteTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  margin-top: 100px;
`

const ExhibitionTitle = styled.input`
  background-color: #f2f5fa;
  margin: 70px 0 45px 0;
  font-size: 22px;
  padding: 5px 0 5px 15px;
  border: none;
  width: 100%;
  box-sizing: border-box;
`
export default ExhibitionWrite;
