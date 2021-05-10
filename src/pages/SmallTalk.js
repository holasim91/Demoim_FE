import React, { useEffect, useState } from "react";
import SmallTalkList from "../components/SmallTalk/SmallTalkList";
import SmallTalkWrite from "../components/SmallTalk/SmallTalkWrite";
import SubMenus from "../components/SubMenus";
import { Container } from "../elements";
import { actionCreators as smalltalkActions } from "../redux/modules/smalltalk";
import { useDispatch } from "react-redux";

const SmallTalk = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); //현재페이지, 1부터 시작

  useEffect(() => {
    
    dispatch(smalltalkActions.getSmallTalkPostsAPI(1, 6));
  }, [dispatch, page]);
  
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
