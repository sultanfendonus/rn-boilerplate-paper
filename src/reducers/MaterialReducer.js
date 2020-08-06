import * as actionTypes from '../actions';

const INIT_STATE = {
  fileList: [],
  materialList: null,
  assetListOfMaterial: null,
  isFileUploading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_URI_LIST:
      return {...state, fileList: [...state.fileList, action.payload]};

    case actionTypes.SET_URI_LIST_EMPTY:
      return {...state, fileList: action.payload};

    case actionTypes.SET_MATERIAL_LIST:
      return {...state, materialList: action.payload};

    case actionTypes.SET_ASSET_LIST:
      return {...state, assetListOfMaterial: action.payload};

    case actionTypes.SET_FILE_UPLOAD_STATUS:
      return {...state, isFileUploading: action.payload};

    default:
      return {...state};
  }
};
