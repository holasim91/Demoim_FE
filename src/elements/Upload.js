/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import DefaultPriview from "../images/preview.png";
import { actionCreators as imageActions } from "../redux/modules/image";
import { useDispatch, useSelector } from "react-redux";

const Upload = (props) => {


  //src 경로!
  const { fileRef, changeFile, detalk } = props;
  const preview = useSelector((state) => state.image.preview);
  const dispatch = useDispatch();
  React.useEffect(() => {

    if (preview) {
      dispatch(imageActions.setPreview(null));
    }

  }, []);

  //데톡용
  if (detalk) {
    return (
      <React.Fragment>
        <DetalkBox>
          <Preview className="detalk">
            <PreviewImg src={preview ? preview : DefaultPriview} />
          </Preview>
          <label htmlFor="img-file">썸네일 업로드</label>
          <input type="file" id="img-file" ref={fileRef} onChange={changeFile} accept="image/*" />
          <p>(필수) 권장 사이즈 300*200</p>
        </DetalkBox>
      </React.Fragment>
    )
  }


  return (
    <React.Fragment>
      <FileBox>
        <Preview>
          <PreviewImg src={preview ? preview : DefaultPriview} />
        </Preview>
        <label htmlFor="img-file">썸네일 업로드</label>
        <input type="file" id="img-file" ref={fileRef} onChange={changeFile} accept="image/*" />
      </FileBox>
    </React.Fragment>
  )
}

export default Upload;

const Preview = styled.div`
//width: 170px;
width:85%;
height: 145px;
background-color: rgb(0,0,0,0.05);
margin-bottom: 6px;
margin:0 auto;
border:1px solid #d8d8d8;



@media ${props => props.theme.mobile}{
  width:100%;
  height: 170px;
}
`;

const PreviewImg = styled.img`
  width:100%;
  height: 100%;
  border:none;

`;

const FileBox = styled.div`

  margin-top:12px;
  text-align: right;
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
    padding:4px 15px;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border:1px solid rgba(122, 119, 134, 0.5);
    border-radius: 4px;
    font-size:12px;
    position: relative;
    top:8px;
    right:22px;

    @media ${props => props.theme.mobile}{
      right:0px;

    }

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

const DetalkBox = styled.div`
  margin-top:12px;
  text-align: left;
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
    padding:4px 15px;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border:1px solid rgba(122, 119, 134, 0.5);
    border-radius: 4px;
    font-size:12px;
    position: relative;
    top:10px;
    left:22px;

    @media ${props => props.theme.mobile}{
      
      left:0px;

    }

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

    & p{
      font-size:0.62em;
      color:#ff5353;
      text-align: right;
      position: relative;
      top:10px;
      right:-30px;
      display: inline-block;

      @media ${props => props.theme.mobile}{
        text-align: left;
        left:10px;
      } 
    }
`;
