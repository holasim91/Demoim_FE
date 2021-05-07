import React from "react"
import styled, { css } from "styled-components";
import { Button } from "../../elements";
import moment from "moment";
import { history } from '../../redux/configStore';

//무한스크롤시 TeamList가 바뀔 때 기존 TeamCard 기억해놓기.
const TeamCard = React.memo((props) => {

  const { title, recruit, begin, end, thumbnail, front, back, designer, planner, teamId, createdAt, recruitState } = props;




  const styles = {
    thumbnail: thumbnail,
  }

  console.log(thumbnail)

  //momment 날짜 계산
  let _begin = new Date(begin);
  let ProjectBegin = moment(_begin).format('YYYY.MM.DD');

  let _end = new Date(end);
  let ProjectEnd = moment(_end).format('YYYY.MM.DD');

  let _createdAt = new Date(createdAt);
  let recruitBegin = moment(_createdAt).format('YYYY.MM.DD');

  let _recruit = new Date(recruit);
  let recruitEnd = moment(_recruit).format('YYYY.MM.DD');


  return (

    <React.Fragment>
      <Grid>
        <ImgBox {...styles} />
        <MentBox>
          <Text className='more'>[프로젝트] {title} </Text>
          <Text>[모집 기간] {recruitBegin} ~ {recruitEnd}</Text>
          <Text>[프로젝트 기간]{ProjectBegin} ~ {ProjectEnd}</Text>
          <Text>[인원] {front !== 0 && `프론트엔드 ${front}명 `}
            {back !== 0 && `백엔드 ${back}명 `}
            {designer !== 0 && `디자이너 ${designer}명 `}
            {planner !== 0 && `기획자 ${planner}명 `}
          </Text>
        </MentBox>
        <Button width="84px" size="0.75em" borderRadius="4.1px" padding="4px 7px" margin="10px 0px 0px 0px" shadow="0 1px 3px 0 rgba(0, 0, 0, 0.27)" _onClick={() => { history.push(`/team/detail/${teamId}`) }}>{recruitState === 'ACTIVATED' ? '모집글 보기' : '모집 완료'}</Button>
      </Grid>

    </React.Fragment>
  )
});


TeamCard.defaultProps = {
  title: "함께 공예 취미 생활 공유 사이트 만드실 분을 찾습니다!",
  createdAt: "2021.04.25",
  recruit: "2021.05.02",
  begin: "2021.05.05",
  end: "2021.05.20",
  thumbnail: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501__480.jpg",
  front: 0,
  back: 2,
  designer: 0,
  planner: 1,
}



export default TeamCard;

const Flex = css`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  width:100%;
  margin:0px auto;
  min-height: 280px;
  box-sizing:border-box;
  background-color: ${props => props.theme.main_gray};
  ${Flex}
  align-items: center;
  gap:5px;
  border-radius: 4px;
  padding-top: 20px;
  transition: all 0.3s;
  :hover{
    transform: translate(0px,-3px);
  }

  @media ${props => props.theme.tablet}{
    min-height:330px;
  }

  @media ${props => props.theme.mobile}{
    min-height: 400px;
  }

  @media (max-width:400px){
    min-height: 280px;
  }
`;

const ImgBox = styled.div`
  width:90%;
  height: 132px;
  background: url('${(props) => props.thumbnail}') no-repeat;
  background-size: cover;
  
  @media ${props => props.theme.tablet}{
    height:180px;
  }

  @media ${props => props.theme.mobile}{
    height: 246px;
  }

  @media (max-width:400px){
    height: 132px;
  }
`;

const MentBox = styled.div`
  width:90%;
  ${Flex}
  gap:4px;
  padding-top:7px;
`;

const Text = styled.div`
  font-size: 0.75em;
  
  &.more{
    text-overflow:ellipsis;
    overflow: hidden;
    white-space:nowrap;
    
  }
`;

