import React from "react";
import { Container, Input, CheckBox, Upload } from "../../elements";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as teamActions } from "../../redux/modules/team";
import { Editor, TeamDate } from "../../components";
import { useMediaQuery } from "react-responsive";
import Swal from "sweetalert2";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { Wrapper, TitleBox, ChoiceBox, ConentesBox, BtnBox, WriteBtn, ChoiceTable, SelectBox, LanguageInput, PositionBox, NumberInput, PositionSelect, Line } from "../../components/TeamMaking/TeamEditor";
import { history } from "../../redux/configStore";

//팀메이킹 글수정 컴포넌트 입니다.
//상세페이지에서 불러온 teamInfo를 사용해 해당 팀메이킹 포스트 내역을 세팅합니다.
const TeamEdit = (props) => {

  const teamId = Number(props.match.params.teamId);
  const teamInfo = useSelector((state) => state.team.teamInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {

    if (teamInfo?.teamId !== teamId) {
      Swal.fire({
        text: '새로고침시 프로젝트 수정을 다시 시도해주세요!',
        icon: 'warning',
        confirmButtonColor: "#999cda",
      });
      history.goBack();
      return false;
    }

    //teamInfo가 있다면 썸네일을 미리보기에 세팅해줍니다.
    if (teamInfo) {
      dispatch(imageActions.setPreview(teamInfo.thumbnail));
    }


  }, []);


  let projectMindate;
  if (teamInfo) {

    if (new Date(teamInfo.begin) > new Date()) {
      projectMindate = new Date();
    } else {
      projectMindate = new Date(teamInfo.begin);
    }
  }
  const thumbnailRef = React.useRef();

  const [title, setTitle] = React.useState(teamInfo ? teamInfo.title : "");
  const [contents, setContents] = React.useState(teamInfo ? teamInfo.contents : "");
  const [location, setLocation] = React.useState(teamInfo ? teamInfo.location : "");
  const [stack, setStack] = React.useState(teamInfo ? teamInfo.stack : "");

  //직군별로 인원수를 확인해 체크박스를 활성화합니다.
  const [front, setFront] = React.useState(teamInfo ? (
    teamInfo.front !== 0 ? { member: teamInfo.front, check: true } : {
      member: 0, check: false
    }
  ) : ({}));
  const [back, setBack] = React.useState(teamInfo ? (
    teamInfo.back !== 0 ? { member: teamInfo.back, check: true } : {
      member: 0, check: false
    }
  ) : ({}));
  const [design, setDesign] = React.useState(teamInfo ? (
    teamInfo.designer !== 0 ? { member: teamInfo.designer, check: true } : {
      member: 0, check: false
    }
  ) : ({}));
  const [plan, setPlan] = React.useState(teamInfo ? (
    teamInfo.planner !== 0 ? { member: teamInfo.planner, check: true } : {
      member: 0, check: false
    }
  ) : ({}));

  //기간 설정.
  const [recruit, setRecruit] = React.useState(teamInfo ? ({
    start: new Date(teamInfo.createdAt),
    end: new Date(teamInfo.recruit),
  }) : ({
  }));

  //마감일이 지났을 경우는 수정페이지에 애초 들어올 수 없음.
  const [project, setProject] = React.useState(teamInfo ? ({
    start: new Date(teamInfo.begin),
    end: new Date(teamInfo.end),
  }) : ({
  }));

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
      end: date,
    })

    if (recruit.end > date) {
      setRecruit({
        ...recruit,
        end: date
      })
    }
  }
  //썸네일이 변경될 때마다 미리보기 세팅.
  const changeFile = (e) => {
    const reader = new FileReader();
    const img = thumbnailRef.current.files[0];
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    }
  };
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
  //editTeam 수정하기.
  const editTeam = () => {

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
    const requestBody = `{ 'title':'${title}', 'recruit':'${recruit.end.getTime()}',
    'begin':'${project.start.getTime()}', 'end':'${project.end.getTime()}', 'location':'${location}',
    'front':'${front.member}', 'back':'${back.member}', 'designer':'${design.member}', 'planner':'${plan.member}',
    'stack':'${stack}', 'contents':'${contents}'}`;

    let formData = new FormData();
    formData.append("file", thumbnailFile);
    formData.append("requestBody", requestBody);

    dispatch(teamActions.updateTeamMakingAPI(teamId, formData));
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
                <td>
                  <TeamDate startDate={recruit.start} endDate={recruit.end} setEndDate={setRecruitEnd} recruit recruitMaxDate={project.end} />
                </td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td><TeamDate startDate={project.start} endDate={project.end} setStartDate={setProjectStart} setEndDate={setProjectEnd} edit projectMindate={projectMindate} /></td>
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
              <tr>
                <td>썸네일</td>
                <td>
                  <Upload fileRef={thumbnailRef} changeFile={changeFile} />
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
        </ConentesBox>
        <BtnBox>
          <WriteBtn onClick={editTeam}>
            작성완료
          </WriteBtn>
        </BtnBox>
      </Wrapper>
    </Container>
  )
}

export default TeamEdit;