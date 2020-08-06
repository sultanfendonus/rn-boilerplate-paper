import * as actionTypes from '../actions';

const INIT_STATE = {
  // token: localStorage.getItem('token'),
  // profile: JSON.parse(localStorage.getItem('auth_profile')),
  token: null,
  profile: null,
  adminList: null,
  myProfile: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_DATA:
      return {
        ...state,
        profile: action.payload.profile,
        token: action.payload.token,
      };

    case actionTypes.SET_ADMIN_LIST:
      return {...state, adminList: action.payload};

    case actionTypes.SET_MY_PROFILE:
      return {...state, myProfile: action.payload};

    default:
      return {...state};
  }
};
