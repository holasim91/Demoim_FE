import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";

const SET_APPLY = "SET_APPLY";
const ADD_APPLY = "ADD_APPLY";
const DELETE_APPLY = "DELETE_APPLY";

const setApply = createAction(SET_APPLY, (applyList) => ({ applyList }));
const addApply = createAction(ADD_APPLY, (apply) => ({ apply }));
const deleteApply = createAction(DELETE_APPLY, (applyId) => ({ applyId }));

const initialState = {
  list: [],
}

export default handleActions({
  [SET_APPLY]: (state, action) => produce(state, (draft) => {

  }),
  [ADD_APPLY]: (state, action) => produce(state, (draft) => {

  }),
  [DELETE_APPLY]: (state, action) => produce(state, (draft) => {

  }),
}, initialState);

const actionCreators = {

};

export { actionCreators };