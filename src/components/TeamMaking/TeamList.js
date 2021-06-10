import React from "react";
import styled from "styled-components";
import { TeamCard } from "../../components";
import { Container } from "../../elements";
import { useSelector } from "react-redux";
import Spinner from "../../shared/Spinner";
import { history } from "../../redux/configStore";
import NoData from "../../shared/NoData";

const TeamList = (props) => {
  const { list, isLoading } = useSelector((state) => state.team);

  if (list.length === 0) {
    return <NoData />;
  }

  //로딩중인데 홈화면이 아니면 스피너 보여주자
  if (isLoading && history.location.pathname !== "/") {
    return (
      <React.Fragment>
        <Spinner />
      </React.Fragment>
    );
  }

  return (
    <Container>
      <Grid>
        {list.map((p) => {
          return <TeamCard {...p} key={p.teamId} />;
        })}
      </Grid>
    </Container>
  );
};

export default TeamList;

const Grid = styled.div`
  margin: 30px auto 170px auto;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 2%;
  grid-row-gap: 27px;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 20px auto 120px auto;
  }
`;

// const MoreBox = styled.div`
//   display: none;

//   @media ${(props) => props.theme.mobile} {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//   }
// `;
// const MobileMome = styled(FaChevronDown)`
//   color: #7b7787;
// `;
// const MobileMoreTeam = styled.p`
//   color: #7b7787;
//   cursor: pointer;
//   font-size: 3vw;
// `;
