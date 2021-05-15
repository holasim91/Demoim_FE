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
  //console.log("탭Small톡Props : ", is_me, "탭Small톡 다른유저", otherId);

  React.useEffect(() => {
    if (is_me) {
      dispatch(userAction.TabSmallTalkAPI());
      console.log('나의 스몰토크');
    } else {
      dispatch(userAction.TabSmallTalkAPI(otherId));
      console.log('다른이의 스몰토크')
    }

  }, [is_me]);


  return (
    <React.Fragment>
      <MySmallTalkList />
    </React.Fragment>
  );
};

export default TabSmallTalkList;