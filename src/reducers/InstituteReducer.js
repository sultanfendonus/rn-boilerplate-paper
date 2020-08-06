import * as actionTypes from '../actions';

const INIT_STATE = {
  instituteList: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_INSTITUTE_LIST:
      return {...state, instituteList: action.payload};

    default:
      return {...state};
  }
};
