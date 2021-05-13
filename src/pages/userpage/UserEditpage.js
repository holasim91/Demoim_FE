import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Text, Grid, Container } from "../../elements";
import { FaCamera } from "react-icons/fa";
import { actionCreators } from "../../redux/modules/user";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { history } from "../../redux/configStore";
import DefaultProfile from "../../images/def_profile.svg";

const UserEditpage = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const preview = useSelector((state) => state.image.preview);

  React.useEffect(() => {
    if (!userInfo) {
      history.goBack();
      return
    }
    //미리보기 초기화
    if (preview) {
      dispatch(imageActions.setPreview(null));
    }

  }, []);

  //const [fileName, setFileName] = React.useState(null);
  const [nickname, setNickName] = React.useState(userInfo ? userInfo.nickname : '');
  const [position, setPosition] = React.useState(userInfo ? userInfo.position : '');
  const [description, setDesc] = React.useState(userInfo ? userInfo.description : '');


  const fileRef = useRef();
  const selectFile = (e) => {
    //console.log("Ref", fileRef.current.files[0]);
    //미리보기
    const reader = new FileReader();
    const img = fileRef.current.files[0];

    reader.readAsDataURL(img);
    reader.onloadend = () => {
      //console.log(reader.result);
      dispatch(imageActions.setPreview(reader.result));
    };
  };


  //프로필수정하기 
  const profileEdit = () => {

    //닉네임
    if (nickname === "") {
      alert('닉네임을 입력해주세요!')
      return false;
    }

    if (position === "선택하기" || position === "") {
      alert('포지션을 선택해주세요!')
      return false
    }

    if (description === "") {
      alert('자기소개를 입력해주세요!')
      return false;
    }

    const file = fileRef.current.files[0];
    const userEditInfo = `{nickname:${nickname}, position:${position}, description:${description}}`

    //formData
    let formData = new FormData();
    formData.append('file', file);
    formData.append('userEditInfo', userEditInfo);
    //console.log(formData.get('file'))

    dispatch(actionCreators.editProfileAPI(formData));
  };

  //희망포지션 설렉트박스
  const handleOnChange = (e) => {
    const selectedPosition = e.target.value;
    setPosition(selectedPosition)
  }

  return (
    <React.Fragment>
      <Container>
        <EditContainer>
          <Title>
            <span>{userInfo?.nickname}</span>님의 로그
          </Title>
          <EditContents>
            <ProfileImgBox>
              <ProfileImg
                src={preview ? preview : (userInfo?.profileImage ? userInfo.profileImage : DefaultProfile)} />

              <ImgEditBtn>
                <label htmlFor="img-file"><Camera /></label>
                <input type="file" id="img-file" ref={fileRef} onChange={selectFile} accept="image/*" />
                <input type="text" className="upLoadImg" readOnly />
              </ImgEditBtn>
            </ProfileImgBox>
            {/* <button onClick={uploadImg}>이미지업로드</button> */}
            <EditForm>
              <EditTable>
                <tbody>
                  <tr>
                    <td>닉네임</td>
                    <td>
                      <Input placeholder={nickname}
                        readOnly
                        value={nickname}
                        onChange={(e) => {
                          setNickName(e.target.value)
                        }} /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><span>닉네임은 변경이 불가합니다.</span></td>
                  </tr>
                  <tr>
                    <td>희망포지션</td>
                    <td>
                      <Select value={position} onChange={(e) => { handleOnChange(e) }}>
                        <option value="프론트엔드">프론트엔드</option>
                        <option value="백엔드">백엔드</option>
                        <option value="디자이너">디자이너</option>
                        <option value="기획자">기획자</option>
                      </Select>
                    </td>
                  </tr>
                  <tr>
                    <td>자기소개</td>
                    <td><TextArea maxLength="100" placeholder={description}
                      value={description}
                      onChange={(e) => {
                        setDesc(e.target.value)
                      }} /></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><span>100자이내</span></td>
                  </tr>
                </tbody>
              </EditTable>
            </EditForm>
            <EditBtn onClick={profileEdit}>수정하기</EditBtn>
          </EditContents>
        </EditContainer>
      </Container>

    </React.Fragment>
  );
};


UserEditpage.defaultProps = {
  username: "g0rden@never.com",
  nickname: "가나다라마바",
  position: "프론트트트",
  desc: "안녕하슈",
  profileImage: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
}

