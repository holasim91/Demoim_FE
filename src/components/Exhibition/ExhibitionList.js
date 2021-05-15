import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExhibitionPost from "./ExhibitionPost";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import Spinner from "../../shared/Spinner";
import { history } from "../../redux/configStore";
import styled from "styled-components";
import SimfinityScroll from "../../shared/SimfinityScroll";

const ExhibitionList = (props) => {
  const dispatch = useDispatch();
  const { exhibitionPosts, exihibitionLoading, page, hasMorePosts } = useSelector(
    (state) => state.exhibition
  );
  useEffect(() => {
    dispatch(exhibitionActions.getExihibitionAPI(1, 6));
  }, [dispatch]); // 최초 자랑하기 포스트 1페이지 호출

  if (!exhibitionPosts) {
    return (
      <>Nodata</>
    )
  }
  if (exihibitionLoading && history.location.pathname !== "/") {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      {history.location.pathname === "/exhibition" && (
        <>
        <Title>
        프로젝트 자랑 게시판
        </Title>
        <TopBox>
          <BtnBox>
            <WriteBtn  onClick={() => history.push('/exhibition/write')}>
              글 작성하기
            </WriteBtn>
          </BtnBox>
        </TopBox>
        </>
      )}

      <ExhibitionBoxWrapper>
        <SimfinityScroll
          callNext={()=> dispatch(exhibitionActions.getNextExihibitionPostsAPI(page,6))}
          hasMorePosts={hasMorePosts}
          page={page}>
        {exhibitionPosts.map((post) => (
          <ExhibitionPost
            data={post}
            key={post.exhibitionId}
            onClick={() => history.push(`/detail/${post.exhibitionId}`)}
          />
        ))}
        </SimfinityScroll>
      </ExhibitionBoxWrapper>
    </>
  );
};

const Title = styled.div`
margin:80px 0px 10px 0px; 
font-size:30px; 
font-weight:500;
`
const TopBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse;
  /* padding: 0px 50px; */
  /* margin: 80px 0px 40px 0px; */
  flex-wrap: wrap;
`;
const BtnBox = styled.div`
  width: 100px;
`;

const ExhibitionBoxWrapper = styled.div`
  margin: 30px auto 100px auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2%;
  grid-row-gap: 27px;

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0%;
  }
`;

const WriteBtn = styled.button`
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
export default ExhibitionList;
