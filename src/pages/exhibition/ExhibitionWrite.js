/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Editor } from "../../components";
import { Container, Upload } from "../../elements";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import Swal from "sweetalert2";
import { history } from "../../redux/configStore";
import { useMediaQuery } from "react-responsive";

const ExhibitionWrite = (props) => {
  const dispatch = useDispatch();
  const post_id = Number(props.match.params.exhibitionId)
  const edited_post = useSelector((state) => state.exhibition.exhibitionPostDetail)
  const {user} = useSelector((state) => state.user);

  useEffect(() => {
    if (!post_id) {
      return
    }
    if (post_id !== edited_post.exhibitionId) {

      Swal.fire({
        text: '새로고침시 프로젝트 수정을 다시 시도해주세요!',
        icon: 'warning',
        confirmButtonColor: "#999cda",
      });
      history.push(`/exhibition/detail/${post_id}`);
      return false
    }
    if (post_id) {
      dispatch(imageActions.setPreview(edited_post.thumbnail));
    }

  }, []);

  const [title, setTitle] = useState(post_id ? edited_post.title : "");
  const [contents, setContents] = useState(post_id ? edited_post.contents : "");

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onEditorChange = (value) => setContents(value);
  const thumbnailRef = useRef();

  const changeFile = (e) => {
    const reader = new FileReader();
    const img = thumbnailRef.current.files[0];
    if (img) {
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        dispatch(imageActions.setPreview(reader.result));
      }
    }
    
  };

if(!user){
  Swal.fire({
    icon: "warning",
    text: "로그인을 해주세요!.",
    confirmButtonColor: "#999cda",
  })
  history.push("/exhibition");
}

  // 자랑하기 등록
  const addExhibition = () => {
    if (title === '') {
      Swal.fire({
        icon: "warning",
        text: "제목을 입력해주세요.",
        confirmButtonColor: "#999cda",
      })
      return false;
    } // 제목 작성을 하지 않으면 Alert

    if (contents === '') {
      Swal.fire({
        icon: "warning",
        text: "내용을 입력해주세요.",
        confirmButtonColor: "#999cda",
      })
      return false;
    } // 본문 작성을 하지 않으면 Alert

    const reqBody = `{'title':'${title}', 'contents':'${contents}'}`;
    let thumbnailFile = thumbnailRef.current.files[0];
    if (thumbnailFile === undefined) {
      Swal.fire({
        icon: "warning",
        text: "썸네일을 등록해 주세요.",
        confirmButtonColor: "#999cda",
      })
      return false
    } // 썸네일 등록을 하지 않으면 Alert

    let formData = new FormData();
    formData.append("file", thumbnailFile);
    formData.append("requestBody", reqBody); //폼데이터로 엮어서
    dispatch(exhibitionActions.addExihibitionAPI(formData)); // 서버로 보내기
  };

  //자랑하기 수정시
  const editExhibition = () => {
    const reqBody = `{'title':'${title}', 'contents':'${contents}'}`;
    let thumbnailFile = thumbnailRef ? thumbnailRef.current.files[0] : null;
    let formData = new FormData();
    formData.append("file", thumbnailFile);
    formData.append("requestBody", reqBody);

    dispatch(exhibitionActions.editExihibitionAPI(formData, edited_post.exhibitionId))
  }

  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });


  return (
    <>
      <Container>
        <WriteWrapper>
          <WriteTitle>프로젝트 자랑글 작성</WriteTitle>
          <Line />
          <ExhibitionTitle
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력해주세요"
          />

          <UploadWrapper>
            <Upload fileRef={thumbnailRef} changeFile={changeFile} detalk />
          </UploadWrapper>

          {isMobile ? (
            <Editor value={contents} onChange={onEditorChange} height="450px" innerHeight="400px" />
          ) : (
            <Editor value={contents} onChange={onEditorChange} />
          )}
          <WriteButtonWrapper>
            {post_id ? <WriteBtn onClick={editExhibition}>수정하기</WriteBtn> : <WriteBtn onClick={addExhibition}>작성완료</WriteBtn>}
          </WriteButtonWrapper>
        </WriteWrapper>
      </Container>
    </>
  );
};
const WriteButtonWrapper = styled.div`
  text-align: center;
  margin-top: 62px;
`;
const WriteBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid #979797;
  border-radius: 9.5px;
  font-weight: 500;
  padding: 5px 12px;
  color: #595858;
  font-size: 1em;
  cursor: pointer;
  font-size: 15px;
  outline: none;

  @media ${(props) => props.theme.mobile} {
    font-size: 0.9em;
  }

  @media (max-width: 380px) {
    font-size: 0.7em;
  }
`;
const UploadWrapper = styled.div`
  width: 300px;
  margin-bottom: 50px;
  margin-left: -21px;
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: 170px;
    margin: 0 auto 50px auto;
  }
`;

const WriteWrapper = styled.div`

  margin: 0 auto 150px auto;
`;
const WriteTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  margin-top: 100px;
`;

const ExhibitionTitle = styled.input`
  background-color: #f2f5fa;
  margin: 70px 0 25px 0;
  font-size: 22px;
  padding: 5px 0 5px 15px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  :focus{
    outline:none;
  }
`;

const Line = styled.div`
  width:270px;
  margin:10px auto 0px auto;
  height: 1px;
  background-color:#d8d8d8;
`;

export default ExhibitionWrite;
