import React from "react";
import styled from "styled-components";
import { TeamList } from "../../components";
import { Container, Button } from "../../elements";
import { history } from "../../redux/configStore";

const TeamAllList = (props) => {

  const [select, setSelect] = React.useState("프론트엔드");

  const showCategory = (e) => {

    console.log(e.target.value);

  }

  return (
    <React.Fragment>
      <Container>
        <TopBox>
          <SelectBox onChange={(e) => showCategory(e)}>
            <option value="프론트엔드">프론트엔드</option>
            <option value="백엔드">백엔드</option>
            <option value="디자이너">디자이너</option>
            <option value="기획자">기획자</option>
          </SelectBox>
          <BtnBox>
            <Button padding='6px 5px' size='14px' _onClick={() => history.push('/team/write')}>팀 만들기</Button>
          </BtnBox>
        </TopBox>

      </Container>
      <ContentBox>
        <TeamList />
      </ContentBox>
    </React.Fragment>
  )
}

export default TeamAllList;

const TopBox = styled.div`
  width:100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding:0px 50px;
  margin: 80px 0px 40px 0px;
  flex-wrap: wrap;
`;

const ContentBox = styled.div`
  width:100%;
  box-sizing: border-box;
  margin:0px auto;
`;

const BtnBox = styled.div`
  width:100px;
`;

const SelectBox = styled.select`
  padding:0px 25px;
  outline: none;
  border:none;
  border-bottom: 1px solid #000000;
`;