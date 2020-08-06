import MainApi from '../api/MainApi';

export const SET_COURSE_STUDENT_LIST = 'SET_COURSE_STUDENT_LIST';

export const getAllStudentsFromCourse = (
  courseId,
  status,
  defaultNull = true,
) => async (dispatch) => {
  try {
    defaultNull && dispatch({type: SET_COURSE_STUDENT_LIST, payload: null});

    const response = await MainApi.get(
      `/course/${courseId}/students?state=${status}&page=0&size=100&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_COURSE_STUDENT_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_COURSE_STUDENT_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const approveOrDeclinePeople = (
  courseId,
  userId,
  decision,
  peopleTypeToFetch,
) => async (dispatch) => {
  try {
    const response = await MainApi.post(`/enrolment/decide/${courseId}`, {
      courseUuid: courseId,
      studentUuid: userId,
      state: decision,
    });

    if (response.status === 200) {
      dispatch(getAllStudentsFromCourse(courseId, peopleTypeToFetch, false));
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)

    console.log(error);
  }
};
