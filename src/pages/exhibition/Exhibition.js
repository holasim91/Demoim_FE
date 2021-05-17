import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExhibitionList } from "../../components";
import SubMenus from "../../components/SubMenus";
import { Container } from "../../elements";
import { actionCreators as exhibitionActions } from "../../redux/modules/exhibition";
import SimfinityScroll from "../../shared/SimfinityScroll";

const Exhibition = () => {
  const dispatch = useDispatch();
  const { page, hasMorePosts } = useSelector((state) => state.exhibition);
  useEffect(() => {
    dispatch(exhibitionActions.getExihibitionAPI(1, 6));
  }, [dispatch]);

  return (
    <>
      <SubMenus />
      <Container>
        <SimfinityScroll
          callNext={() =>
            dispatch(exhibitionActions.getNextExihibitionPostsAPI(page, 6))
          }
          hasMorePosts={hasMorePosts}
          page={page}
        >
          <ExhibitionList />
        </SimfinityScroll>
      </Container>
    </>
  );
};

export default Exhibition;
