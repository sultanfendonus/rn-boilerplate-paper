import * as actionTypes from '../actions';

const INIT_STATE = {
  lectureList: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_LECTURE_LIST:
      return {...state, lectureList: action.payload};

    default:
      return {...state};
  }
};
