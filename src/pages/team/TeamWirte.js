import React from "react";
import styled from "styled-components";
import { Container, Upload, Input, CheckBox } from "../../elements";
import { Editor } from "../../components";
import { useMediaQuery } from "react-responsive";

const TeamWirte = (props) => {

  const [title, setTitle] = React.useState('');
  const [contents, setContents] = React.useState('');

  const onEditorChange = (value) => setContents(value);
  const titleChange = (value) => setTitle(value);

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
                <td>2021.05.28</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2021.05.28~2021.06.21</td>
              </tr>
              <tr>
                <td>모집인원</td>
                <td>
                  <div>
                    <CheckBox label="프론트엔드" />
                    <p>백엔드 0명</p>
                    <p>디자이너 0명</p>
                    <p>기획자 0명</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>선호언어</td>
                <td><LanguageInput type='text' /></td>
              </tr>
              <tr>
                <td>장소</td>
                <td>
                  <SelectBox>
                    <option>온라인</option>
                    <option>오프라인</option>
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
  height: 250px;
  //background-color: rgb(0,0,0,0.1);
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
  //border:1px solid red;
  & tr,td{
    //border:1px solid red;
    vertical-align: middle;
  }

  & td:nth-child(1){
    width:30%;
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
`;