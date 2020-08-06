import * as actionTypes from '../actions';

const INIT_STATE = {
  teacherList: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_TEACHER_LIST:
      return {...state, teacherList: action.payload};

    default:
      return {...state};
  }
};
