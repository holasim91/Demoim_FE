import React from "react";
import styled from "styled-components";
import { Container, Upload, Input, CheckBox } from "../../elements";
import { Editor, DatePick } from "../../components";
import { useMediaQuery } from "react-responsive";

const TeamWirte = (props) => {

  //필요 데이터
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");
  const [location, setLocation] = React.useState("온라인");
  const [stack, setStack] = React.useState("");
  const [positions, setPositions] = React.useState({
    front: 0,
    back: 0,
    design: 0,
    plan: 0,
  });
  const [checks, setChecks] = React.useState({
    checkFront: false,
    checkBack: false,
    checkDesign: false,
    checkPlan: false,
  });

  const { front, back, design, plan } = positions;
  const { checkFront, checkBack, checkDesign, checkPlan } = checks;

  //변경 함수
  const onEditorChange = (value) => setContents(value);
  const titleChange = (value) => setTitle(value);
  const changePosition = (e) => {
    const { value, name } = e.target;
    setPositions({
      ...positions,
      [name]: value
    });
  }

  const changeChecks = (e) => {
    const { checked, name } = e.target;

    setChecks({
      ...checks,
      [name]: checked
    });

    /*
    if (checkFront) {
      setPositions({
        ...positions,
        front: 0,
      })
    } if (checkBack) {
      setPositions({
        ...positions,
        back: 0,
      })
    } if (checkDesign) {
      setPositions({
        ...positions,
        design: 0,
      })
    } if (checkPlan) {
      setPositions({
        ...positions,
        plan: 0,
      })
    }
  */
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
        </TitleBox>
        <ChoiceBox>
          <ChoiceTable>
            <tbody>
              <tr>
                <td>모집기간</td>
                <td><DatePick />
                  <Info>모집 마감일을 지정해주세요 :)</Info>
                </td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td><DatePick isRange /></td>
              </tr>
              <tr>
                <td>모집인원</td>
                <td>
                  <div style={{ marginBottom: "5px" }}>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="프론트엔드" id="1" name="checkFront" checked={checkFront} _onChange={changeChecks} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={front} name="front" onChange={changePosition} disabled={!checks.checkFront} />
                    </PositionBox>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="백엔드" id="2" name="checkBack" checked={checkBack} _onChange={changeChecks} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={back} name="back" onChange={changePosition} disabled={!checks.checkBack} />
                    </PositionBox>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="디자이너" id="3" name="checkDesign" checked={checkDesign} _onChange={changeChecks} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={design} name="design" onChange={changePosition} disabled={!checks.checkDesign} />
                    </PositionBox>
                    <PositionBox>
                      <PositionSelect>
                        <CheckBox label="기획자" id="4" name="checkPlan" checked={checkPlan} _onChange={changeChecks} />
                      </PositionSelect>
                      <NumberInput type="number" min="0" max="10" pattern="\d*" value={plan} name="plan" onChange={changePosition} disabled={!checks.checkPlan} />
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
                  <SelectBox onChange={(e) => setLocation(e.target.value)}>
                    <option value="온라인">온라인</option>
                    <option value="오프라인">오프라인</option>
                  </SelectBox>
                </td>
              </tr>

            </tbody>
          </ChoiceTable>
        </ChoiceBox>
        <ConentesBox>
          <Input placeholder="제목을 입력해주세요." padding="10px" _onChange={(e) => titleChange(e.target.value)} value={title} />
          {isMobile ? (<React.Fragment>
            <Editor value={contents} onChange={onEditorChange} height="450px" innerHeight="400px" />
          </React.Fragment>) : (<React.Fragment>
            <Editor value={contents} onChange={onEditorChange} />
          </React.Fragment>)}

          <UploadBox>
            <Upload />
          </UploadBox>
        </ConentesBox>
        <BtnBox>
          <WriteBtn>
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
  margin-bottom: 30px;
`;

const ChoiceBox = styled.div`
  width:500px;
  height: 280px;
 // background-color: rgb(0,0,0,0.1);
  padding:20px;
  box-sizing: border-box;
  margin-bottom: 20px;


  @media ${props => props.theme.mobile}{
    width:100%;
  }

  @media (max-width:380px){
    padding:0px;
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

  @media ${props => props.theme.mobile}{
   margin-top:20px;
  }
`;

const WriteBtn = styled.button`
  border:1px solid ${props => props.theme.button_purple};
  background-color: ${props => props.theme.button_purple};
  color:#ffffff;
  border-radius: 4px;
  padding:7px 15px;
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
    width:30%;
   
  }

  & tr:nth-child(1){
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
    font-size:0.8em;
  }
`;

const SelectBox = styled.select`
  padding:4px 25px;
  outline: none;
  border:none;
  border-bottom: 1px solid #000000;
  width:170px;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-size:0.9em;
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