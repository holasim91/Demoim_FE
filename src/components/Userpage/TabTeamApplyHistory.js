import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as userAction } from "../../redux/modules/user";
import { ApplyProjectList } from "../../components";

const TabTeamApplyHistory = () => {
  return (
    <React.Fragment>
      <ApplyProjectList />
    </React.Fragment>
  )
}

export default TabTeamApplyHistory;
