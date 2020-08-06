import * as actionTypes from '../actions';

const INIT_STATE = {
  assignmentList: null,
  studentSubmissionInAssignment: null,
  allSubmissionOfAnAssignment: null,
  assetListOfAssignment: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ASSIGNMENT_LIST:
      return {...state, assignmentList: action.payload};

    case actionTypes.SET_SUBMISSION_LIST:
      return {...state, studentSubmissionInAssignment: action.payload};

    case actionTypes.SET_SUBMISSION_LIST_OF_ASSIGNMENT:
      return {...state, allSubmissionOfAnAssignment: action.payload};

    case actionTypes.SET_ASSET_LIST_OF_ASSIGNMENT:
      return {...state, assetListOfAssignment: action.payload};

    default:
      return {...state};
  }
};
