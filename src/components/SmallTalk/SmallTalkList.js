import React from "react";
import { useSelector } from "react-redux";
import SmallTalkPost from "./SmallTalkPost";
import { history } from "../../redux/configStore";
import Spinner from "../../shared/Spinner";
import styled from "styled-components";
import NoData from "../../shared/NoData";

const SmallTalkList = () => {
  const { smallTalkPosts, isLoading } = useSelector((state) => state.smalltalk);
  let currentPath = history.location.pathname;
  if (isLoading && currentPath !== "/") {
    return (
      <>
        <Spinner />
      </>
    );
  }
if(smallTalkPosts.length === 0){
  return(
    <NoData />
  )
}
  return (
    <>
      <SmallTalkListWrapper>
        {smallTalkPosts.map((data) => (
          <SmallTalkPost data={data} key={data.smallTalkId} location={currentPath} />
        ))}
      </SmallTalkListWrapper>
    </>
  );
};
const SmallTalkListWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
export default SmallTalkList;
