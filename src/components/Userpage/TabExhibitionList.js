import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import ExhibitionList from "../Exhibition/ExhibitionList";
import { actionCreators as userAction} from "../../redux/modules/user";


const TabExhibitionList = () => {
  const dispatch = useDispatch();

  //const exhibitionPosts = useSelector((state) => state.exhibition.exhibitionPosts);

  React.useEffect(() => {
    dispatch(userAction.TabExhibitionAPI());
  })
  
  return (
    <React.Fragment>
      <ExhibitionList/>
    </React.Fragment>
  );
};

export default TabExhibitionList;