import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";

const SET_TEAM = "SET_TEAM";
const LOADING = "LOADING";
const ADD_TEAM = "ADD_TEAM";
const UPDATE_TEAM = "UPDATE_TEAM";
const DELETE_TEAM = "DELETE_TEAM";

const setTeam = createAction(SET_TEAM, (teamList) => ({ teamList }));
const addTeam = createAction(ADD_TEAM, (team) => ({ team }));
const deleteTeam = createAction(DELETE_TEAM, (teamId) => ({ teamId }));
const updateTeam = createAction(UPDATE_TEAM, (teamId, team) => ({ teamId, team }));
const loading = createAction(LOADING, (isLoading) => ({ isLoading }));

const initialState = {
  list: [],
  isLoading: false,
  paging: { start: null, next: null, size: 3 },
}

export default handleActions(
  {
    [SET_TEAM]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.teamList;
      draft.isLoading = false;
    }),
    [ADD_TEAM]: (state, action) => produce(state, (draft) => {

    }),
    [UPDATE_TEAM]: (state, action) => produce(state, (draft) => {

    }),
    [DELETE_TEAM]: (state, action) => produce(state, (draft) => {

    }),
    [loading]: (state, action) => produce(state, (draft) => {
      draft.isLoading = action.payload.isLoading;
    }),

  }, initialState);


const actionCreators = {

};

export { actionCreators };