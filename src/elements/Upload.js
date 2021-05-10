import React from "react";
import styled from "styled-components";
import DefaultPriview from "../images/preview.png";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";

const Upload = (props) => {


  //src 경로!
  const { fileRef, changeFile } = props;
  const preview = useSelector((state) => state.image.preview);
  const dispatch = useDispatch();
  React.useEffect(() => {

    if (preview) {
      dispatch(imageActions.setPreview(null));
    }

  }, []);

  return (
    <React.Fragment>
      <FileBox>
        <Preview>
          <PreviewImg src={preview ? preview : DefaultPriview} />
        </Preview>
        <label htmlFor="img-file">파일 업로드</label>
        <input type="file" id="img-file" ref={fileRef} onChange={changeFile} accept="image/*" />
      </FileBox>
    </React.Fragment>
  )
}

export default Upload;

const Preview = styled.div`
width: 170px;
height: 100px;
background-color: rgb(0,0,0,0.05);
margin-bottom: 6px;

`;

const PreviewImg = styled.img`
  width:100%;
  height: 100%;
  border:none;
`;

const FileBox = styled.div`

  & input[type="file"]{
    position: absolute;
    width:0;
    height:0;
    padding:0;
    overflow:hidden;
    border:0;
  }

  & label{
    display: inline-block;
    padding:6px 17px;
    color:#999;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border:1px solid #ebebeb;
    border-radius: 5px;
    font-size:12px;
    @media (max-width:380px){
      font-size:10px;
      padding:6px 10px;
    }
  }

  & .uploadImg{
    display: inline-block;
    height: 25px;
    font-size:14px;
    padding:0 10px;
    vertical-align: middle;
    background-color: #f5f5f5;
    border:1px solid #ebebeb;
    margin-left: 4px;
    border-radius:3px;
    color:gray;
    outline:none;
    width:210px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
    @media (max-width:380px){
      width:120px;
      font-size:10px;
    }
    }
`;

