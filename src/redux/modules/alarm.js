import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from "axios";
import { config } from "../../shared/config";
import { getCookie } from '../../shared/Cookies';
import { Redirect } from 'react-router';

const SET_ALARM = "SET_ALARM";
const DELETE_ALARM = "DELETE_ALARM";
const ALL_DELETE_ALARM = "ALL_DELETE_ALARM";
const SET_BELL = "SET_BELL";

const setAlarm = createAction(SET_ALARM, (alarmList) => ({ alarmList }));
const deleteAlarm = createAction(DELETE_ALARM, (alarmId) => ({ alarmId }));
const onOffAlarm = createAction(SET_BELL, (onOff) => ({ onOff }));

const initialState = {
  alarmList: [],
  bell: false,
}

function reFresh(userId) {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;

    axios({
      method: 'get',
      url: `${config.api}/api/alarm`,
      headers: {
        'authorization': token,
      },
    }).then((res) => {
      console.log('알람요청::', res)
      dispatch(setAlarm(res.data));

    }).catch((err) => {
      console.log('알람 조회 에러::', err);
    })
  }
}

const setAlarmAPI = (userId) => {
  return function (dispatch, getState, { history }) {

    const token = getCookie('token');
    axios.defaults.headers.common['authorization'] = token;

    axios({
      method: 'get',
      url: `${config.api}/api/alarm`,
      headers: {
        'authorization': token,
      },
    }).then((res) => {
      console.log('알람요청::', res)
      dispatch(setAlarm(res.data));

    }).catch((err) => {
      console.log('알람 조회 에러::', err);
    })
  }
}

const deleteAlarmAPI = (alarmId) => {
  return function (dispatch, getState, { history }) {
    console.log("alarmId : " + alarmId)
    axios({
      method: 'delete',
      url: `${config.api}/api/alarm?alarm_id=${alarmId}`
    }).then((res) => {
      console.log('알람 삭제 완료::', res);
      dispatch(deleteAlarm(alarmId));
      alert("알람이 삭제 되었습니다.")
      dispatch(reFresh());

    }).catch((err) => {
      console.log('알람 삭제 에러::', err);
    
    })
  }
}

const deleteAlarmAllAPI = (alarmId) => {
  return function (dispatch, getState, { history }) {
    console.log("alarmId : " + alarmId)
    console.log("=====알람 전체 삭제=====")
    axios({
      method: 'delete',
      url: `${config.api}/api/alarm/all`
    }).then((res) => {
      console.log('알람 삭제 완료::', res); 
      dispatch(deleteAlarm(alarmId));
      alert("알람이 모두 되었습니다.")
      dispatch(reFresh());

    }).catch((err) => {
      console.log('알람 삭제 에러::', err);
    
    })
  }
}

export default handleActions({
  [SET_ALARM]: (state, action) => produce(state, (draft) => {
    draft.alarmList = action.payload.alarmList;
  }),
  [DELETE_ALARM]: (state, action) => produce(state, (draft) => {
    draft.alarmList = draft.alarmList.filter((a) => a.alarmId !== action.payload.alarmId);
  }),
  [SET_BELL]: (state, action) => produce(state, (draft) => {
    draft.bell = action.payload.onOff;
  })
}, initialState);

const actionCreators = {
  setAlarmAPI,
  deleteAlarmAPI,
  onOffAlarm,
  deleteAlarmAllAPI,
}

export { actionCreators };