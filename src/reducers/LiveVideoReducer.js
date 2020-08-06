import * as actionTypes from '../actions';
const INIT_STATE = {
  roomName: null,
  roomId: null,
  serverUrl: null,
  roomToken: null,
  liveError: false,
  liveErrorMsg: null,
};
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_VIDEO_TOKEN:
      return {
        ...state,
        roomName: action.payload.roomName,
        roomId: action.payload.roomId,
        serverUrl: action.payload.videoServerUrl,
        roomToken: action.payload.token,
      };
    case actionTypes.SET_VIDEO_ERROR:
      return {
        ...state,
        liveError: true,
        liveErrorMsg: action.payload.error,
      };

    default:
      return {...state};
  }
};