const EditContainer = styled.div`
  width: 500px;
  margin:50px auto;
  text-align: center;
  box-sizing:border-box;
  @media ${props => props.theme.mobile}{
    width:100%;
  }
`;

const Title = styled.div`
  text-align:left;
  margin:50px 0 20px 0;
  color: black;
  font-weight:500;
  span{
    color:#683fee;
  }
  @media ${props => props.theme.mobile}{
      text-align:center; 
    }
`;

const EditContents = styled.div`
  margin-top:10px;
  padding:60px 0;
  border:1px solid #e1e0e6;

`;
const ProfileImgBox = styled.div`
  position:relative;
  width:100px;
  margin:10px auto;
  /* @media ${props => props.theme.tablet}{
    width:200px;
        }
  @media ${props => props.theme.mobile}{
    width:100px;
    } */
  
`;

const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 100px;
    
    /* @media ${props => props.theme.mobile}{
      width: 40px;
      height: 40px;
      padding:5px;
    } */
`;

//inputfile
const ImgEditBtn = styled.div`

    & input[type="file"]{
      position: absolute;
      width:0;
      height:0;
      padding:0;
      overflow:hidden;
      border:0;
    }
    & .upLoadImg {
      display:none;
    }
    & label{
    display:inline-block;
    
    }
    position:absolute;
    top: 70px;
    left: 70px;
    width: 25px;
    height: 25px;
    border-radius: 40px;
    background-color:#ffffff;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.17);
    cursor:pointer;
    @media ${props => props.theme.mobile}{
      position:absolute;
      top: 70px;
      left: 70px;
      width: 25px;
      height: 25px;
      border-radius: 40px;
      background-color:#ffffff;
      box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.17);
      cursor:pointer;
    }
`;

const Camera = styled(FaCamera)`
    width: 25px;
    height: 25px;
    box-sizing:border-box; 
    padding:4px;
    color:#999cda;
`;


const EditForm = styled.div`
  width:100%;
  box-sizing:border-box;
  padding-bottom:20px;
`;

const EditTable = styled.table`
  margin:20px auto;
  /* border:1px solid red; */
  &tr{
    text-align:left;
    font-size:16px;
    font-weight:400;
    border:1px solid blue;
  }
  & td{
    position: relative;
    /* border:1px solid green; */
    vertical-align: middle;
    @media ${props => props.theme.tablet}{
        font-size: 14px;
        }
    @media ${props => props.theme.mobile}{
        font-size: 4px;
        }
    }
    & td:nth-child(1){
    box-sizing: border-box;
    width:80px;
    /* padding: 15px 30px 0px 18px; */
    text-align:left;
    @media ${props => props.theme.mobile}{
      font-size: 14px;
      padding:15px 10px 0px 0px;
      }
    }
    td:nth-child(2){
      box-sizing: border-box;
      height:35px;
    }
    tr:nth-child(2){
      td{
      height:auto;
      font-size:10px;
      text-align:left;
      color:#ff5353;
      padding-bottom:18px;
      }
    }
    td:last-child{
    text-align:right;
    font-size:4px;
    color:#7a7786;
  }
`;

const Input = styled.input`
  width:250px;
  border:none;
  padding:4px 2px;
  background-color: #f1f1f1;
  font-size:12px;
  @media ${props => props.theme.mobile}{
    width:150px;
  }
  &:focus{
        outline:none;
    }
  &::placeholder{
    padding-left:4px;
    font-size:12px;
    font-weight:500;
  }
`;

const Select = styled.select`
    width:100%;
    border:none;
    padding:4px 2px;
    background-color: #f1f1f1;
    font-size:12px;
    &:focus{
        outline:none;
    }
    &option{
        
    }
    @media ${props => props.theme.mobile}{
      width:150px; 
    }
`;

const TextArea = styled.textarea`
    resize:none;
    width:250px;
    border:none;
    padding:2px;
    margin-top:8px;
    background-color: #f1f1f1;
    font-size:12px;
    @media ${props => props.theme.mobile}{
      width:150px; 
    }
    &:focus{
        outline:none;
    }
    &::placeholder{
      padding:4px;
    }

`;
const EditBtn = styled.div`
    width: 80px;
    margin: 10px auto;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #e1e0e6;
    cursor: pointer;
    &:hover{
      color:#ffffff;
      background-color:#999cda;
      border:1px solid #e1e0e6;
    }
`;



export default UserEditpage;