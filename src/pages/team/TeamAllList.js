import React from "react";
import styled from "styled-components";
import { TeamList } from "../../components";
import { Container, Button } from "../../elements";
import { history } from "../../redux/configStore";
import { useSelector, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import TeamIcon from "../../images/teamMaking.svg";
import Arrow from "../../images/arrow.jpg";
import { actionCreators as teamActions } from "../../redux/modules/team";
import { actionCreators as userAction } from "../../redux/modules/user";

const TeamAllList = (props) => {

  const [select, setSelect] = React.useState("전체보기");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  React.useEffect(() => {

    dispatch(teamActions.getTeamMakingAPI(1, 9));
    dispatch(userAction.loginCheckAPI());
  }, []);


  const showCategory = (e) => {

    if (e.target.value === "전체보기") {
      dispatch(teamActions.getTeamMakingAPI(1, 9));
    } else if (e.target.value === "프론트엔드") {
      dispatch(teamActions.getFrontTeamMaking(1, 9));
    } else if (e.target.value === "백엔드") {
      dispatch(teamActions.getBackTeamMaking(1, 9));
    } else if (e.target.value === "디자이너") {
      dispatch(teamActions.getDesignerTeamMaking(1, 9));
    } else if (e.target.value === "기획자") {
      dispatch(teamActions.getPlannerTeamMaking(1, 9));
    }
  }

  return (
    <React.Fragment>
      <Container>
        <TitleBox>
          <p>📢 프로젝트 팀원 모집</p>
        </TitleBox>
        <TopBox>
          <CategoryBox>
            <Select onChange={(e) => showCategory(e)}>
              <option value="전체보기">전체보기</option>
              <option value="프론트엔드">프론트엔드</option>
              <option value="백엔드">백엔드</option>
              <option value="디자이너">디자이너</option>
              <option value="기획자">기획자</option>
            </Select>
          </CategoryBox>
          <BtnBox>
            <TeamIconImg src={TeamIcon} />
            <MakingBtn onClick={() => {
              if (!user) {
                Swal.fire({
                  text: '로그인 후 사용해주세요 :)',
                  icon: 'warning',
                  confirmButtonColor: "#999cda",
                })
                return false;
              }
              history.push('/team/write')
            }}>팀 만들기</MakingBtn>
          </BtnBox>
        </TopBox>

      </Container>
      <ContentBox>
        <TeamList />
      </ContentBox>
    </React.Fragment >
  )
}

export default TeamAllList;

const TopBox = styled.div`
  width:100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding:0px 50px;
  margin: -20px 0px 40px 0px;
  //margin: 50px 0px 40px 0px;
  flex-wrap: wrap;

 @media ${props => props.theme.mobile}{

    padding:0px 15px;
 }

  @media (max-width:420px){
      padding:0px 10px;
   }

`;

const TitleBox = styled.div`
  width:100%;
  box-sizing:border-box;
  padding:0px 50px;
  margin-top:60px;

  p{
    font-size:1.3em;
  }

  @media (max-width:420px){
    padding:0px 5px;
  }

  @media ${props => props.theme.mobile}{
    
    padding:0px 15px;
    p{
      font-size:1.1em;
    }
    
  }  
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ContentBox = styled.div`
  width:100%;
  box-sizing: border-box;
  margin:0px auto;
`;

const BtnBox = styled.div`
  width:100px;
`;

const TeamIconImg = styled.img`
  position: relative;
  top:12px;
  left:12px;
`;

const Select = styled.select`
  padding:7px 25px;
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
  
  select::-ms-expand {
    display: none;
  }
`;

const MakingBtn = styled.button`
  width:90%;
  cursor: pointer;
  background-color: ${props => props.theme.sub_color};
  color: ${props => props.theme.main_color};
  padding:6px 3px;
  font-size:14px;
  border: 1px solid ${props => props.theme.sub_color};
  border-radius: 6px;
  box-sizing:border-box;
  outline: none;
  font-weight: 600;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.27);
  &:focus{
    outline: none;
  }
  position: relative;
  z-index:5;
`;