import MainApi from '../api/MainApi';

export const SET_GRADE_LIST = 'SET_GRADE_LIST';
export const SET_SECTION_LIST = 'SET_SECTION_LIST';
export const SET_SUBJECT_LIST = 'SET_SUBJECT_LIST';
export const SET_SCHOOL_LIST = 'SET_SCHOOL_LIST';
export const SET_COURSE_LIST = 'SET_COURSE_LIST';
export const SET_SINGLE_COURSE_ENROLLMENT = 'SET_SINGLE_COURSE_ENROLLMENT';
export const SET_COURSE_SUMMARY = 'SET_COURSE_SUMMARY';

export const getAllGrades = () => async (dispatch) => {
  try {
    const response = await MainApi.get(
      '/grades?page=0&size=100&sort=createdAt,desc',
    );

    if (response.status === 200) {
      dispatch({type: SET_GRADE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_GRADE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllSections = () => async (dispatch) => {
  try {
    const response = await MainApi.get(
      '/sections?page=0&size=100&sort=createdAt,desc',
    );

    if (response.status === 200) {
      dispatch({type: SET_SECTION_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_SECTION_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllSubjects = () => async (dispatch) => {
  try {
    const response = await MainApi.get(
      '/subjects?page=0&size=500&sort=createdAt,desc',
    );

    if (response.status === 200) {
      dispatch({type: SET_SUBJECT_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_SUBJECT_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllSchools = () => async (dispatch) => {
  try {
    const response = await MainApi.get(
      '/institute_user_links?page=0&size=100&sort=createdAt,desc',
    );

    if (response.status === 200) {
      dispatch({type: SET_SCHOOL_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_SCHOOL_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const addNewCourse = (data) => async (dispatch) => {
  try {
    const response = await MainApi.post('/courses', data);

    if (response.status === 201) {
      dispatch(getAllCourseByUser());
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    // console.log(error)
    console.log(error);
  }
};

export const editCourse = (data) => async (dispatch) => {
  try {
    const response = await MainApi.patch(`/course/${data.uuid}`, data);
    if (response.status == 200) {
      dispatch(getAllCourseByUser());
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = (course_uuid) => async (dispatch) => {
  try {
    const response = await MainApi.delete(`/course/${course_uuid}`);
    if (response.status == 200) {
      dispatch(getAllCourseByUser());
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllCourse = (
  teacherId = null,
  instituteId = null,
  searchText = null,
) => async (dispatch) => {
  dispatch({type: SET_COURSE_LIST, payload: null});
  try {
    let filterUrl = '/courses?page=0&size=100&sort=createdAt,desc';
    if (teacherId) {
      filterUrl = filterUrl + `&teacherUuid=${teacherId}`;
    }

    if (instituteId) {
      filterUrl = filterUrl + `&instituteUuid=${instituteId}`;
    }

    if (searchText) {
      filterUrl = filterUrl + `&title=${searchText}`;
    }

    const response = await MainApi.get(filterUrl);
    if (response.status === 200) {
      dispatch({type: SET_COURSE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_COURSE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllCourseByUser = () => async (dispatch) => {
  dispatch({type: SET_COURSE_LIST, payload: null});
  try {
    const response = await MainApi.get('/courses/my');

    if (response.status === 200) {
      dispatch({type: SET_COURSE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_COURSE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllCourseStudent = () => async (dispatch) => {
  dispatch({type: SET_COURSE_LIST, payload: null});
  try {
    const response = await MainApi.get('/courses/my?state=Accepted');

    if (response.status === 200) {
      dispatch({type: SET_COURSE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_COURSE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllPendingCourseStudent = () => async (dispatch) => {
  dispatch({type: SET_COURSE_LIST, payload: null});
  try {
    const response = await MainApi.get('/courses/my?state=Awaiting');

    if (response.status === 200) {
      dispatch({type: SET_COURSE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_COURSE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const joinACourseStudent = (courseId) => async (dispatch) => {
  try {
    const response = await MainApi.post(`/enrolment/apply/${courseId}`);

    if (response.status === 200) {
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getCourseEnrollmentStatus = (courseId) => async (dispatch) => {
  try {
    dispatch({type: SET_SINGLE_COURSE_ENROLLMENT, payload: null});

    const response = await MainApi.get(
      `/enrolment/course/${courseId}/my?page=0&size=20&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_SINGLE_COURSE_ENROLLMENT, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({
        type: SET_SINGLE_COURSE_ENROLLMENT,
        payload: {content: []},
      });
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const fetchCourseSummary = (courseId) => async (dispatch) => {
  try {
    // dispatch({ type: SET_COURSE_SUMMARY, payload: null });
    const response = await MainApi.get(`/course/${courseId}/summary`);

    if (response.status === 200) {
      dispatch({type: SET_COURSE_SUMMARY, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_COURSE_SUMMARY, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};
