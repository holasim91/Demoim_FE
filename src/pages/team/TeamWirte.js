import React from "react";
import styled from "styled-components";
import { Container, Input, CheckBox } from "../../elements";
import { useDispatch } from "react-redux";
import { actionCreators as teamActions } from "../../redux/modules/team";
import { Editor, TeamDate } from "../../components";
import { useMediaQuery } from "react-responsive";
import Arrow from "../../images/arrow.jpg";
import Swal from "sweetalert2";

const TeamWirte = (props) => {

  const dispatch = useDispatch();
  const thumbnailRef = React.useRef();

  //필요 데이터
  const [title, setTitle] = React.useState("");
  //초기데이터가 있을시엔 contents에서 세팅.
  const [contents, setContents] = React.useState("");
  const [location, setLocation] = React.useState("온라인");
  const [stack, setStack] = React.useState("");

  const [front, setFront] = React.useState({ member: 0, check: false });
  const [back, setBack] = React.useState({ member: 0, check: false });
  const [design, setDesign] = React.useState({ member: 0, check: false });
  const [plan, setPlan] = React.useState({ member: 0, check: false });
  const [recruit, setRecruit] = React.useState({
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 1)),
  });

  const [project, setProject] = React.useState({
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 31)),
  });

  //파일 이름 미리보기 용..
  const [fileName, setFileName] = React.useState("파일 선택하기");
  const changeFile = (e) => setFileName(e.target.value);

  const setRecruitEnd = (date) => {
    setRecruit({
      ...recruit,
      end: date,
    });
  }

  const setProjectStart = (date) => {
    setProject({
      ...project,
      start: date,
    })
  }

  const setProjectEnd = (date) => {
    setProject({
      ...project,
      end: date
    })

    if (recruit.end > date) {
      setRecruit({
        ...recruit,
        end: date
      })
    }

  }
  //변경 함수
  const onEditorChange = (value) => setContents(value);
  const titleChange = (value) => setTitle(value);

  const changeFront = (e, target) => {

    const { checked, value } = e.target;
    if (target === "input") {
      setFront({
        ...front,
        member: value,
      });
    }
    if (target === "check") {
      let _member = checked ? front.member : 0;
      setFront({
        check: checked,
        member: _member,
      });
    }
  }

  const changeBack = (e, target) => {

    const { checked, value } = e.target;
    if (target === "input") {
      setBack({
        ...back,
        member: value,
      });
    }
    if (target === "check") {
      let _member = checked ? back.member : 0;

      setBack({
        check: checked,
        member: _member,
      })
    }
  }

  const changeDesign = (e, target) => {

    const { checked, value } = e.target;
    if (target === "input") {
      setDesign({
        ...design,
        member: value,
      });
    }
    if (target === "check") {
      let _member = checked ? design.member : 0;
      setDesign({
        check: checked,
        member: _member,
      })
    }
  }

  const changePlanner = (e, target) => {
    const { checked, value } = e.target;

    if (target === "input") {
      setPlan({
        ...plan,
        member: value,
      });
    }
    if (target === "check") {
      let _member = checked ? plan.member : 0;
      setPlan({
        check: checked,
        member: _member,
      })
    }
  }


  const randomThumbnail = () => {
    const images = [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/paper-3213924_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/09/25/09/36/team-4503157_1280.jpg"
    ];

    const idx = Math.floor(Math.random() * images.length);
    return images[idx];
  }

  const addTeam = () => {

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

    if (stack === '') {
      Swal.fire({
        icon: "warning",
        text: "선호언어를 입력해주세요.",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    if (front.member === 0 && back.member === 0 && design.member === 0 && plan.member === 0) {
      Swal.fire({
        icon: "warning",
        text: "모집 인원을 체크해주세요.",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    let allMember = Number(front.member) + Number(back.member) + Number(design.member) + Number(plan.member);
    if (allMember >= 10) {
      Swal.fire({
        icon: "warning",
        text: "모집인원은 리더 포함 10명을 넘길 수 없습니다.",
        confirmButtonColor: "#999cda",
      })
      return false;
    }

    let thumbnailFile = thumbnailRef.current.files[0];
    if (thumbnailFile === null || thumbnailFile === undefined) {
      thumbnailFile = randomThumbnail();
    }

    const requestBody = `{ 'title':'${title}', 'recruit':'${recruit.end.getTime()}',
    'begin':'${project.start.getTime()}', 'end':'${project.end.getTime()}', 'location':'${location}',
    'front':'${front.member}', 'back':'${back.member}', 'designer':'${design.member}', 'planner':'${plan.member}',
    'stack':'${stack}', 'contents':'${contents}'}`;

    let formData = new FormData();
    formData.append("file", thumbnailFile);
    formData.append("requestBody", requestBody);

    dispatch(teamActions.addTeamMakingAPI(formData));
  }


  //모바일버전
  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });


  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <p>📝 팀 만들기</p>
          <Line />
        </TitleBox>
        <ChoiceBox>
          <ChoiceTable>
            <tbody>
              <tr>
                <td>모집기간</td>
                <td><TeamDate startDate={recruit.start} endDate={recruit.end} setEndDate={setRecruitEnd} recruit recruitMaxDate={project.end} />
                </td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td><TeamDate startDate={project.start} endDate={project.end} setStartDate={setProjectStart} setEndDate={setProjectEnd} /></td>
              </tr>
              <tr>
                <td>모집인원</td>
                <td>
                  <div style={{ marginBottom: "5px" }}>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="프론트엔드" id="1" checked={front.check} _onChange={(e) => changeFront(e, "check")} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={front.member} onChange={(e) => changeFront(e, "input")} disabled={!front.check} />
                    </PositionBox>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="백엔드" id="2" checked={back.check} _onChange={(e) => changeBack(e, "check")} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={back.member} onChange={(e) => changeBack(e, "input")} disabled={!back.check} />
                    </PositionBox>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="디자이너" id="3" checked={design.check} _onChange={(e) => changeDesign(e, "check")} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={design.member} onChange={(e) => changeDesign(e, "input")} disabled={!design.check} />
                    </PositionBox>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="기획자" id="4" checked={plan.check} _onChange={(e) => changePlanner(e, "check")} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={plan.member} onChange={(e) => changePlanner(e, "input")} disabled={!plan.check} />
                    </PositionBox>
                  </div>
                </td>
              </tr>
              <tr>
                <td>선호언어</td>
                <td><LanguageInput type='text' value={stack} onChange={(e) => setStack(e.target.value)} placeholder="react/node.js" /></td>
              </tr>
              <tr>
                <td>장소</td>
                <td>
                  <SelectBox value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="온라인">온라인</option>
                    <option value="오프라인">오프라인</option>
                  </SelectBox>
                </td>
              </tr>
            </tbody>
          </ChoiceTable>
        </ChoiceBox>
        <ConentesBox>
          <Input placeholder="제목을 입력해주세요." padding="10px" _onChange={(e) => titleChange(e.target.value)} value={title} bg="#f2f5fa" margin="0px 0px 10px 0px" />
          {isMobile ? (<React.Fragment>
            <Editor value={contents} onChange={onEditorChange} height="450px" innerHeight="400px" />
          </React.Fragment>) : (<React.Fragment>
            <Editor value={contents} onChange={onEditorChange} />
          </React.Fragment>)}

          <UploadBox>
            <FileBox>
              <label htmlFor="img-file">썸네일 업로드</label>
              <input type="file" id="img-file" ref={thumbnailRef} onChange={changeFile} accept="image/*" />
              <input type="text" className="uploadImg" value={fileName} readOnly />
            </FileBox>
          </UploadBox>
        </ConentesBox>
        <BtnBox>
          <WriteBtn onClick={addTeam}>
            작성완료
          </WriteBtn>
        </BtnBox>
      </Wrapper>
    </Container>
  )
}

export default TeamWirte;

const Wrapper = styled.div`
  margin:50px 0px 50px 0px;
  padding:0px 20px;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  width:100%;
  text-align: center;
  font-size:1.37em;
  margin-bottom: 15px;
`;

const ChoiceBox = styled.div`
  width:315px;  
  padding:20px;
  box-sizing: border-box;
  margin:0px auto 25px auto;

  @media ${props => props.theme.mobile}{
    margin:0px auto 30px auto;
  }

  @media (max-width:380px){
    padding:0px;
    width:auto;
    margin:0px auto 15px auto;
  }
`;

const ConentesBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  width:100%;
`;

const BtnBox = styled.div`
  width:100%;
  text-align: center;
  margin:40px 0px 70px 0px;
  @media ${props => props.theme.mobile}{
    margin:40px 0px 30px 0px;
  }
`;

const WriteBtn = styled.button`
  background-color: #ffffff;
  border: 2px solid #979797;
  border-radius: 11px;
  font-weight: 600;
  padding:5px 12px;
  color:#595858;
  font-size:1em;
  cursor: pointer;
  outline: none;

  @media ${props => props.theme.mobile}{
    font-size:0.9em;
  }

  @media (max-width:380px){
    font-size:0.7em;
  }
`;

const UploadBox = styled.div`
  @media (max-width:615px){
    width:100%;
    margin-top:30px;
  }
`;

const ChoiceTable = styled.table`
  width:100%;
  height: 100%;
  & tr,td{
    vertical-align: middle;
  }
  & td:nth-child(1){
    width:40%;
  }
  & tr:nth-child(1){
    height: 50px;
  }
  & tr:last-child{
    height: 50px;
  }

@media ${props => props.theme.mobile}{
   & td:nth-child(1){
    width:35%;
    }
    font-size:0.9em;
  }

  @media (max-width:380px){
    &td:nth-child(1){
      width:50%;
    }
    & tr:nth-child(1){
      height: auto;
    }
    font-size:0.8em;
  }
`;

const SelectBox = styled.select`
  padding:7px 6px;
  outline: none;
  border:none;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width:140px;
  background: url(${Arrow}) no-repeat 98% 50%;
  background-size:22px;
  background-color: ${props => props.theme.main_gray};
  width:98%;
  font-size:12px;
  select::-ms-expand {
    display: none;
  }

    @media (max-width:380px){
      font-size:11px;
  }
`;

const LanguageInput = styled.input`
  padding:4px 5px;
  box-sizing: border-box;
  outline: none;
  width:170px;
  border:1px solid lightgray;
  border-radius: 3px;

  &::placeholder{
    color:#C0C0C0;
  }
`;

const PositionBox = styled.div`
  display: flex;
  
`;

const NumberInput = styled.input`
  outline: none;
  height: 15px;
  position: relative;
  top:7px;
  width:45px;
  border:1px solid lightgray;
  padding:2px 5px;
  border-radius: 4px;
`;

const PositionSelect = styled.div`
  width:100px;
`;

const Info = styled.p`
  font-size:0.8em;
  position: relative;
  top:4px;
  left:2px;
  color:#BDBDBD;
`;

const Line = styled.div`
  width:380px;
  height: 1px;
  background-color: #d8d8d8;
  margin:20px auto 0px auto;

  @media ${props => props.theme.mobile}{
    width:80%;
  }
  @media (max-width:380px){
    width:100%;
    }
  `;

//파일
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
    font-size:14px;
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

