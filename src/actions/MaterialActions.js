import MainApi from '../api/MainApi';

export const SET_URI_LIST = 'SET_URI_LIST';
export const SET_URI_LIST_EMPTY = 'SET_URI_LIST_EMPTY';
export const SET_MATERIAL_LIST = 'SET_MATERIAL_LIST';
export const SET_ASSET_LIST = 'SET_ASSET_LIST';
export const SET_FILE_UPLOAD_STATUS = 'SET_FILE_UPLOAD_STATUS';

export const uploadFile = (file) => async (dispatch) => {
  try {
    dispatch({type: SET_FILE_UPLOAD_STATUS, payload: true});
    const data = new FormData();
    file && data.append('file', file);

    const response = await MainApi.post('/assets/upload', data);

    if (response.status === 201) {
      dispatch({type: SET_URI_LIST, payload: response.data});
      dispatch({type: SET_FILE_UPLOAD_STATUS, payload: false});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    dispatch({type: SET_FILE_UPLOAD_STATUS, payload: false});

    console.log(error);
  }
};

export const createNewMaterial = (data, courseId) => async (dispatch) => {
  try {
    const response = await MainApi.post(`/course/${courseId}/materials`, data);

    if (response.status === 201) {
      dispatch(getMaterialOfCourse(courseId));
      dispatch({type: SET_URI_LIST_EMPTY, payload: []});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)

    console.log(error);
  }
};

export const editMaterial = (data, courseUuid) => async (dispatch) => {
  try {
    const response = await MainApi.patch(`/material/${data.uuid}`, data);

    if (response.status === 200) {
      dispatch(getMaterialOfCourse(courseUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteMaterial = (materialUuid, courseUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.delete(`/material/${materialUuid}`);
    if (response.status === 200) {
      dispatch(getMaterialOfCourse(courseUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMaterialOfCourse = (courseId) => async (dispatch) => {
  try {
    dispatch({type: SET_MATERIAL_LIST, payload: null});

    const response = await MainApi.get(
      `/course/${courseId}/materials/all?page=0&size=100&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_MATERIAL_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_MATERIAL_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const getMaterialOfLecture = (courseId, lectureId) => async (
  dispatch,
) => {
  try {
    dispatch({type: SET_MATERIAL_LIST, payload: null});

    const response = await MainApi.get(
      `/course/${courseId}/lecture/${lectureId}/materials?page=0&size=100&sort=createdAt,desc`,
    );

    if (response.status === 200) {
      dispatch({type: SET_MATERIAL_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_MATERIAL_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const addAssetToMaterial = (data, materialUuid) => async (dispatch) => {
  try {
    const response = await MainApi.post(
      `/material/${materialUuid}/assets`,
      data,
    );
    // console.log(response);
    if (response.status === 200) {
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteAssetFromMaterial = (materialUuid, assetUuid) => async (
  dispatch,
) => {
  try {
    const response = await MainApi.delete(
      `/material/${materialUuid}/asset/${assetUuid}`,
    );
    if (response.status === 200) {
      dispatch(fetchAssets(materialUuid));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchAssets = (materialId) => async (dispatch) => {
  try {
    dispatch({type: SET_ASSET_LIST, payload: null});
    const response = await MainApi.get(`/material/${materialId}/assets`);

    if (response.status === 200) {
      dispatch({type: SET_ASSET_LIST, payload: response.data});
    }
    if (response.status === 204) {
      dispatch({type: SET_ASSET_LIST, payload: {content: []}});
    }
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};

export const downloadAsset = (assetId, fileName, mime) => async (dispatch) => {
  try {
    let response = await MainApi.get(`/asset/download/${assetId}`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName); //or any other extension
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    // error.response && message.error(error.response.data.message)
    console.log(error);
  }
};
