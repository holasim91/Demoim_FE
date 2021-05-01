import React from "react";
import styled from "styled-components";
import { Container, Grid } from "../elements";
import SubMenus from "../components/SubMenus";
import ExhibitionList from "../components/Exhibition/ExhibitionList";

const Exhibition = (props) => {
  return (
    <>
      <SubMenus currentPath={props.location.pathname.split("/")[1]} />

      <Container>
        <Grid padding="100px 0 0 0" />
        <ExhibitionList />
      </Container>
    </>
  );
};

export default Exhibition;
