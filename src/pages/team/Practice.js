import React from 'react';
import styled from "styled-components";
import { Container, Button } from "../../elements";
import { Editor } from "../../components";
import axios from "axios";

const Practice = () => {

  const [contents, setContents] = React.useState('');
  const onEditorChange = (value) => setContents(value);

  const write = () => {
    const API = 'http://54.180.142.197/api/smalltalk'
    axios({
      method: "POST",
      headers: {
        'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3amR0anJ3bHM0NTVAbmF2ZXIuY29tIiwiaWQiOjEsImV4cCI6MTYyMDE1MDIwNywidXNlcm5hbWUiOiJ3amR0anJ3bHM0NTVAbmF2ZXIuY29tIn0.ZCnHf09QKUcvxGbkEQZATYYJ-mo77CJKgAqRwkJDDClISskQ03SgKDYMduA04z4Aww70y44e-FaSLulKmWPKDw',
      },
      url: API,
      data: {
        contents: contents,
      },
    }).then((res) => {
      console.log(res);
    })

  }

  return (
    <Container>
      <Editor value={contents} onChange={onEditorChange} height="500px" innerHeight="450px" />
      <Button _onClick={write}>글쓰기</Button>

      <div dangerouslySetInnerHTML={{ __html: '' }}></div>
    </Container>
  )
}

export default Practice
