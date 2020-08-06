import AuthApi from '../api/AuthApi';
import MainApi from '../api/MainApi';

export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const SET_ADMIN_LIST = 'SET_ADMIN_LIST';
export const SET_MY_PROFILE = 'SET_MY_PROFILE';

export const getAuthData = (token, history) => async (dispatch) => {
  try {
    const response = await AuthApi.get('/auth/api/v1/popup-user-profile/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    if (response.status === 200) {
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem(
        'auth_profile',
        JSON.stringify(response.data.profile),
      );
      dispatch({type: SET_AUTH_DATA, payload: response.data});

      let role;
      // const role = localStorage.getItem('role');
      if (role === 'student') {
        dispatch(registerToOpenSchool(token, role));
        history.push('/dashboard/student/overview');
      } else if (role === 'teacher') {
        dispatch(registerToOpenSchool(token, role));
        history.push('/dashboard');
      }
      // dispatch(checkAdmin(response.data.profile.email, history, token))
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerToOpenSchool = (token, role) => async (dispatch) => {
  try {
    await MainApi.get('/register_open_school', {
      headers: {
        Authorization: `Token ${token}`,
        role: role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = () => async (dispatch) => {
  try {
    const response = await MainApi.get('/profile/my');

    if (response.status === 200) {
      dispatch({type: SET_MY_PROFILE, payload: response.data});
    }
  } catch (error) {
    console.log(error);
  }
};
