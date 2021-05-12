import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import SmallTalkList from "../SmallTalk/SmallTalkList";
import { actionCreators as userAction } from "../../redux/modules/user";
import smalltalk from "../../redux/modules/smalltalk";


const TabSmallTalkList = () => {
  const dispatch = useDispatch();

  //smalltalk의 smallTalkPosts[]를 useSelctor해와야지
  React.useEffect(() => {
    dispatch(userAction.TabSmallTalkAPI());
  }, []);


  return (
    <React.Fragment>
      <SmallTalkList />
    </React.Fragment>
  );
};

export default TabSmallTalkList;