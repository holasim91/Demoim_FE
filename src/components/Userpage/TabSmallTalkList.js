import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import SmallTalkList from "../SmallTalk/SmallTalkList";
import { actionCreators as userAction } from "../../redux/modules/user";


const TabSmallTalkList = (props) => {
  const dispatch = useDispatch();

  //userpage에서 props를 가져오기
  const { is_me, otherId } = props;
  //console.log("탭Small톡Props : ", is_me, "탭Small톡 다른유저", otherId);
  
  React.useEffect(() => {
    if(is_me){
      dispatch(userAction.TabSmallTalkAPI());
    }else{
      dispatch(userAction.TabSmallTalkAPI(otherId));
    }
    
  }, [is_me]);


  return (
    <React.Fragment>
      <SmallTalkList/>
    </React.Fragment>
  );
};

export default TabSmallTalkList;