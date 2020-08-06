import {combineReducers} from 'redux';

import sessionReducer from './sessionReducer';
import AuthReducer from './AuthReducer';
import CourseReducer from './CourseReducer';
import PeopleReducer from './PeopleReducer';
import TeacherReducer from './TeacherReducer';
import InstituteReducer from './InstituteReducer';
import LectureReducer from './LectureReducer';
import MaterialReducer from './MaterialReducer';
import LiveVideoReducer from './LiveVideoReducer';
import AssignmentReducer from './AssignmentReducer';
import StudentReducer from './StudentReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  AuthReducer: AuthReducer,
  CourseReducer: CourseReducer,
  PeopleReducer: PeopleReducer,
  TeacherReducer: TeacherReducer,
  InstituteReducer: InstituteReducer,
  LectureReducer: LectureReducer,
  MaterialReducer: MaterialReducer,
  LiveVideoReducer: LiveVideoReducer,
  AssignmentReducer: AssignmentReducer,
  StudentReducer: StudentReducer,
});

export default rootReducer;
