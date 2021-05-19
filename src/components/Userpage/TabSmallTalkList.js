import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import SmallTalkList from "../SmallTalk/SmallTalkList";
import { actionCreators as userAction } from "../../redux/modules/user";
import MySmallTalkList from "../SmallTalk/MySmallTalkList";


const TabSmallTalkList = (props) => {
  const dispatch = useDispatch();

  //userpage에서 props를 가져오기
  const { is_me, otherId } = props;

  React.useEffect(() => {
    if (is_me === true) {
      dispatch(userAction.TabSmallTalkAPI());
      
    } else {
      dispatch(userAction.TabSmallTalkAPI(otherId));
      
    }

  }, [is_me]);


  return (
    <React.Fragment>
      <MySmallTalkList />
    </React.Fragment>
  );
};

export default TabSmallTalkList;