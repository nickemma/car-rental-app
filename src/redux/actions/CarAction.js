import axios from 'axios';
import * as types from '../constants/carConstants';

const getCars = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CARS_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const { data } = await axios.get('http://localhost:3000/cars', config);
    dispatch({
      type: types.GET_CARS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_CARS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

const deleteCar = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `http://localhost:3000/cars/${id}`,
      config,
    );
    console.log(data);
    dispatch({
      type: types.DELETE_CAR,
      payload: data.id,
    });
  } catch (error) {
    console.log(error);
  }
};

const addCar = (FormData) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    console.log(userInfo.token);
    // post the data using fetch
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:3000/cars',
      data: FormData,
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({
      type: types.ADD_CAR,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCar = (carId, formData) => async (dispatch, getState) => {
  try {
    console.log(carId.id);

    const {
      userLogin: { userInfo },
    } = getState();

    const { data } = await axios({
      method: 'put',
      url: `http://localhost:3000/cars/${carId.id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: {
        id: carId.id,
      },
    });

    dispatch({
      type: types.UPDATE_CAR,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  getCars, deleteCar, addCar, updateCar,
};
