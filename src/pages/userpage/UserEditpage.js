/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../elements";
import { FaCamera } from "react-icons/fa";
import { actionCreators } from "../../redux/modules/user";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { history } from "../../redux/configStore";
import DefaultProfile from "../../images/def_profile.svg";
import axios from "axios";
import { nicknameCheck } from "../../shared/Common";
import { config } from "../../shared/config";
import { SuccessAlert, WarningAlert, ErrorAlert } from "../../shared/Alerts";


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
  const selectFile = () => {
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

  //checkNicknameAPI
  const checkNicknameAPI = (nickname) => {

    if (nickname === '') {
      WarningAlert("닉네임을 입력해주세요~")
      return false;
    }

    if (!nicknameCheck(nickname)) {
      WarningAlert("🤪닉네임은 한글,영문,숫자 조합 2~6자리 가능")
      return false;
    }

    const API = `${config.api}/api/signup/nicknamedupchk?nickname=${nickname}`;
    axios.post(API,
      {
        nickname: nickname,
      })
      .then((res) => {
        if (res.data.msg === "false") {
          WarningAlert("이미 등록된 닉네임입니다!")
        } else {
          WarningAlert("이미 등록된 닉네임입니다!")
        }
      })
      .catch((err) => {
        ErrorAlert( `${err.response.data.msg}`)
      })
  }


  //프로필수정하기 
  const profileEdit = () => {

    //닉네임
    if (nickname === "") {
      WarningAlert("닉네임을 입력해주세요!")
      return false;
    }

    if (position === "선택하기" || position === "") {
      WarningAlert("포지션을 선택해주세요")
      return false
    }

    if (description === "" ) {
      WarningAlert("자기소개를 입력해주세요!")
      return false;
    }

    if( description.length > 100){
      WarningAlert("자기소개는 100자 이내로 작성부탁드립니다. 😭아직 특수문자는 입력이 어려워요")
      return false;
    }

    const file = fileRef.current.files[0];
    const userEditInfo = `{nickname:${nickname}, position:${position}, description:${description}}`

    //formData
    let formData = new FormData();
    formData.append("file", file);
    formData.append("userEditInfo", userEditInfo);
    console.log(formData.get("userEditInfo"))
    console.log(formData.keys())
    dispatch(actionCreators.editProfileAPI(formData));
  };



//닉네임
const handleNickName = (e) => {
  setNickName(e.target.value)
}

  //희망포지션 설렉트박스
  const handleOnChange = (e) => {
    const selectedPosition = e.target.value;
    setPosition(selectedPosition)
  }

//포지션
const handleDesc = (e) => {
  const descc = e.target.value;
  setDesc(descc)
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
            <EditForm>
              <EditTable>
                <tbody>
                  <tr>
                    <td>닉네임</td>
                    <td>
                      <Input placeholder={nickname}
                        maxLength="6"
                        value={nickname}
                        onChange={handleNickName}/>
                        <Button margin="0 16px 0 0" padding="12px"
                          onClick={() => {
                            checkNicknameAPI(nickname)
                        }}>중복확인</Button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><span>·한글,영문,숫자 조합 2~6자리 가능</span></td>
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
                    <td><TextArea 
                      rows={5}
                      placeholder={description}
                      value={description}
                      onChange={handleDesc}/></td>
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
        font-size: 10px;
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
    tr:nth-child(1){
      td:nth-child(2){
        input{
          width:180px;
          margin-right:14px;
          @media ${props => props.theme.mobile}{
          font-size: 10px;
          width:80px;
          margin-right:10px;
          }
        }
      }
    }
    tr:nth-child(2){
      td{
      height:auto;
      font-size:10px;
      text-align:left;
      color:#683fee;
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

const Button = styled.button`
    margin: 0 auto;
    padding: 4px 8px;
    color: #ffffff;
    border:none;
    border-radius: 8.5px;
    background-color:#999cda;
    font-size: 9px;
    &:hover{
        cursor: pointer;
    }
    @media ${props => props.theme.mobile}{
        font-size: 12px;
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
    white-space:pre-line;
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