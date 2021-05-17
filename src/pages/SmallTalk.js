import React, { useEffect } from "react";
import SmallTalkList from "../components/SmallTalk/SmallTalkList";
import SmallTalkWrite from "../components/SmallTalk/SmallTalkWrite";
import SubMenus from "../components/SubMenus";
import { Container } from "../elements";
import { actionCreators as smalltalkActions } from "../redux/modules/smalltalk";
import { useDispatch, useSelector } from "react-redux";
import SimfinityScroll from "../shared/SimfinityScroll";
import SmallTalkInfo from "../components/SmallTalk/SmallTalkInfo";

const SmallTalk = () => {
  const dispatch = useDispatch();
  const { page, hasMorePosts } = useSelector((state) => state.smalltalk);

  useEffect(() => {
    dispatch(smalltalkActions.getSmallTalkPostsAPI(1, 6));
  }, [dispatch]);
  return (
    <>
      <SubMenus />
      <Container>
        <SmallTalkInfo/>
        <SmallTalkWrite />
          <SimfinityScroll
            callNext={() =>
              dispatch(smalltalkActions.getNextSmallTalkPostsAPI(page, 6))
            }
            hasMorePosts={hasMorePosts}
            page={page}
          >
            <SmallTalkList />
          </SimfinityScroll>
      </Container>
    </>
  );
};

export default SmallTalk;
