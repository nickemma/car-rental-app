import axios from 'axios';
import * as types from '../constants/userConstants';

const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: types.USER_LOGIN_REQUEST });

    const config = {
      Headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:3000/auth',
      { email, password },
      config,
    );

    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: types.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.USER_REGISTER_REQUEST });

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3000/users',
      data: formData,
      config,
    });

    dispatch({
      type: types.USER_REGISTER_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: types.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: types.USER_LOGOUT });
};

// userList actions

const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('http://localhost:3000/users', config);

    dispatch({
      type: types.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.USER_LIST_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

export {
  login, register, logout, listUsers,
};
