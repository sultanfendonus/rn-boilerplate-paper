import * as actionTypes from '../actions';

const INIT_STATE = {
  courseStudentList: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_COURSE_STUDENT_LIST:
      return {...state, courseStudentList: action.payload};

    default:
      return {...state};
  }
};
