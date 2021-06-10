import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { TeamList } from "../../components";
import { Container } from "../../elements";
import { history } from "../../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { WarningAlert } from "../../shared/Alerts";
import TeamIcon from "../../images/teamMaking.svg";
import Arrow from "../../images/arrow.jpg";
import { actionCreators as teamActions } from "../../redux/modules/team";
import SimfinityScroll from "../../shared/SimfinityScroll";

const TeamAllList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const {page, hasMorePosts} = useSelector((state) => state.team);//무한스크롤
  const [cate, setCate] = useState('all') //카테고리

  //App.js와 여기 두곳 모두 로그인체크를 호출에서 에러남 -> 주석처리
  // async function getUsers(){
  //   if (user) {
  //     dispatch(userAction.loginCheckAPI());
  //   }
  // }

  // React.useEffect(() => {
  //   getUsers();
  // }, []);

  React.useEffect(()=>{
    switch (cate) {
      case 'all':
        dispatch(teamActions.getTeamMakingAPI(1, 9)); //1페이지당 9개의 게시물을 가져와라
        break;
      case 'fe':
        dispatch(teamActions.getFrontTeamMaking(1, 9));
        break;
      case 'be':
        dispatch(teamActions.getBackTeamMaking(1, 9));
        break;
      case 'designer':
        dispatch(teamActions.getDesignerTeamMaking(1, 9));
        break;
      case 'planner':
        dispatch(teamActions.getPlannerTeamMaking(1, 9));
        break;
      default:
        dispatch(teamActions.getTeamMakingAPI(1, 9));
        break;
    }
  },[cate, dispatch]) // 둘 중에 하나라도 변경되면 useEffect를 다시 실행

  const changeCate = useCallback((e) =>{
      setCate(e.target.value)
  },[])

  return (
    <React.Fragment>
      <Container>
        <TitleBox>
          <p>📢 프로젝트 팀원 모집</p>
        </TitleBox>
        <TopBox>
          <CategoryBox>
            <Select onChange={(e) => changeCate(e)}>
              <option value="all">전체보기</option>
              <option value="fe">프론트엔드</option>
              <option value="be">백엔드</option>
              <option value="designer">디자이너</option>
              <option value="planner">기획자</option>
            </Select>
          </CategoryBox>
          <BtnBox>
            <TeamIconImg src={TeamIcon} />
            <MakingBtn
              onClick={() => {
                if (!user) {
                  WarningAlert("로그인 후 사용해주세요😘",'<a href="http://demoim.co.kr/login" style="text-decoration:none">로그인하러 가기</a>')
                  return false;
                }
                history.push("/team/write");
              }}
            >
              팀 만들기
            </MakingBtn>
          </BtnBox>
        </TopBox>
      </Container>
      <ContentBox>
        <SimfinityScroll
                  callNext={()=>dispatch(teamActions.getNextTeamMakingAPI(page, 9))}
                  hasMorePosts={hasMorePosts}
                  page={page}
        >
        <TeamList />
        </SimfinityScroll>
      </ContentBox>
    </React.Fragment>
  );
};

export default TeamAllList;

const TopBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0px 50px;
  margin: -20px 0px 40px 0px;
  //margin: 50px 0px 40px 0px;
  flex-wrap: wrap;

  @media ${(props) => props.theme.mobile} {
    padding: 0px 15px;
  }

  @media (max-width: 420px) {
    padding: 0px 10px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 50px;
  margin-top: 60px;

  p {
    font-size: 1.3em;
  }

  @media (max-width: 420px) {
    padding: 0px 5px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0px 15px;
    p {
      font-size: 1.1em;
    }
  }
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ContentBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0px auto;
`;

const BtnBox = styled.div`
  width: 100px;
`;

const TeamIconImg = styled.img`
  position: relative;
  top: 12px;
  left: 12px;
`;

const Select = styled.select`
  padding: 7px 25px;
  outline: none;
  border: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 140px;
  background: url(${Arrow}) no-repeat 98% 50%;
  background-size: 22px;
  background-color: ${(props) => props.theme.main_gray};

  select::-ms-expand {
    display: none;
  }
`;

const MakingBtn = styled.button`
  width: 90%;
  cursor: pointer;
  background-color: ${(props) => props.theme.sub_color};
  color: ${(props) => props.theme.main_color};
  padding: 6px 3px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.sub_color};
  border-radius: 6px;
  box-sizing: border-box;
  outline: none;
  font-weight: 600;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.27);
  &:focus {
    outline: none;
  }
  position: relative;
  z-index: 5;
`;
