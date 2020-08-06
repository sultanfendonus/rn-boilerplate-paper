import MainApi from '../api/MainApi';
export const SET_VIDEO_TOKEN = 'SET_VIDEO_TOKEN';
export const SET_VIDEO_ERROR = 'SET_VIDEO_ERROR';

export const getLiveVideoToken = (lectureUid) => async (dispatch) => {
  try {
    const response = await MainApi.get(`/lecture/${lectureUid}/video-token`);

    if (response.status === 200) {
      dispatch({type: SET_VIDEO_TOKEN, payload: response.data});
    }
  } catch (error) {
    dispatch({type: SET_VIDEO_ERROR, payload: error.response.data});
    // error.response && message.error(error.response.data.message)
    console.log(error.response);
  }
};
