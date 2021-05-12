import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Editor } from "../../components";
import { Container, Upload } from "../../elements";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import Swal from "sweetalert2";
import { history } from "../../redux/configStore";

const ExhibitionWrite = (props) => {
  const dispatch = useDispatch();
  const post_id = Number(props.match.params.exhibitionId)
  const edited_post = useSelector((state) => state.exhibition.exhibitionPostDetail)
  console.log(edited_post)
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
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const addExhibition = () => {
    if (title === '') {

      Swal.fire({
        icon: "warning",
        text: "제목을 입력해주세요.",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    if (contents === '') {
      Swal.fire({
        icon: "warning",
        text: "내용을 입력해주세요.",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    const reqBody = `{'title':'${title}', 'contents':'${contents}'}`;
    let thumbnailFile = thumbnailRef.current.files[0];
    if (thumbnailFile === undefined) {
      Swal.fire({
        icon: "warning",
        text: "썸네일을 등록해 주세요.",
        confirmButtonColor: "#999cda",
      })
      return false
    }
    let formData = new FormData();
    formData.append("file", thumbnailFile);
    formData.append("requestBody", reqBody);
    dispatch(exhibitionActions.addExihibitionAPI(formData));
  };

  const editExhibition = () => {
    const reqBody = `{'title':'${title}', 'contents':'${contents}'}`;
    let thumbnailFile = thumbnailRef ? thumbnailRef.current.files[0] : null;
    let formData = new FormData();
    formData.append("file", thumbnailFile);
    formData.append("requestBody", reqBody);

    dispatch(exhibitionActions.editExihibitionAPI(formData, edited_post.id))
  }

  return (
    <>
      <Container>
        <WriteWrapper>
          <WriteTitle>프로젝트 자랑글 작성</WriteTitle>
          <ExhibitionTitle
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력해주세요"
          />
          <UploadWrapper>
            <Upload fileRef={thumbnailRef} changeFile={changeFile} />
          </UploadWrapper>
          <Editor value={contents} onChange={onEditorChange} />

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
  width: 400px;
  margin-bottom: 50px;
  margin-left: -30px;
  @media ${(props) => props.theme.mobile} {
    width: 75%;
    height: 170px;
    margin: 0 auto 50px auto;
  }
`;

const WriteWrapper = styled.div`
  width: 80%;
  margin: 0 auto 300px auto;
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
  margin: 70px 0 45px 0;
  font-size: 22px;
  padding: 5px 0 5px 15px;
  border: none;
  width: 100%;
  box-sizing: border-box;
`;
export default ExhibitionWrite;
