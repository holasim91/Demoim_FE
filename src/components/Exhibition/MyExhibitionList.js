import React from "react";
import { useSelector } from "react-redux";
import ExhibitionPost from "./ExhibitionPost";
import Spinner from "../../shared/Spinner";
import { history } from "../../redux/configStore";
import styled from "styled-components";

const MyExhibitionList = () => {
  const { exhibitionPosts, exihibitionLoading } = useSelector(
    (state) => state.exhibition
  );

  if (!exhibitionPosts) {
    return <>Nodata</>;
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
      <ExhibitionBoxWrapper>
        {exhibitionPosts.map((post) => (
          <ExhibitionPost
            data={post}
            key={post.exhibitionId}
            onClick={() => history.push(`/detail/${post.exhibitionId}`)}
          />
        ))}
      </ExhibitionBoxWrapper>
    </>
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

export default MyExhibitionList;
