import AuthApi from '../api/AuthApi';
import MainApi from '../api/MainApi';

import {getAllSchools} from './CourseActions';

export const SET_INSTITUTE_LIST = 'SET_INSTITUTE_LIST';

export const getAllInstitute = () => async (dispatch) => {
  try {
    const response = await MainApi.get(
      '/institutes?page=0&size=500&sort=createdAt,desc',
    );

    if (response.status === 200) {
      dispatch({type: SET_INSTITUTE_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_INSTITUTE_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const joinInstitute = (instituteId) => async (dispatch) => {
  try {
    console.log(instituteId);
    const response = await MainApi.post('/institute_user_links', {
      instituteUuid: instituteId,
    });

    if (response.status === 201) {
      dispatch(getAllSchools());
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteInstitute = (instituteId) => async (dispatch) => {
  try {
    const response = await MainApi.delete(
      `/institute_user_link/${instituteId}`,
    );

    if (response.status === 200) {
      dispatch(getAllSchools());
    }
  } catch (error) {
    console.log(error);
  }
};
