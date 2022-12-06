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
      'https://rails-production-c0ec.up.railway.app/auth',
      { email, password },
      config,
    );

    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: data,
    });
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
      url: 'https://rails-production-c0ec.up.railway.app/register',
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

const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.GET_USERS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'GET',
      url: 'https://rails-production-c0ec.up.railway.app/users',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: types.GET_USERS_SUCCESS,
      payload: data,
    });
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

// update role user
const updateUser = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'POST',
      url: 'https://rails-production-c0ec.up.railway.app/toggle_admin',
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: { id },
    });
    dispatch({
      type: types.TOGGLE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.TOGGLE_USER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

// delete user
const deleteUser = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'DELETE',
      url: `https://rails-production-c0ec.up.railway.app/users/${id}`,
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: types.DELETE_USER_SUCCESS,
      payload: data.id,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_USER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

export {
  login, register, logout, getUsers, updateUser, deleteUser,
};
