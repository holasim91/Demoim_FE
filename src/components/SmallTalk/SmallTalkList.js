import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SmallTalkPost from "./SmallTalkPost";
import { actionCreators as smalltalkActions } from "../../redux/modules/smalltalk";
import { history } from "../../redux/configStore";
import Spinner from "../../shared/Spinner";
import styled from "styled-components";

const SmallTalkList = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1); //현재페이지, 1부터 시작
  useEffect(() => {
    dispatch(smalltalkActions.getSmallTalkPostsAPI(1, 6));
  }, [dispatch, page]);
  const { smallTalkPosts, isLoading } = useSelector((state) => state.smalltalk);
  let currentPath = history.location.pathname;
  if (isLoading && currentPath !== "/") {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <SmallTalkListWrapper>
        {smallTalkPosts.map((data) => (
          <SmallTalkPost data={data} key={data.id} location={currentPath} />
        ))}
      </SmallTalkListWrapper>
    </>
  );
};
const SmallTalkListWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export default SmallTalkList;
