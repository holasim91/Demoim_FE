import React from "react";
import SmallTalkList from "../components/SmallTalk/SmallTalkList";
import SmallTalkWrite from "../components/SmallTalk/SmallTalkWrite";
import SubMenus from "../components/SubMenus";
import { Container } from "../elements";

const SmallTalk = () => {
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
