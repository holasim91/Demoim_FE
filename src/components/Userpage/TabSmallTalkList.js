import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import SmallTalkList from "../SmallTalk/SmallTalkList";
import { actionCreators as userAction } from "../../redux/modules/user";
import smalltalk from "../../redux/modules/smalltalk";


const TabSmallTalkList = (props) => {
  const dispatch = useDispatch();

  //userpage에서 props를 가져오기
  const { is_me, otherId } = props;
  console.log("탭스몰톡Props : ", is_me, "탭스몰톡 다른유저", otherId);
  
  React.useEffect(() => {
    if(is_me){
      console.log("넘어옴!!!")
      dispatch(userAction.TabSmallTalkAPI());
    }else{
      console.log("다른아이디 넘어옴!@!")
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