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
    const { data } = await axios.get('http://localhost:5000/products', config);
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
    await axios.delete(`http://localhost:5000/products/${id}`, config);

    dispatch({
      type: types.DELETE_CAR,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

const addCar = (car) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://localhost:5000/products',
      car,
      config,
    );
    dispatch({
      type: types.ADD_CAR,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCar = (car) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/products/${car.id}`,
      car,
      config,
    );
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
