import axios from 'axios';
import * as types from '../constants/carConstants';

const getCars = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const { data } = await axios.get('http://localhost:3000/cars', config);
    dispatch({
      type: types.GET_CARS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteCar = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    await axios.delete(`http://localhost:3000/cars/${id}`, config);

    dispatch({
      type: types.DELETE_CAR,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

const addCar = (car) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    // const config = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    // const bodyParameters = {
    //   key: 'value',
    // };
    console.log(userInfo.token);
    // const { data } = await axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/cars',
    //   data: formData,
    //   bodyParameters,
    //   config,
    // });
    // send data using fetch
    const response = await fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      body: car,
    });
    const data = await response.json();
    console.log(data);
    dispatch({
      type: types.ADD_CAR,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCar = (carId, car) => async (dispatch, getState) => {
  try {
    console.log(carId.id);

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `http://localhost:3000/cars/${carId.id}`,
      car,
      config
    );
    dispatch({
      type: types.UPDATE_CAR,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getCars, deleteCar, addCar, updateCar };
