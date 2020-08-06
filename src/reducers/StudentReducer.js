import * as actionTypes from '../actions';

const INIT_STATE = {
  studentList: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_STUDENT_LIST:
      return {...state, studentList: action.payload};

    default:
      return {...state};
  }
};
