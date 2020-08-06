import * as actionTypes from '../actions';
import {SET_SINGLE_COURSE_ENROLLMENT} from '../actions';

const INIT_STATE = {
  grades: null,
  sections: null,
  schools: null,
  subjects: null,
  courseList: null,
  singleCourseEnrollmentStatus: null,
  courseSummary: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_GRADE_LIST:
      return {...state, grades: action.payload};

    case actionTypes.SET_SECTION_LIST:
      return {...state, sections: action.payload};

    case actionTypes.SET_SCHOOL_LIST:
      return {...state, schools: action.payload};

    case actionTypes.SET_SUBJECT_LIST:
      return {...state, subjects: action.payload};

    case actionTypes.SET_COURSE_LIST:
      return {...state, courseList: action.payload};

    case actionTypes.SET_SINGLE_COURSE_ENROLLMENT:
      return {...state, singleCourseEnrollmentStatus: action.payload};

    case actionTypes.SET_COURSE_SUMMARY:
      return {...state, courseSummary: action.payload};

    default:
      return {...state};
  }
};
