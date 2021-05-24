import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { SuccessAlert, WarningAlert, ErrorAlert } from "../../shared/Alerts";
import { config } from "../../shared/config";

//action
const SET_OTHER_USER = 'SET_OTHER_USER';
const RESET_OTHER_USER = 'RESET_OTHER_USER';

//actionCreator
const setOtherUser = createAction(SET_OTHER_USER, (otherUser) => ({ otherUser }));
const resetOtherUser = createAction(SET_OTHER_USER, (otherUser) => ({ otherUser }));

const initialState = {
  otherUser: null,
};


//API
//다른 유저의 정보불러오기  
const otherCheckAPI = (otherId) => {
  return function (dispatch, getState, { history }) {

    const API = `${config.api}/api/user/profile?user_id=${otherId}`
    axios({
      method: "get",
      url: API,
    }).then((res) => {
      dispatch(setOtherUser({
        id: res.data.userid, 
        description: res.data.description,
        nickname: res.data.nickname,
        position: res.data.position,
        profileImage: res.data.profileImage,
        username: res.data.username, //email
        nowteamcnt: res.data.nowTeamCnt, 
        applyteamid:res.data.applyTeamIdList,
      }))
    }).catch((err) => {
      history.replace('/');
      ErrorAlert("존재하지 않는 회원입니다")
      console.log("OTHERcheck에러:", err);
    })
      
    }
  }



//reducer
export default handleActions(
  {
    [SET_OTHER_USER]: (state, action) => produce(state, (draft) => {
      draft.otherUser = action.payload.otherUser;
    }),
    [RESET_OTHER_USER]: (state, action) => produce(state, (draft) => {
      draft.otherUser = null;
    }),
  }, initialState);

const actionCreators = {
  otherCheckAPI,
  resetOtherUser,
};

export { actionCreators };