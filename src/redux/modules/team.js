import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from "../../shared/Cookies";

const SET_TEAM = "SET_TEAM";
const LOADING = "LOADING";
const ADD_TEAM = "ADD_TEAM";
const UPDATE_TEAM = "UPDATE_TEAM";
const DELETE_TEAM = "DELETE_TEAM";
const SET_DETAIL_TEAM = "SET_DETAIL_TEAM";

const setTeam = createAction(SET_TEAM, (teamList) => ({ teamList }));
const addTeam = createAction(ADD_TEAM, (team) => ({ team }));
const deleteTeam = createAction(DELETE_TEAM, (teamId) => ({ teamId }));
const updateTeam = createAction(UPDATE_TEAM, (teamId, team) => ({ teamId, team }));
const loading = createAction(LOADING, (isLoading) => ({ isLoading }));
const setDetailTeam = createAction(SET_DETAIL_TEAM, (teamInfo) => ({ teamInfo }));

const initialState = {
  list: [{
    "teamId": 1,
    "title": "아기자기한 타로카드 앱을 만드실 분을 찾습니다.",
    "recruit ": "2021-04-28T19:54:09.546",
    "begin": "2021-05-04T19:54:09.546",
    "end": "2021-05-31T19:54:09.546",
    "location ": "오프라인",
    "thumbnail": "https://cdn.pixabay.com/photo/2017/09/08/09/49/craft-2728227__340.jpg",
    "front": 2,
    "back": 2,
    "designer": 1,
    "planner": 0,
    "stack": "React Native/Node.js",
    "contents": "<p>제목 그대로 입니다.</p>",
    "createdAt": "2021-04-20T19:54:09.546",
    "modifiedAt": "2021-04-20T19:54:09.546",
    "recruitState": "ACTIVATED",
    "projectState": "YET",
    "leader": {
      id: 2,
      nickname: "아톰",
      position: "프론트엔드",
      profileimage: "https://post-phinf.pstatic.net/MjAxNzA2MjlfMjU5/MDAxNDk4NzM5NzI3MjA0.Aon2aPyhufiwt9-Y21w0v1luZzlYnihR7Xcozypyf8Qg.QLFNlJRzJzd1TqWWSN0DyVeHxe8zsAxGc7PHwkNHy8gg.PNG/1483309553699.png?type=w1200",
      desc: "탄탄한 포트폴리오를 만들고 싶습니다!"
    }
  },],
  isLoading: false,
  teamInfo: {},
  //paging: { start: null, next: null, size: 3 },
}

const getTeamMakingAPI = (page, size) => {
  return function (dispatch, getState, { history }) {

    dispatch(loading(true));
    axios({
      method: 'get',
      url: `${config.api}/api/team?page=${page}&size=${size}`,
    }).then((res) => {
      console.log(res.data);
      dispatch(setTeam(res.data));
    }).catch((error) => {
      console.log(error);
    });

  }
}

const getDetailTeamMakingAPI = (teamId) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null) {
      return false;
    }

    axios({
      method: 'get',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
    }).then((res) => {
      console.log(res.data);
      dispatch(setDetailTeam(res.data));
    }).catch((error) => {
      console.log(error);
    })

  }
}

const addTeamMakingAPI = (formdata) => {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');

    if (!formdata) {
      return false;
    }

    axios({
      method: "post",
      header: {
        authorization: token,
      },
      url: `${config.api}/api/team`,
      data: formdata,
    }).then((res) => {

      dispatch(addTeam(res.data));
      history.push("/team");

    }).catch((err) => {
      console.log("팀메이킹 글작성 에러:", err);
    })

  }
}

const deleteTeamMakingAPI = (teamId) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null) {
      return false;
    }

    axios({
      method: 'delete',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
    }).then((res) => {

      dispatch(deleteTeam(teamId));
      history.replace('/');

    }).catch((err) => {
      console.log('팀메이킹 글삭제 에러:', err);
    })

  }
}


const updateTeamMakingAPI = (teamId, formData) => {
  return function (dispatch, getState, { history }) {

    if (teamId === null || formData === null) {
      return false;
    }

    axios({
      method: 'put',
      url: `${config.api}/api/team/detail?team_id=${teamId}`,
      data: formData,
    }).then((res) => {

      dispatch(updateTeam(teamId, res.data));

    }).catch((err) => {
      console.log('팀메이킹 글수정 에러:', err);
    })

  }
}




export default handleActions(
  {
    [SET_TEAM]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.teamList;
      draft.isLoading = false;
    }),
    [ADD_TEAM]: (state, action) => produce(state, (draft) => {
      draft.list.push(action.payload.team);
    }),
    [UPDATE_TEAM]: (state, action) => produce(state, (draft) => {
      let idx = draft.list.findIndex((t) => t.teamId === action.payload.teamId);
      draft.list[idx] = { ...draft.list[idx], ...action.payload.team };
    }),
    [DELETE_TEAM]: (state, action) => produce(state, (draft) => {
      draft.list = draft.list.filter((t) => t.teamId !== action.payload.teamId);
    }),
    [LOADING]: (state, action) => produce(state, (draft) => {
      draft.isLoading = action.payload.isLoading;
    }),
    [SET_DETAIL_TEAM]: (state, action) => produce(state, (draft) => {
      draft.teamInfo = action.payload.teamInfo;
    }),

  }, initialState);


const actionCreators = {
  getTeamMakingAPI,
  getDetailTeamMakingAPI,
  addTeamMakingAPI,
  deleteTeamMakingAPI,
  updateTeamMakingAPI
};

export { actionCreators };