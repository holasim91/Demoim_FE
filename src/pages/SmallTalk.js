import React, { useEffect, useState } from "react";
import SmallTalkList from "../components/SmallTalk/SmallTalkList";
import SmallTalkWrite from "../components/SmallTalk/SmallTalkWrite";
import SubMenus from "../components/SubMenus";
import { Container } from "../elements";
import { actionCreators as smalltalkActions } from "../redux/modules/smalltalk";
import { useDispatch, useSelector } from "react-redux";
const SmallTalk = () => {
  const dispatch = useDispatch();
  const paging = useSelector((state) => state.smalltalk.page);

  // const [page, setPage] = useState(1); //현재페이지, 1부터 시작

  useEffect(() => {
    
    dispatch(smalltalkActions.getSmallTalkPostsAPI(paging, 6));
  }, [dispatch, paging]);
  
  return (
    <>
      <SubMenus />
      <Container>
        <SmallTalkWrite />
        <SmallTalkList />
      </Container>
    </>
  );
};

export default SmallTalk;
