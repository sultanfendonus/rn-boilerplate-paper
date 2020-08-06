import MainApi from '../api/MainApi';
import {SET_ASSET_LIST} from './MaterialActions';

export const SET_ASSIGNMENT_LIST = 'SET_ASSIGNMENT_LIST';
export const SET_SUBMISSION_LIST = 'SET_SUBMISSION_LIST';
export const SET_SUBMISSION_LIST_OF_ASSIGNMENT =
  'SET_SUBMISSION_LIST_OF_ASSIGNMENT';
export const SET_ASSET_LIST_OF_ASSIGNMENT = 'SET_ASSET_LIST_OF_ASSIGNMENT';

export const getAllAssignment = (courseId) => async (dispatch) => {
  try {
    dispatch({type: SET_ASSIGNMENT_LIST, payload: null});
    const response = await MainApi.get(
      `/course/${courseId}/assignments/all?page=0&size=100&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_ASSIGNMENT_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_ASSIGNMENT_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllAssignmentOfLecture = (courseId, lectureId) => async (
  dispatch,
) => {
  try {
    dispatch({type: SET_ASSIGNMENT_LIST, payload: null});
    const response = await MainApi.get(
      `/course/${courseId}/lecture/${lectureId}/assignments?page=0&size=100&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_ASSIGNMENT_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_ASSIGNMENT_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const createNewAssignment = (courseId, data) => async (dispatch) => {
  try {
    const response = await MainApi.post(
      `/course/${courseId}/assignments`,
      data,
    );

    if (response.status === 201) {
      dispatch(getAllAssignment(courseId));
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const editAssignment = (data, courseUuid) => async (dispatch) => {
  try {
    const response = await MainApi.patch(`/assignment/${data.uuid}`, data);

    if (response.status === 200) {
      dispatch(getAllAssignment(courseUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssignment = (assignmentUuid, courseUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.delete(`/assignment/${assignmentUuid}`);
    if (response.status === 200) {
      dispatch(getAllAssignment(courseUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const createNewSubmission = (assignmentId, data) => async (dispatch) => {
  try {
    const response = await MainApi.post(
      `/assignment/${assignmentId}/submissions`,
      data,
    );

    if (response.status === 201) {
      dispatch(getSubmission(assignmentId));
    }
  } catch (error) {
    console.log(error);
  }
};

export const editSubmission = (data, assignmentUuid) => async (dispatch) => {
  try {
    const response = await MainApi.patch(`/submission/${data.uuid}`, data);

    if (response.status === 200) {
      dispatch(getSubmission(assignmentUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteSubmission = (submissionUuid, assignmentUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.delete(`/submission/${submissionUuid}`);
    if (response.status == 200) {
      dispatch(getSubmission(assignmentUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getSubmission = (assignmentId) => async (dispatch) => {
  try {
    dispatch({type: SET_SUBMISSION_LIST, payload: null});
    const response = await MainApi.get(
      `/assignment/${assignmentId}/submissions/my`,
    );

    if (response.status === 200) {
      dispatch({type: SET_SUBMISSION_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_SUBMISSION_LIST, payload: {content: []}});
    }
  } catch (error) {
    // if (error.response.status === 404) {
    //   dispatch({ type: SET_SUBMISSION_LIST, payload: { content: null } });
    // }
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getAllSubmissionOfAnAssignment = (assignmentId) => async (
  dispatch,
) => {
  try {
    dispatch({type: SET_SUBMISSION_LIST_OF_ASSIGNMENT, payload: null});
    const response = await MainApi.get(
      `/assignment/${assignmentId}/submissions?page=0&size=100&sort=createdAt,asc`,
    );

    if (response.status === 200) {
      dispatch({
        type: SET_SUBMISSION_LIST_OF_ASSIGNMENT,
        payload: response.data,
      });
    }
    if (response.status === 204) {
      dispatch({
        type: SET_SUBMISSION_LIST_OF_ASSIGNMENT,
        payload: {content: []},
      });
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const fetchAssetsOfSubmission = (submissionId) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ASSET_LIST,
      payload: null,
    });
    const response = await MainApi.get(
      `/submission/${submissionId}/assets?page=0&size=50&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_ASSET_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({
        type: SET_ASSET_LIST,
        payload: {content: []},
      });
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const fetchAssetsOfAssignment = (assignmentUuid) => async (dispatch) => {
  try {
    dispatch({
      type: SET_ASSET_LIST_OF_ASSIGNMENT,
      payload: null,
    });

    const response = await MainApi.get(
      `/assignment/${assignmentUuid}/assets?page=0&size=50&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_ASSET_LIST_OF_ASSIGNMENT, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({
        type: SET_ASSET_LIST_OF_ASSIGNMENT,
        payload: {content: []},
      });
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};
export const addAssetToAssignment = (data, assignmentUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.post(
      `/assignment/${assignmentUuid}/assets`,
      data,
    );
    // console.log(response);
    if (response.status == 200) {
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssetFromAssignment = (assignmentUuid, assetUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.delete(
      `/assignment/${assignmentUuid}/asset/${assetUuid}`,
    );
    if (response.status === 200) {
      dispatch(fetchAssetsOfAssignment(assignmentUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const addAssetToSubmission = (
  data,
  submissionUuid,
  assignmentUuid,
) => async (dispatch) => {
  try {
    const response = await MainApi.post(
      `/submission/${submissionUuid}/assets`,
      data,
    );
    // console.log(response);
    if (response.status === 200) {
      // dispatch(getSubmission(assignmentUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssetFromSubmission = (submissionUuid, assetUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.delete(
      `/submission/${submissionUuid}/asset/${assetUuid}`,
    );
    if (response.status === 200) {
      dispatch(fetchAssetsOfSubmission(submissionUuid));
    }
  } catch (error) {
    console.log(error);
  }
};
