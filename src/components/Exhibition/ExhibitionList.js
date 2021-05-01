import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExhibitionPost from "./ExhibitionPost";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import Spinner from "../../shared/Spinner";
import { history } from "../../redux/configStore";
import styled from "styled-components";

const ExhibitionList = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); //현재페이지, 1부터 시작
  useEffect(() => {
    dispatch(exhibitionActions.exihibitionAPI(page, 6));
  }, [dispatch, page]);
  const { posts, isLoading } = useSelector((state) => state.exhibition);
  
  if (isLoading && history.location.pathname!=='/') {
    return (
      <>
      <Spinner />
      </>
    );
  }

  return (
    <ExhibitionBoxWrapper>
      {posts.map((post) => (
        <ExhibitionPost
          data={post}
          key={post.id}
          onClick={() => history.push(`/detail/${post.id}`)}
        />
      ))}
    </ExhibitionBoxWrapper>
  );
};

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

export default ExhibitionList;
