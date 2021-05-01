import React from "react";
import { Container } from "../elements";
import SubMenus from "../components/SubMenus";
import ExhibitionList from "../components/Exhibition/ExhibitionList";

const Exhibition = () => {
  return (
    <>
      <SubMenus />
      <Container>
        <ExhibitionList />
      </Container>
    </>
  );
};

export default Exhibition;
