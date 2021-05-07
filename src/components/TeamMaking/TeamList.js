import React from "react";
import styled from "styled-components";
import { TeamCard } from "../../components";
import { Container } from "../../elements";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../shared/Spinner";
import { history } from "../../redux/configStore";

const TeamList = (props) => {

  const ProjectList = [
    {
      "teamid": 1,
      "title": "아기자기한 타로카드 앱을 만드실 분을 찾습니다.",
      "recruit ": "2021-04-28T19:54:09.546",
      "begin": "2021-05-04T19:54:09.546",
      "end": "2021-05-31T19:54:09.546",
      "location ": "오프라인",
      "thumbnail": "https://cdn.pixabay.com/photo/2017/09/08/09/49/craft-2728227__340.jpg",
      "front": 2,
      "back": 2,
      "designer": 1,
      "planner": 0,
      "stack": "React Native/Node.js",
      "contents": "<p>제목 그대로 입니다.</p>",
      "createdAt": "2021-04-20T19:54:09.546",
      "modifiedAt": "2021-04-20T19:54:09.546",
      "user": {
        id: 2,
        nickname: "아톰",
        position: "프론트엔드",
        profileimage: "https://post-phinf.pstatic.net/MjAxNzA2MjlfMjU5/MDAxNDk4NzM5NzI3MjA0.Aon2aPyhufiwt9-Y21w0v1luZzlYnihR7Xcozypyf8Qg.QLFNlJRzJzd1TqWWSN0DyVeHxe8zsAxGc7PHwkNHy8gg.PNG/1483309553699.png?type=w1200",
        desc: "탄탄한 포트폴리오를 만들고 싶습니다!"
      }
    },
    {
      "teamid": 2,
      "title": "함께 고민을 풀어가는 상담 채팅 사이트를 만들어봐요",
      "recruit": "2021-05-01T19:54:09.546",
      "begin": "2021-05-10T19:54:09.546",
      "end": "2021-06-20T19:54:09.546",
      "location ": "온라인",
      "thumbnail": "https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850177__340.jpg",
      "front": 1,
      "back": 1,
      "designer": 0,
      "planner": 1,
      "stack": "React,Spring",
      "contents": "<p>제목 그대로 입니다.</p>",
      "createdAt": "2021-04-18T19:54:09.546",
      "modifiedAt": "2021-04-18T19:54:09.546",
      "user": {
        id: 2,
        nickname: "아톰",
        position: "프론트엔드",
        profileimage: "https://post-phinf.pstatic.net/MjAxNzA2MjlfMjU5/MDAxNDk4NzM5NzI3MjA0.Aon2aPyhufiwt9-Y21w0v1luZzlYnihR7Xcozypyf8Qg.QLFNlJRzJzd1TqWWSN0DyVeHxe8zsAxGc7PHwkNHy8gg.PNG/1483309553699.png?type=w1200",
        desc: "탄탄한 포트폴리오를 만들고 싶습니다!"
      }
    },
    {
      "teamid": 3,
      "title": "식사 후 디저트는 어디서? 디저트 카페 소개 사이트를 만들어봐요!",
      "recruit": "2021-05-01T19:54:09.546",
      "begin": "2021-05-10T19:54:09.546",
      "end": "2021-06-20T19:54:09.546",
      "location ": "온라인",
      "thumbnail": "https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040__480.jpg",
      "front": 2,
      "back": 3,
      "designer": 2,
      "planner": 0,
      "stack": "React/Spring",
      "contents": "<p>배고픈 돼지들을 위한 사이트 입니다!</p>",
      "createdAt": "2021-04-15T19:54:09.546",
      "modifiedAt": "2021-04-15T19:54:09.546",
      "user": {
        id: 3,
        nickname: "네오",
        position: "프론트엔드",
        profileimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIyJCBC2obbSG-hy9JLeheEVa2BUGzFIrkA&usqp=CAU",
        desc: "잘부탁드립니다."
      }
    },
    {
      "teamid": 4,
      "title": "내 돈이 어디로 나가나.. 가계부 앱",
      "recruit": "2021-04-27T19:54:09.546",
      "begin": "2021-05-01T19:54:09.546",
      "end": "2021-06-02T19:54:09.546",
      "location ": "온라인",
      "thumbnail": "https://cdn.pixabay.com/photo/2016/08/19/10/20/money-1604921__480.jpg",
      "front": 1,
      "back": 3,
      "designer": 0,
      "planner": 0,
      "stack": "React/Spring",
      "contents": "<p>내 돈이 모두 어디로?</p>",
      "createdAt": "2021-04-10T19:54:09.546",
      "modifiedAt": "2021-04-10T19:54:09.546",
      "user": {
        id: 4,
        nickname: "제이지",
        position: "백엔드",
        profileimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHDdJqqSKY2o8SbZeGZ7Xp6ODIh2TogI9eQ&usqp=CAU",
        desc: "흥청망청 인생!"
      }
    },
    {
      "teamid": 5,
      "title": "랜덤 음악 추천 사이트",
      "recruit": "2021-04-25T19:54:09.546",
      "begin": "2021-06-01T19:54:09.546",
      "end": "2021-06-08T19:54:09.546",
      "location ": "오프라인",
      "thumbnail": "https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722__340.jpg",
      "front": 1,
      "back": 0,
      "designer": 1,
      "planner": 0,
      "stack": "프론트: React, 백엔드: Node.js",
      "contents": "<p>랜덤 음악 추천 사이트입니다.</p>",
      "createdAt": "2021-04-07T19:54:09.546",
      "modifiedAt": "2021-04-07T19:54:09.546",
      "user": {
        id: 4,
        nickname: "제이지",
        position: "백엔드",
        profileimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHDdJqqSKY2o8SbZeGZ7Xp6ODIh2TogI9eQ&usqp=CAU",
        desc: "흥청망청 인생!"
      }
    },
  ]

  const { list, isLoading } = useSelector((state) => state.team);

  if (isLoading && history.location.pathname !== "/") {
    return (
      <React.Fragment>
        <Spinner />
      </React.Fragment>
    );
  }

  return (
    <Container>
      <Grid>
        {list.map((p) => {
          return (
            <TeamCard {...p} key={p.teamId} />
          )
        })}
      </Grid>
    </Container>
  )
}

export default TeamList

const Grid = styled.div`
  margin:30px auto 170px auto;
  width:95%;
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  grid-template-rows: auto;
  grid-column-gap: 2%;
  grid-row-gap: 27px;
  align-items: center;

  @media ${props => props.theme.tablet}{
  grid-template-columns: repeat(2,minmax(0,1fr));
  }

  @media ${props => props.theme.mobile}{
    grid-template-columns: repeat(1,minmax(0,1fr));
    margin:20px auto 120px auto;
  }
`;

const MoreBox = styled.div`
  
  display: none;

  @media ${props => props.theme.mobile}{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }


`
const MobileMome = styled(FaChevronDown)`
  color:#7b7787;
`
const MobileMoreTeam = styled.p`
  color:#7b7787;
  cursor: pointer;
  font-size:3vw;

`