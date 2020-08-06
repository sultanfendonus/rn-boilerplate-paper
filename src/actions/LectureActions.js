import MainApi from '../api/MainApi';

export const SET_LECTURE_LIST = 'SET_LECTURE_LIST';

export const createNewLecture = (courseId, data) => async (dispatch) => {
  try {
    const response = await MainApi.post(`/course/${courseId}/lectures`, data);

    if (response.status === 201) {
      // dispatch({type: SET_LECTURE_LIST, payload: response.data});
      dispatch(getLectures(courseId));
    }
  } catch (error) {
    console.log(error);
  }
};

export const editLecture = (courseUuid, data) => async (dispatch) => {
  try {
    const response = await MainApi.patch(`/lecture/${data.uuid}`, data);
    if (response.status == 200) {
      dispatch(getLectures(courseUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteLecture = (lectureUuid, courseUuid) => async (dispatch) => {
  try {
    const response = await MainApi.delete(`/lecture/${lectureUuid}`);
    if (response.status == 200) {
      dispatch(getLectures(courseUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLectures = (courseId) => async (dispatch) => {
  try {
    dispatch({type: SET_LECTURE_LIST, payload: null});

    const response = await MainApi.get(
      `/course/${courseId}/lectures?page=0&size=100&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_LECTURE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_LECTURE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};
