import React from "react";
import { ExhibitionList } from "../../components";
import SubMenus from "../../components/SubMenus";
import { Container } from "../../elements";

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
