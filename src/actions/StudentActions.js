import AuthApi from '../api/AuthApi';
import MainApi from '../api/MainApi';

export const SET_STUDENT_LIST = 'SET_STUDENT_LIST';

export const getAllStudent = (name) => async (dispatch) => {
  try {
    const response = await MainApi.get(
      `/students?page=0&size=10&sort=createdAt,desc&name=${name}`,
    );

    if (response.status === 200) {
      dispatch({type: SET_STUDENT_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_STUDENT_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};
